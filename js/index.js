let form = document.getElementById("form");
let inputName = document.getElementById("name");
let inputLastName = document.getElementById("lastName");
let inputEmail = document.getElementById("email");
let inputPassword = document.getElementById("password");
let inputCheck = document.getElementById("terms-and-cond");
//ya da igual si elije o no las notificaciones asi que no le hago 
//un if si acepta que le lleguen las notis, solo lo pongo para sastififacer 
//al tutor que queda mejor el estilo del register jaja 
let inputNotification = document.getElementById("notification");
let btn = document.getElementById("btn");

let dataForm = [];

const register = () => {
  if (
    inputName.value == "" ||
    inputLastName.value == "" ||
    inputEmail.value == "" ||
    inputPassword.value == "" ||
    inputCheck.checked == false
  ) {
    alert(
      "Ingrese correctamente los datos y acepte los terminos y condiciones!"
    );
  } else {
    dataForm.push({
      nombre: inputName.value,
      apellido: inputLastName.value,
      email: inputEmail.value,
      password: inputPassword.value,
    });
    console.log(dataForm);

    const becomeJSON = JSON.stringify(dataForm);
    localStorage.setItem("usuario", becomeJSON);
    console.log(localStorage);

    inputName.value = "";
    inputLastName.value = "";
    inputEmail.value = "";
    inputPassword.value = "";

    alert("Registrado!");
  }
};

btn.addEventListener("click", register);
