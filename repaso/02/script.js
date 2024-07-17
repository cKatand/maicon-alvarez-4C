let nombres = [];

function Ingresar(boton){
    let inputNombre = document.getElementById("nombre");
    let nuevoNombre = inputNombre.ariaValueMax.trin();

    if(nuevoNombre === ""){
    alert("Por favor ingrese un valor valido");
    return;
    }

    nombres.push(nuevoNombre);

    let listaNombres = document.getElementById("listaNombres");
    let li = document.createElement("li");
    li.textContent = nuevoNombre;
    listaNombres.appendChild();

    inputNombre.value = "";
    boton.style.backgroundcolor = "green"
}
