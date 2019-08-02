var titulo = document.querySelector(".titulo");
console.log(titulo);
console.log(titulo.textContent);

titulo.textContent = "Aparecida Nutricionista";

titulo.addEventListener("click", //easterEgg
    function() {
        console.log("Encontrou um Easter Egg");
    }
);

function easterEgg(){
    console.log("Encontrou um Easter Egg");
}