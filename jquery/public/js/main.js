var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var botaoRestart = $("#botao-reiniciar");

/* $(function(){...}); ou $(document).ready(function(){...}); */

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    botaoRestart.click(reiniciaJogo); /* .on("click", ) */
});

function atualizaTamanhoFrase() {
    var frase = $(".frase") /* ou jQuery(".frase") */ ;

    var numPalavras = frase.text().split(" ").length;
    $("#tamanho-frase").text(numPalavras);

    var numCaracteres = frase.text();
    $("#qnt-caracteres").text(numCaracteres.length);
}

function inicializaContadores() {
    campo.on("input", function() {
        var conteudo = campo.val();

        var qntPalavras = conteudo.split(/\S+/).length - 1;
        $("#contador-palavras").text(qntPalavras);

        var qntCaracteres = conteudo.length;
        $("#contador-caracteres").text(qntCaracteres);
    });
}

function inicializaCronometro() {
    var tempoDigi = $("#tempo-digitacao").text();
    campo.one("focus", function() {
        var IDcronometro = setInterval(function(){
            tempoDigi--;
            $("#tempo-digitacao").text(tempoDigi);
            if(tempoDigi < 1) {
                campo.attr("disabled", true);
                clearInterval(IDcronometro);
                botaoRestart.attr("disabled", false);
            }
        }, 1000);
        botaoRestart.attr("disabled", true);
    });
}

function reiniciaJogo() {
    $("#contador-palavras").text(0);
    $("#contador-caracteres").text(0);
    $("#tempo-digitacao").text(tempoInicial);
    campo.val("");
    campo.attr("disabled", false);
    inicializaCronometro();
}