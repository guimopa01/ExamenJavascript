var num = parseInt(prompt("Introduce un numero: "))

if(!isNaN(num)){
    if (num % 2 == 0){
        alert("Numero par");
    }else{
        alert("Numero Impar");
    }
} else {
    alert("No es un numero");
}