function login(){
    let nombreUsuario = prompt("Ingrese su nombre de usuario: ");
    let contraseña = prompt("Ingrese su contraseña: ");

    const usuario = "usuario123";
    const contr = "secreto";

    if (nombreUsuario == usuario && contraseña == contr){
    document.getElementById("lista").innerHTML = "<h2>Lograste acceder</h2>"
}else {
    document.getElementById("lista").innerHTML = "<h2>no lograste acceder</h2>"
}

}