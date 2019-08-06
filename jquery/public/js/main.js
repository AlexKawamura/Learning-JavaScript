var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var botaoRestart = $("#botao-reiniciar");
var frase = $(".frase") /* ou jQuery(".frase") */ ;

/* $(function(){...}); ou $(document).ready(function(){...}); */

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    botaoRestart.click(reiniciaJogo); /* .on("click", ) */
});

function atualizaTamanhoFrase() {
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
                //campo.css("background-color", "lightgray"); Não é uma boa prática
                //campo.addClass("campo-desativado"); //Apenas desativa
                campo.toggleClass("campo-desativado"); // Desativa e ativa novamente
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
    campo.toggleClass("campo-desativado");
    campo.removeClass("borda-verde");
    campo.removeClass("borda-vermelha");
}

function inicializaMarcadores() {
    campo.on("input", function() {
        var digitado = campo.val();
        var comparavel = frase.text().substr(0, digitado.length);

        if(digitado == comparavel) {
           campo.addClass("borda-verde");
           campo.removeClass("borda-vermelha");
        } else {
           campo.addClass("borda-vermelha");
            campo.removeClass("borda-verde");
        }
        //.startsWith(); Substituto para afunção .substr()
    });
}