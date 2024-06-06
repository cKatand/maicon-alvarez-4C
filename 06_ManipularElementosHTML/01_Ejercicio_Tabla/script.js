function traerTablas(){
   let num = parseInt(document.getElementById("inputText").value); 
   let result="";
   for(let i = 1;i <=10;i++){
      result +=`${i} x ${num} = ${i*num}<br>`
   }
   document.getElementById("lista").innerHTML = result;
}