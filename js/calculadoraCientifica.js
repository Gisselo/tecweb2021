//Variables que usemos en todas las funciones

function presionaDigito(digito) {
    var display     = document.getElementById("display");
    display.value   = display.value + digito;
}

function limpiaDisplay(){
    var display = document.getElementById("display");
    display.value="";
}

function presionaOperador(operador){
    var display = document.getElementById("display");
    display.value = display.value + operador;
}

function presionaIgual(){
    var display = document.getElementById("display");
    //Funcion Eval
    var resultado = eval(display.value)
    //Mostrar Resultado
    display.value = resultado;
}

function calculaRaiz(){
    var display = document.getElementById("display");
    display.value = Math.sqrt(eval(display.value));
}

function calculaln(){
    var display = document.getElementById("display");
    display.value = Math.log(eval(display.value));
}

function calculaLog(){
    var display = document.getElementById("display");
    display.value = Math.log10(eval(display.value));
}

function calculaPorcentaje(){
    var display = document.getElementById("display");
    display.value = eval(display.value/100);
}

function calculaFactorial(){
    var display = document.getElementById("display");
    if (display.value == 0) {
        display.value=1;
    } else {
        let s = 1;
        while (display.value > 1) {
            s *= display.value--;
        }
        display.value = s;
    }
} 

function exponente (x,y){
    var display = document.getElementById("display");
    display.value = Math.pow(prompt (x^y));
}

