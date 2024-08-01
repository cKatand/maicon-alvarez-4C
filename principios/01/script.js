let nombre = prompt("Esriba un nombre: ");
let apellido = prompt("Escriba un apellido: ");
let edad = prompt("Escriba su edad: ");

function mostrarDatos(nombre, apellido, edad){
    console.log(`El nombre completo es: ${nombre} apellido ${apellido}`);
    console.log(`La edad es: ${edad}`);
}

mostrarDatos(nombre, apellido, edad);