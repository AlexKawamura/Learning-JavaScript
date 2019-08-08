var placar = $(".placar");

$(function() {
    $("#botao-placar").click(mostraPlacar);
    $("#botao-sinc").click(sincronizaPlacar);
});

function inserePlacar() {
    var corpoTabela = $(".placar").find("tbody");
    var usuario = "Alexandre";
    var numPalavras = $("#contador-palavras").text();
    var linha = novaLinha(usuario, numPalavras);

    linha.find(".botao-remover").click(removeLinha);

    //corpoTabela.append(linha); //Adiciona por último
    corpoTabela.prepend(linha); //Adiciona no começo
    
    placar.slideDown(500);
    scrollPlacar();
}

function novaLinha(usuario, numPalavras) {
    var linha = $("<tr>");
    var colunaUsuario = $("<td>").text(usuario);
    var colunaPalavras = $("<td>").text(numPalavras);
    var colunaRemover = $("<td>");

    var link = $("<a>").attr("href", "#").addClass("botao-remover");
    var icone = $("<i>").addClass("small").addClass("material-icons").text("delete");

    link.append(icone);
    colunaRemover.append(link);
    linha.append(colunaUsuario);
    linha.append(colunaPalavras);
    linha.append(colunaRemover);

    return linha;
}

function removeLinha(event) {
    event.preventDefault();
    
    var linha = $(this).parent().parent();
    
    linha.fadeOut(500);
    setTimeout(function() {
        linha.remove()
    }, 500);
}

function mostraPlacar() {
    //$(".placar").css("display", "block");
    //$(".placar").show(); $(".placar").hide();
    //$(".placar").toggle();
    //$(".placar").slideDown(600); $(".placar").slideUp(600);
    placar.stop().slideToggle(1000);
}

function scrollPlacar() {
    var posicaoPlacar = placar.offset().top;

    $("body").animate({
        scrollTop: posicaoPlacar + "px"
    }, 1000);
}

function sincronizaPlacar() {
    var placar = [];
    var linha = $("tbody>tr");

    linha.each(function() {
        var usuario = $(this).find("td:nth-child(1)").text();
        var palavras = $(this).find("td:nth-child(2)").text();
        
        var score = {
            usuario: usuario,
            palavras:palavras
        };

        placar.push(score);
    });

    var dados = {
        placar: placar
    };

    $.post("http://localhost:3000/placar", dados, function() {
        console.log("Placar salvo no servidor");
    });
}

function atualizaPlacar(){
    $.get("http://localhost:3000/placar", function(data) {
        $(data).each(function() {
            var linha = novaLinha(this.usuario, this.palavra);
            linha.find(".botao-remover").click(removeLinha);
            $("tbody").append(linha);
        });
    });
}