const nombres=["Lapiz hb", "Resaltador", "borrador de nata"];

// agregar elementos al arreglos
nombres[3]="micropunta"

console.log(nombres[1])

// agregar u elemento al final 
nombres.push("corrector");


// agrega elementos al principio
nombres.unshift("borrador miga de pan")

// eliminar elementos de un arreglo 
delete nombres[3];

// eliminar elemento del final
nombres.pop();

// eliminar elementos del principio
nombres.shift();
console.table(nombres);

for(let i=0; i<nombres.length; i++){
    console.log(nombres[i])

}

// operador spread con arreglos:
const nombres2 = ["trasportador", "regla 30 cm"]

let productos = [...nombres, ...nombres2]
const elemento = "compas"
productos = [...productos, elemento]

const calculadora = "calculadora"
productos = [... productos, calculadora]

console.table(productos)




