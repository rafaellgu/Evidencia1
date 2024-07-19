const carrito = [
    {
        nombre: "Lenovo ThinkPad",
        descripcion: "Laptop para oficina",
        tipoProducto: "Computador Portátil",
        modelo: "VG6",
        precio: {
            monimoVenta:10000,
            compra:1000000
        },
        características: {
            dimensiones:{
                alto: 200,
                ancho:"50cm",
                largo:"30cm"
            },
            fabricación:{
                pais:"Taiwan",
                fecha: new Date('2017-05-02')
            },
        },
        obtenerPrecioCompra: function(){
            return this.precio.compra
    }
    
    },

    {
        nombre: "Hp",
        descripcion: "Laptop para oficina",
        tipoProducto: "Computador Portátil",
        modelo: "PRO",
        precio: {
            monimoVenta:10000,
            compra:2000000
        },
        características: {
            dimensiones:{
                alto: 300,
                ancho:"5cm",
                largo:"25cm"
            },
            fabricación:{
                pais:"Mexico",
                fecha: new Date('2010-12-03')
            },
        }
    },

    {
        nombre: "Azus",
        descripcion: "Laptop para oficina",
        tipoProducto: "Computador Portátil",
        modelo: "SEMI",
        precio: {
            monimoVenta:2000000,
            compra:500000
        },
        características: {
            dimensiones:{
                alto:300,
                ancho:"4cm",
                largo:"30cm"
            },
            fabricación:{
                pais:"china",
                fecha: new Date('2010-06-12')
            },
        },
    },

    {
        nombre: "samsung",
        descripcion: "Laptop para oficina",
        tipoProducto: "Computador Portátil",
        modelo: "V12",
        precio: {
            monimoVenta:10000000,
            compra:5000000
        },
        características: {
            dimensiones:{
                alto:100,
                ancho:"50cm",
                largo:"30cm"
            },
            fabricación:{
                pais:"EE.UU",
                fecha: new Date('2017-05-02')
            },
        },
    },

    {
        nombre: "Lenovo",
        descripcion: "Laptop para oficina",
        tipoProducto: "Computador Portátil",
        modelo: "VG6",
        precio: {
            monimoVenta:2500000,
            compra:500000
        },
        características: {
            dimensiones:{
                alto:200,
                ancho:"50cm",
                largo:"30cm"
            },
            fabricación:{
                pais:"Taiwan",
                fecha: new Date('2017-05-02')
            },
        },
    }
]

// ejecutar precio de compra
console.log(carrito[0].obtenerPrecioCompra())

// imprimir el nombre:
// console.log(carrito[0].características.dimensiones.alto)

// recorrer el carito de compras
// metodo fonEach
// no retorna un nuevo arreglo
carrito.forEach(producto =>{
     if(producto.características.fabricación.pais === "Taiwan")
        console.log(producto.nombre)
    })

// metodo de trasformacion map
let precioCompra = carrito.map((producto)=> {
    return producto.precio.compra
})
console.log(precioCompra)
// filer : recorre el arreglo buscando que concuerden con la condicional 
// extablecida en el filtro, creando un nuevo arreglo con los objetos que cumple dicho criterio
let ProductosTaiwan =carrito.filter((producto)=>{
    return producto.características.fabricación.pais === 'Taiwan'
})
console.log(ProductosTaiwan)


// p.4
let cart = []
cart = [...carrito]
console.log(cart)

let total= 0 
carrito.forEach(producto =>{
    // acumular el valor de compra de cada producto en la variable total
    total += producto.precio.compra       
})
console.log(`el valor del inventario es: ${total}`)

// utilizar el method reduce: reduce a un solo valor el arreglo, con vase en una exprecion
let inventario = carrito.reduce((total, producto)=>{
    return total + producto.precio.compra
},0)
console.log(`el valor del inventario es: ${inventario}`)


for(const producto of carrito){
    console.log( producto.nombre,
                producto.tipoProducto,
                producto.modelo,
                producto.características.dimensiones.largo,
                producto.características.fabricación.pais

    )

    
}


carrito.forEach(producto =>{
    if(producto.características.fabricación.pais === "china")
       console.log("echos en china " + producto.nombre)
   })
carrito.forEach(producto =>{
    if(producto.características.dimensiones.alto >= 200)
       console.log("mas de 2m " + producto.nombre)
})

carrito.forEach(producto => {
    if(producto.precio.monimoVenta <= "10000")
        console.log("menos de 1000 "+ producto.nombre)
})


