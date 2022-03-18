let form = document.getElementById("form");
let inputName = document.getElementById("name"); 
let inputEmail = document.getElementById("email"); 
let inputPassword = document.getElementById("password")

const textoNombre = document.getElementById("textoNombre"); //P

form.addEventListener("submit", enviarFormulario);

function enviarFormulario(e) {
    e.preventDefault();
    console.log("Formulario Enviado");
}