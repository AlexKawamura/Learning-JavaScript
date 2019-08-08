var tempoInicial = $("#tempo-digitacao").text();
var campo = $(".campo-digitacao");
var botaoRestart = $("#botao-reiniciar");
var frase = $(".frase") /* ou jQuery(".frase") */ ;
var botaoBusca = $("#botao-buscar");

/* $(function(){...}); ou $(document).ready(function(){...}); */

$(function() {
    atualizaTamanhoFrase();
    inicializaContadores();
    inicializaCronometro();
    inicializaMarcadores();
    desabilitaBusca();
    atualizaPlacar();
    $(".botao-remover").click(removeLinha);
    botaoRestart.click(reiniciaJogo); /* .on("click", ) */
});

function desabilitaBusca(){
    botaoBusca.attr("disabled", true);
    $("#frase-id").on("input", function() {
        if($("#frase-id").val() == ""){
            botaoBusca.attr("disabled", true);
        } else {
            botaoBusca.attr("disabled", false);
        }
    });
}

function atualizaTamanhoFrase() {
    var numPalavras = frase.text().split(" ").length;
    $("#tamanho-frase").text(numPalavras);

    var numCaracteres = frase.text();
    $("#qnt-caracteres").text(numCaracteres.length);
}

function atualizaTempoInicial(tempo) {
    tempoInicial = tempo;
    $("#tempo-digitacao").text(tempo);
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
    campo.one("focus", function() {
        var tempoDigi = $("#tempo-digitacao").text();
        var IDcronometro = setInterval(function(){
            tempoDigi--;
            $("#tempo-digitacao").text(tempoDigi);
            if(tempoDigi < 1) {
                clearInterval(IDcronometro);
                finalizaJogo();
            }
        }, 1000);
        botaoRestart.attr("disabled", true);
    });
}

function finalizaJogo() {
    campo.attr("disabled", true);
    botaoRestart.attr("disabled", false);
    //campo.css("background-color", "lightgray"); //Não é uma boa prática
    //campo.addClass("campo-desativado"); //Apenas desativa
    campo.toggleClass("campo-desativado"); // Desativa e ativa novamente
    inserePlacar();
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