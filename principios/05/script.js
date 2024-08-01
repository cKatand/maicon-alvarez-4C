let vueltas = parseInt(prompt("Ingrese la cantidad de números: "));
let suma = 0;

for(i = 1; i <= vueltas; i++){
    suma += i;
}

console.log(`La suma de los primeros ${vueltas} números naturales es: ${suma}`);