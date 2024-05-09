let registro = document.getElementById("");
let usuario = document.getElementById("usuario");
let correo = document.getElementById("email");
let contraseña = document.getElementById("contraseña");
let registros = [];

function registrar() {
    
    if (usuario.value != "" && correo.value != "" && contraseña.value != "") {
        data = {
            username: usuario.value,
            email: correo.value,
            password: contraseña.value
        }
        registros = JSON.parse(localStorage.getItem("Registros")) || [];
        registros.push(data)
        localStorage.setItem("Registros", JSON.stringify(registros))
        alert("Registrado con exito!")
        window.location.href = "login.html"
    } else {
        alert("No se puede dejar campos incompletos")
    }
}


