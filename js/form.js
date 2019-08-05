var botaoAdicionar = document.querySelector("#adicionar-paciente");
botaoAdicionar.addEventListener("click", 
    function(event) {
        event.preventDefault();
        
        var form = document.querySelector("#form-adiciona");
        //Extraindo informaçãoes do formulário
        var paciente = obtemInformacaoDoForm(form);
        var erros = validaPaciente(paciente);

        if(erros.length > 0) {
            exibeMensagensDeErro(erros);
            return;
        }

        //Monta tr e td do paciente
        var trPaciente = montaTr(paciente);
        var tabela = document.querySelector("#tabela-pacientes");

        tabela.appendChild(trPaciente);

        form.reset();

        var mensagensErro = document.querySelector("#mensagens-erro");
        mensagensErro.innerHTML = "";

    }
);

function exibeMensagensDeErro(erros) {
    var ul = document.querySelector("#mensagens-erro");
    ul.innerHTML = "";
    erros.forEach(function(erro) {
        var li = document.createElement("li");
        li.textContent = erro;
        ul.appendChild(li);
    });
}

function validaPaciente(paciente) {
    var erros = [];

    if(!validaPeso(paciente.peso)) {
        erros.push("Peso é inválido");
    }
    if(!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }
    if(paciente.nome.length == 0) {
        erros.push("O campo nome está vazio");
    }
    if(paciente.gordura.length == 0) {
        erros.push("O campo gordura está vazio");
    }

    return erros;
}

function obtemInformacaoDoForm(form) {
    var Paciente = {
        nome: form.nome.value,
        peso: form.peso.value,
        altura: form.altura.value,
        gordura: form.gordura.value,
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return Paciente;
}

function montaTr(paciente) {
    var trPaciente = document.createElement("tr");

    trPaciente.appendChild(montaTd(paciente.nome, "info-nome"));
    trPaciente.appendChild(montaTd(paciente.peso, "info-peso"));
    trPaciente.appendChild(montaTd(paciente.altura, "info-altura"));
    trPaciente.appendChild(montaTd(paciente.gordura, "info-gordura"));
    trPaciente.appendChild(montaTd(paciente.imc, "info-imc"));

    return trPaciente;
}

function montaTd(dado, classe) {
    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}