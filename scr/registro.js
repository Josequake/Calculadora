let registro = document.getElementById("");
let usuario = document.getElementById("usuario");
let correo = document.getElementById("email");
let contraseña = document.getElementById("contraseña");
let registros = [];

function registrar() {
    registros = JSON.parse(localStorage.getItem("Registros")) || [];
    if (usuario.value != "" && correo.value != "" && contraseña.value != "") {
        data = {
            username: usuario.value,
            email: correo.value,
            password: contraseña.value
        }
        if (registros.length == 0) {
            registros = JSON.parse(localStorage.getItem("Registros")) || [];
            registros.push(data)
            localStorage.setItem("Registros", JSON.stringify(registros))
            alert("Registrado con exito")
            window.location.href = "login.html"
        }else{
        for (let registros = 1; registros < registros.length; registros++) {
            if (correo.value == registros[registros].email) {
                alert("el correo ingresado ya se encuentra registrado")
                break
            } else {
                registros = JSON.parse(localStorage.getItem("Registros")) || [];
                registros.push(data)
                localStorage.setItem("Registros", JSON.stringify(registros))
                alert("Registrado con exito")
                break
                
                
                
            }   
        } window.location.href = "login.html"

        }
    }
}



