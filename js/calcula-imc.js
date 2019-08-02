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

    var pesoValido = true;
    var alturaValida = true;

    if(peso <= 0 || peso >= 1000) {
        console.log("Peso Inválido");
        pesoValido = false;
        tdImc.textContent = "Peso Inválido!";
        //paciente.style.color = "red";
        paciente.classList.add("paciente-invalido");
    }

    if(altura <= 0 || altura >= 3.00) {
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

function calculaImc(peso, altura) {
    var imc = 0;

    imc = peso / (altura * altura);

    return imc.toFixed(2);
}
