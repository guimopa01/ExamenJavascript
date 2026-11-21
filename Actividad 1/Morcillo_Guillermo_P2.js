var numeros = [7, 8, 2, 9 , 10];
var total = 0;
for (num of numeros){
    if(num > 8){
        total += num;
    }
}

alert("Suma de los numeros mayores a 8: " + total);