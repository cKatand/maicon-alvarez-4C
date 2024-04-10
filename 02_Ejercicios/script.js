function operandoMetodos() {
    const array = [20, 10, 40, 35, 5, 90, 89, 47, 39, 56]   
    const array2 = [20, 10, 40, 35, 5, 90, 89, 47, 39, 56]
    let eliminados = []
    eliminados.push(array2.pop(), array2.shift())
    let agregados = []
    agregados.push(array2.push(10), array2.unshift(9))
    let suma = array2.reduce((total, num) => total + num, 0);
    alert(`Los datos en el arreglo sin modificar son: ${array}\nLos datos en el arreglo modificados son: ${array2} \nlos datos eliminados son: ${eliminados} \nlos datos agregados son: ${agregados} \nla suma de los elementos es: ${suma}`);
}


function modificarMensaje() {
    const eliminados = [];
    const agregados = [];
    const mensajeInicial = ["hola  a", "todos", "los", "estudiantes", "de", "programacion", "de 4°C"];
    const mensajeInicial2 = ["hola a" , "todos", "los", "estudiantes", "de", "programacion", "de 4°C"];

    eliminados.push(mensajeInicial.pop(), mensajeInicial.shift())
    agregados.push(mensajeInicial.push('somos',"los mejores","del", "mundo"));
    alert(`El mensaje sin modificar es: ${mensajeInicial2}\nEl mensaje  modificado es: ${mensajeInicial}\nEl texto eliminado es: ${eliminados}\nEl texto agregado es: ${agregados}`)
}