//------------------------------// Validación usuario-password //------------------------------//
let validacion = document.getElementById("entry");

validacion.addEventListener("click", () => {
  let user = document.getElementById("name").value;
  let contraseña = document.getElementById("password").value;
  if (user == "javier" && contraseña == "paella") {
    window.location.href = "./index.html";
  } else {
    alert("Acceso denegado");
  }
});
