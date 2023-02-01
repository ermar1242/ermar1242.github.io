
console.log("Mi Primer Huevo de Pascua"); 

let cero = document.getElementById("cero");
let uno = document.getElementById("uno");
let dos = document.getElementsByClassName("dos");
let tres = document.getElementsByClassName("tres");
let cuatro = document.getElementsByClassName("cuatro");
let cinco = document.getElementsByClassName("cinco");
let seis = document.getElementsByClassName("seis");
let siete = document.getElementsByClassName("siete");
let ocho = document.getElementsByClassName("ocho");
let nueve = document.getElementsByClassName("nueve");
let mas = document.getElementsByClassName("mas");
let menos = document.getElementsByClassName("menos");
let por = document.getElementsByClassName("por");
let division = document.getElementsByClassName("dividir");
let igual = document.getElementsByClassName("iwal");
let borrar = document.getElementsByClassName("borrar");
let resultado = document.getElementById("resultados");

uno.onclick = function(e){
    resultado.TextContent = resultado.TextContent + "1";
}