// AJAX em jQuery = $.get();

$("#botao-frase").click(requisitaFrases);
$("#botao-buscar").click(buscaFrase);

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

function buscaFrase() {
    $("#loader").toggle();
    $(".frase").hide();

    var fraseId = $("#frase-id").val();
    var dados = {id: fraseId};

    $.get("http://localhost:3000/frases", dados, trocaFrase)
    .fail(function() {
        $("#erro").toggle();
        setTimeout(function() {
            $("#erro").toggle();
        }, 2000);
    })
    .always(function() {
        $("#loader").toggle();
        $(".frase").show();
    });

    $("#frase-id").val("");
    desabilitaBusca();
}

function trocaFrase(data) {
    var frase = $(".frase");

    frase.text(data.texto);
    atualizaTamanhoFrase();
    atualizaTempoInicial(data.tempo);
}