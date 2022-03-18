let form = document.getElementById("formulario");
let inputNombre = document.getElementById("nombre"); //INPUT
let inputApellidos = document.getElementById("apellidos"); //INPUT apellidos

const textoNombre = document.getElementById("textoNombre"); //P

form.addEventListener("submit", enviarFomulario);

const enviaFormulario = (e) => {
    e.preventDefault();
    console.log(`La persona se llama ${inputNombre.value} ${inputApellidos.value}`);
}