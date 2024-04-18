function numMayor(){
    let arrayNum = [];
    let numMayor = 0;

    for(let i = 0; i < 5; i++){
        let num = parseInt(prompt("Ingrese un numero para determinar el mayor"));
        arrayNum.push(num);
        if(numMayor > num){
            numMayor = num;
        }
    }
    document.getElementById("lista").innerHTML = `De los numeros ingresados: ${arrayNum.join(", ")} Numero mayor: <h2>${numMayor}</h2>`
}