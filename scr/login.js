let correo = document.getElementById("email");
let contraseña = document.getElementById("contraseña");
let registros = [];

function ingresar() {
    registros = JSON.parse(localStorage.getItem("Registros"));
    let flag;
    for (let i = 0; i < registros.length; i++) {
        if (correo.value == registros[i].email && contraseña.value ==  registros[i].password) {
            flag = true;
            break
        } 
        else (
            flag = false
        )
    
    }
    if (flag) {
        alert("Ingresado con exito")
        window.location.href = "calculadora.html" 
    }else{
        alert("No encontrado. Correo o contraseña incorrecto");
    }

}
     
    
    
    
