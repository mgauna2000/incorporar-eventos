let form = document.getElementById("form");
let inputName = document.getElementById("name"); 
let inputLastName = document.getElementById("lastName"); 
let inputEmail = document.getElementById("email"); 
let inputPassword = document.getElementById("password");
let inputCheck = document.getElementById("terms-and-cond");
let inputNotification = document.getElementById("notification");
let btn = document.getElementById("btn");

let dataForm = [];

const register = () => {
    if (inputName.value == "" || inputLastName.value == "" || inputEmail.value == "" || inputPassword.value == "") {
        alert("Ingrese correctamente los datos");
    }else{
        dataForm.push(inputName.value, inputLastName.value, inputEmail.value, inputPassword.value)
        console.log(dataForm);

        inputLastName.value = ""
        inputLastName = ""
        inputEmail = ""


        alert("Registrado")
    }
}

btn.addEventListener("click", register);