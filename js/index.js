let form = document.getElementById("form");
let inputName = document.getElementById("name"); 
let inputLastName = document.getElementById("lastName"); 
let inputEmail = document.getElementById("email"); 
let inputPassword = document.getElementById("password");
let inputCheck = document.getElementById("terms-and-cond");
let inputNotification = document.getElementById("notification")

const textoNombre = document.getElementById("textoNombre"); //P

form.addEventListener("submit", sendForm);

function sendForm(e) {
    e.preventDefault();
    console.log("Submitted form");
}