var frase = $(".frase") /* ou jQuery(".frase") */ ;

var numPalavras = frase.text().split(" ").length;
            /*  = frase.text;
             *  = numPalavras.split(" ");
             *  = numPalavras.length; */

var tamanhaFrase = $("#tamanho-frase").text(numPalavras);
            /*   = $("#tamanho-frase")
             *   = tamanhoFrase.text(numPalavras); */

