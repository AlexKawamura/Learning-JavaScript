var pacientes = document.querySelectorAll(".paciente");
console.log(pacientes);

for(var i = 0; i < pacientes.length; i++){
    console.log(pacientes[i]);

    var paciente = pacientes[i];

    var tdPeso = paciente.querySelector(".info-peso");
    console.log(tdPeso);
    var peso = tdPeso.textContent;
    console.log(peso);

    var tdAltura = paciente.querySelector(".info-altura");
    console.log(tdAltura);
    var altura = tdAltura.textContent;
    console.log(altura);

    var tdImc = paciente.querySelector(".info-imc");

    var pesoValido = validaPeso(peso);
    var alturaValida = validaAltura(altura);

    if(!pesoValido) {
        console.log("Peso Inválido");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        //paciente.style.color = "red";
        paciente.classList.add("paciente-invalido");
    }

    if(!alturaValida) {
        console.log("Altura Inválido");
        alturaValida = false;
        tdImc.textContent = "Altura Inválida!";
        //paciente.style.backgroundColor = "lightcoral";
        paciente.classList.add("paciente-invalido");
    }

    if(pesoValido && alturaValida) {
        var imc = calculaImc(peso, altura);
        tdImc.textContent = imc;
    }
}

function validaPeso(peso) {
    if(peso > 0 && peso < 800) {
        return true;
    } else {
        return false;
    }
}

function validaAltura(altura) {
    if(altura > 0 && altura < 3.00) {
        return true;
    } else {
        return false;
    }
}

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
