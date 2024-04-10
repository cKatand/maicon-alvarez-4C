//Ejercicios Creacion de variables

//Una variable global de tipo
var global = "Global";
//Variable Local
let local = "Local";
//Constante
const constante = "constante";
//numEntero
let num = 4;
//Decimal
let Decimal = 3.1416;
//Texto
let Texto = "cadenaTexto"
//Booleano
let Booleano = false;
//Arreglo
let array = ["elPepe","17","18","Guts"];
//Objeto
let Objeto = {Edad:16, Nombre:"Maicon",animal:"Perro"};
//Indefinida
let Indefinida;
//Nulo
let nulo = null;
//Operacion
function sumar(num1, num2){return num1 + num2;}
console.log(sumar(10,5));
console.log("Variables:/nEntero " + num +"\nDecimal: " + Decimal +"\nTexto: "+Texto + "\nBooleano: " + Booleano + "\nArray: " + array + "\nObjeto: " + Objeto + "\nIndefinida: " + Indefinida + "\nNula: " + nulo + "\nResultadoDeFunciiones" + sumar());
console.log("Variables: Global: " + global + "- Local: " + local + "- Constante: " +constante + "- numEntero;"+ num - "Decimal: " + Decimal + "cadenaTexto" + Texto)