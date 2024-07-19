// sintáxis función arrow flecha
// reglas:
// 1. si el bloqie de codigo de la funcion flecha solo tiene una linea, no hace falta poner corchete
// 2. si la funcion flecha tiene un solo parametro, se puede omitir el parentesis de los parametros
// 3. si el bloqie de codigo de la funcion flecha solo tiene una linea y esta linea retorna un valor es posible omitir un retur
// pero solo es posible si aplica la regla 1
const saludo = nombre => 
     `hola ${nombre} desde una funcion flacha`
//  invocar a la funcion flecha
console.log(saludo("cristian"));
