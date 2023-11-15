// JQuery
$(document).ready(function(){
    $("#Contacto").html("Contactanos");
});

//AJAX
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onload = function() {
      document.getElementById("vir").innerHTML =
      this.responseText;
    }
    xhttp.open("GET", "Virus.html");
    xhttp.send();
}