// AJAX

var botaoBuscar = document.querySelector("#buscar-pacientes");

botaoBuscar.addEventListener("click", function() {
    console.log("Buscando pacientes...");
    
    var xhr = new XMLHttpRequest();
    
    xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");

    xhr.addEventListener("load", function() {
        if(xhr.status == 200){
            var response = xhr.responseText;
            var pacientes = JSON.parse(response);
            
            console.log(pacientes);
    
            pacientes.forEach(function(paciente) {
                adicionaPacientesNaTabela(paciente);
            });
        } else {
            var erroAjax = document.querySelector("#erro-ajax");
            erroAjax.classList.remove("invisivel")
            console.log(xhr.status);
            console.log(xhr.responseText);
        }
    });

    xhr.send();
});