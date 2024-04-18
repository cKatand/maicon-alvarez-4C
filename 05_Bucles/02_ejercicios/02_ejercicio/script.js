//Suma del 1 al 10
function suma() {
let contador = 1;
let suma = 0;
let sumaStr = "";
let array = [];

while(contador <= 10){
    suma += count;
    sumaStr += count + "+"; //concatenar
    array.push(suma);
    count++;
}
    suma += count;
    sumaStr += count + " = " + suma;

document.getElementById("lista").innerHTML = `<p>suma de 10 numeros: </p><h2>${array}</h2>`
}