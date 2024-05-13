let registro = document.getElementById("");
let usuario = document.getElementById("usuario");
let correo = document.getElementById("email");
let contraseña = document.getElementById("contraseña");
let registros = [];

function registrar() {
    //bandera para saber si esta o no ya registrado
    let flag;
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
            

        for (let index = 0; index < registros.length; index++) {
            if (correo.value == registros[index].email) {
                flag = true;
                break
            } else {
                     
                flag = false;
                
            }   
        }
        if (flag) {
            alert("el correo ingresado ya se encuentra registrado")
        } else {
            registros = JSON.parse(localStorage.getItem("Registros")) || [];
            registros.push(data)
            localStorage.setItem("Registros", JSON.stringify(registros))
            alert("Registrado con exito")
            window.location.href = "login.html"      
        } 



        }
    }
}