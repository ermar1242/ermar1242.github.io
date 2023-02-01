console.log("Mi Primer Huevo de Pascua"); 

let Num1;
let Num2;
let Num3;
let operacion;
let contador = 0;

let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementById("dos");
let tres = document.getElementById("tres");
let cuatro = document.getElementById("cuatro");
let cinco = document.getElementById("cinco");
let seis = document.getElementById("seis");
let siete = document.getElementById("siete");
let ocho = document.getElementById("ocho");
let nueve = document.getElementById("nueve");
let mas = document.getElementById("mas");
let menos = document.getElementById("menos");
let por = document.getElementById("por");
let division = document.getElementById("dividir");
let igual = document.getElementById("iwal");
let borrar = document.getElementById("borrar");
let resultado = document.getElementById("resultados");

uno.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "1";
}
dos.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "2";
}
tres.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "3";
}
cuatro.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "4";
}
cinco.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "5";
}
seis.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "6";
}
siete.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "7";
}
ocho.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "8";
}
nueve.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "9";
}
cero.onclick = function(e){
    contador = contador + 1;
    if (contador > 14) {
        return
    }
    resultado.textContent = resultado.textContent  + "0";
}
borrar.onclick = function(e){
    resultado.textContent = "";
    operacion = "";
    Num1 = 0;
    Num2 = 0;
    Num3 = 0;
    contador = 0;
}
mas.onclick = function(e){
    Num1 = resultado.textContent;
    operacion = "+";
    resultado.textContent = "";
    contador = 0;
}
menos.onclick = function(e){
    Num1 = resultado.textContent;
    operacion = "-";
    resultado.textContent = "";
    contador = 0;
}
por.onclick = function(e){
    Num1 = resultado.textContent;
    operacion = "*";
    resultado.textContent = "";
    contador = 0;
}
division.onclick = function(e){
    Num1 = resultado.textContent;
    operacion = "/";
    resultado.textContent = "";
    contador = 0;
}

igual.onclick = function(e){
    Num2 = resultado.textContent;
    resultado.textContent = "";
    if (operacion === "+") {
        if (parseFloat(Num1) + parseFloat(Num2) < 999999999999999) {
            Num3 = parseFloat(Num1) + parseFloat(Num2);
            resultado.textContent = Num3;
        } else{resultado.textContent = "Error";}
    } else if (operacion === "-") {
        if (parseFloat(Num1) - parseFloat(Num2) > -999999999999999) {
            Num3 = parseFloat(Num1) - parseFloat(Num2);
            resultado.textContent = Num3;
        } else{resultado.textContent = "Error";}
    } else if (operacion === "*") {
        if (parseFloat(Num1) * parseFloat(Num2) < 999999999999999) {
            Num3 = parseFloat(Num1) * parseFloat(Num2);
            resultado.textContent = Num3;
        } else{resultado.textContent = "Error";}
    } else if (operacion === "/") {
            Num3 = parseFloat(Num1) / parseFloat(Num2);
            resultado.textContent = Num3;
    } 
    contador = 0;
}