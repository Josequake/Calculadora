let numbers = document.getElementById("numbers");
let ac = document.getElementById("")
let oculto = document.getElementById("oculto")
let flag



function numeros(num) {
    if (numbers.innerHTML == 0) {
        numbers.innerHTML = num;
        oculto.value = "1";
    } else {
        numbers.innerHTML = numbers.innerHTML + num
        
    }
     
}

function encendido(num) {
    numbers.innerHTML = num
   
}
function suma(simbolo) {
    numbers.innerHTML = numbers.innerHTML + simbolo 
    
}
function resta(simbolo) {
    numbers.innerHTML = numbers.innerHTML + simbolo 
    
}
function multiplicacion(simbolo) {
    numbers.innerHTML = numbers.innerHTML + simbolo 
    
}
function division(simbolo) {
    numbers.innerHTML = numbers.innerHTML + simbolo 
    
}
function punto(simbolo) {
    numbers.innerHTML = numbers.innerHTML + simbolo 
    
}
function porcentaje(){
       numbers.innerHTML = numbers.innerHTML*numbers.innerHTML/100
}
function raiz() {
    numbers.innerHTML= Math. sqrt(numbers.innerHTML)

    
}
function igual() {
    numbers.innerHTML = eval(numbers.innerHTML)
}
function cincopor() {
    numbers.innerHTML = numbers.innerHTML*5/100
    
}
function diezpor() {
    numbers.innerHTML = numbers.innerHTML*10/100
    
}
function veinticincopor() {
    numbers.innerHTML = numbers.innerHTML*25/100
    
}
function iva() {
    numbers.innerHTML = numbers.innerHTML*13/100
    
}

function clear() {
    
    numbers.innerHTML = numb.subint(numb.length - 1);  
}
