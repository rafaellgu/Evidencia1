// ejemplo
// sintáxis: Declaracion de función

// invocar llamar o ejecutar la funcion saludo
saludo("Rafa") //-> argumento: 
function saludo(nombre){
    console.log(`hola ${nombre} como estas`)
}

// sintaxis: expresion función
// se asigna a una constante
const saludo2 = function(nombre="pepito"){// ->parametro por defecto
    console.log(`hola ${nombre} como estas`);
}
// invocar saludo2:
saludo2()

