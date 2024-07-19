// alert("hola 2826502")
// const nombre = prompt("por favor ingrese su nombre")
// document.querySelector("div").innerHTML= nombre
const nombreProducto = new String("lenovo v4");
console.log(nombreProducto);

const precioProducto = 23;
const precioProductoStr="23";
console.log(precioProducto);
console.log( precioProductoStr);

// console.log(precioProducto == precioProductoStr);
console.log(precioProducto === precioProductoStr);

const producto1 = {
    nombre: "lenovo ThinkPad",
    color: 'red',
    modelo: 'IU643',
    descripcion: 'laptop para trabajar liviano',
    precio: 2300000.0,
    getMOdelo: function () {
        console.log(this.modelo);
    }
}
// acceder a los atributos del objeto 
// console.log(producto1["descripcion"])

// invocar metodo getModelo

producto1.getMOdelo();

//sin desestructuracion
nombresito = producto1.nombre;
console.log(nombresito);

// con desestructuracion
const {descripcion , precio}= producto1;
console.log(descripcion, precio)

// object constructor 
const Producto = function(nombre,color,precio){
    this.nombre = nombre,
    this.color = color,
    this.precio = precio
}

// dos instancias de producto 
const p1 = new Producto("oppo","azul",5000);
console.log(p1);
