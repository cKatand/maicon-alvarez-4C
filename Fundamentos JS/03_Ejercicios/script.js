console.log("Vinculado correctamente...")
// Ejercicio 1: Declaración de variables
// Instrucciones: Declara dos variables numéricas llamadas 'ahora' y 'fecha_nac'.
// Luego, calcula y muestra en un mensaje la edad actual basada en el año de nacimiento.

function declararVariables() {
// Tu código aquí
let ahora = 2024;
let fecha_nac = 2007;
let resultado = ahora - fecha_nac;
alert("Mi edad es" + resultado)
}

// Ejercicio 2: Asignación de valores
// Instrucciones: Completa la función para asignar el valor de 'var1' a 'var2' y luego muestra el valor de 'var2'.
function asignarValores() {
// Tu código aquí
let var1 = 23;
let var2 = var1;
alert("El valor de var2 es: " + var2)
}

// Ejercicio 3: Operaciones matemáticas
// Instrucciones: Completa la función para realizar las siguientes operaciones:
// Suma 'num1', 'num2' y 'num3', resta 'num1' de 'num3', multiplica 'num2' por 'num3', y divide 'num1' entre '120'.
// Muestra los resultados en un mensaje.
function realizarOperaciones() {
// Tu código aquí
let num1 = 19;
let num2 = 5;
let num3 = 9;
let suma = num1 + num2 + num3;
let resta = num1 - num3;
let multi = num2 * num3;
let divi = num1 / 120;
alert("la suma es " + suma + "\n la resta es " + resta + "\n la multi es " + multi + "\n la division es " + divi);
}

// Ejercicio 4: Manipulación de cadenas
// Instrucciones: Completa la función para construir un mensaje utilizando las variables 'direccion' y 'n_casa'.
// Luego, muestra la longitud del mensaje y el antepenultimo en el mensaje.
function manipularCadenas() {
// Tu código aquí
let direccion = "Vahia catalina";
let n_casa = "11689";
let mensaje = "direccion: " + direccion + " " + n_casa;
let longitud = mensaje.length;
alert("Mensaje: " + mensaje +"\nLongitud: " + longitud +"\nAntepenultimo caracter: " + $(mensaje(mensaje.length[-3])));
}
// Ejercicio 5: Suma De Valores
// Instrucciones:  Crear un Parrafo <p> con la siguiente descripción:
//“Suma de Valores tomando índices de un arreglo”
function sumaIndices(){
    // Tu código aquí
    let valor = [1,2,3,4,5,6,7];
    let ultimoValor =  valor[valor.length -1];
    let penultimoValor = valor[valor.length -2];
    let primerValor = valor[0];
    suma = ultimoValor + penultimoValor + primerValor;
    alert(`Resultado de la suma de los indices es: ${suma}`);
    }