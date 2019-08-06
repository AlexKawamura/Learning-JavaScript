var frase = $(".frase") /* ou jQuery(".frase") */ ;

var numPalavras = frase.text().split(" ").length;
            /*  = frase.text;
             *  = numPalavras.split(" ");
             *  = numPalavras.length; */

var tamanhaFrase = $("#tamanho-frase").text(numPalavras);
            /*   = $("#tamanho-frase")
             *   = tamanhoFrase.text(numPalavras); */

var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();

    var qntPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qntPalavras);

    var qntCaracteres = conteudo.length;
    $("#contador-caracteres").text(qntCaracteres);
});

