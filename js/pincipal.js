var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

var paciente = document.querySelector("#primeiro-paciente");
console.log(paciente);

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
}

if(altura <= 0 || altura >= 3.00) {
    console.log("Altura Inválido");
    alturaValida = false;
    tdImc.textContent = "Altura Inválida!";
}

if(pesoValido && alturaValida) {
    var imc = peso / (altura * altura);
    tdImc.textContent = imc;
}