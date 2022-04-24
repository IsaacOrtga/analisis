
let valor1 = prompt("Número");
let operador = prompt('Dime un operador de suma o resta');
let valor2 = prompt("Número");

if (operador == '+'){

    alert((parseInt(valor1, 0)) + ((parseInt(valor2, 0))));
}
    

else if(operador !== '+'){
    alert((parseInt(valor1, 0)) - ((parseInt(valor2, 0))));
}