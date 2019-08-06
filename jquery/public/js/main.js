var frase = $(".frase") /* ou jQuery(".frase") */ ;

var numPalavras = frase.text().split(" ").length;
$("#tamanho-frase").text(numPalavras);

var numCaracteres = frase.text();
$("#qnt-caracteres").text(numCaracteres.length);

var campo = $(".campo-digitacao");
campo.on("input", function() {
    var conteudo = campo.val();

    var qntPalavras = conteudo.split(/\S+/).length - 1;
    $("#contador-palavras").text(qntPalavras);

    var qntCaracteres = conteudo.length;
    $("#contador-caracteres").text(qntCaracteres);
});

var tempoDigi = $("#tempo-digitacao").text();
campo.one("focus", function() {
    var IDcronometro = setInterval(function(){
        tempoDigi--;
        $("#tempo-digitacao").text(tempoDigi);
        if(tempoDigi < 1) {
            campo.attr("disabled", true);
            clearInterval(IDcronometro);
        }
    }, 1000);
});
