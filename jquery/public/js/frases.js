$("#botao-frase").click(requisitaFrases);

function requisitaFrases() {
    $.get("http://localhost:3000/frases", fraseAleatoria);
}

function fraseAleatoria(data) {
    var frase = $(".frase");
    var numAleatorio = Math.floor(Math.random() * data.length);
    
    frase.text(data[numAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numAleatorio].tempo);
}