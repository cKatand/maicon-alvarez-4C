function activados(elemento){
    if (elemento.textContent === 'Desactivado'){
        elemento.textContent = 'Activado';
        elemento.style.backgroundColor = 'green'; 
    } else {
        elemento.textContent= 'Desactivado';
        elemento.style.backgroundColor = 'red'; 
    }

}