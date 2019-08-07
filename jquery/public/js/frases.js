$("#botao-frase").click(requisitaFrases);

function requisitaFrases() {
    $(".frase").hide();
    $("#loader").toggle();

    $.get("http://localhost:3000/frases", fraseAleatoria)
    .fail(function() {
        $("#erro").show();
        setTimeout(function() {
            $("#erro").hide();
        }, 2000);
    })
    .always(function() {
        $(".frase").show();
        $("#loader").toggle();
    });
}

function fraseAleatoria(data) {
    var frase = $(".frase");
    var numAleatorio = Math.floor(Math.random() * data.length);
    
    frase.text(data[numAleatorio].texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data[numAleatorio].tempo);
}