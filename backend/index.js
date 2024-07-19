console.log("carrito de compras")
// template String:
// alternativa a la concatenacion 
// permite incrustar un valor dentro de un string 
const nombreProducto = new String("lenovo v4");
console.log(`El producto es: ${nombreProducto}`);

const precioProducto = 23;
const precioProductoStr = "23";
console.log(precioProducto);
console.log(precioProductoStr);

// console.log(precioProducto == precioProductoStr);
console.log(precioProducto === precioProductoStr);

// objeto producto:
// objeto literal:
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

producto1.imagen = "imagen1.jpg"
console.log(producto1)

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

// operador spread 
const medidas ={
    "peso": "50kg",
    "altura":"1m",
    "largo":"50cm"
}

const nuevoProducto = {... producto1, ...medidas};
console.log(nuevoProducto);