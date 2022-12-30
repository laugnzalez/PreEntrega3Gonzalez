//Cree un array vacío para luego, mediante inputs, realizar la entrada de datos y pushar los elementos necesarios al array.

let amigos = []


//Almacene en variables los distintos elementos del DOM

let contenedorFormulario = document.querySelector(".contenedorFormulario")
let formulario = document.querySelector("#formulario")
let cantidadPersonas = document.querySelector("#cantidadPersonas")
let concepto = document.querySelector("#concepto")
let montoTotal = document.querySelector("#monto")
let botonEnvio = document.querySelector("#submit")


//Funciones callback para pushear al array, subir al SS, convertirlo a JSON y viceversa.
let pushear = (array, elemento) => {
    array.push(elemento.value)
}
let nuevoDatoSesion = (clave, valor) => {
    sessionStorage.setItem(clave, valor)
}
let itemSS = (clave) => {
    let datos = sessionStorage.getItem(clave)
    let datosParseados = JSON.parse(datos)
    return datosParseados
}
let stringify = (valor) => {
    return JSON.stringify(valor)
}

//Evento para interactuar con el formulario.
formulario.onsubmit = (event) => {
    event.preventDefault()
    contenedorFormulario.style.display = "none"
    botonResultados.style.display = "block"
    pushear(amigos, cantidadPersonas)
    pushear(amigos, concepto)
    pushear(amigos, montoTotal)
    nuevoDatoSesion("cantidad", stringify(amigos[0]))
    nuevoDatoSesion("concepto", stringify(amigos[1]))
    nuevoDatoSesion("monto", stringify(amigos[2]))

}

//Variables para almacenar los datos subis al SS.
let cantidadSesion = itemSS("cantidad")
let conceptoSesion = itemSS("concepto")
let montoSesion = itemSS("monto")

//Variables para acceder a elementos DOM
let botonResultados = document.querySelector(".obtenerResultado")
let devolucionResultado = document.querySelector(".resultado")


//Funcion que calcula los gastos con los datos obtenidos del SS.
let montoDividido = () => {
    return montoSesion / cantidadSesion;
}

let resultado = () => {
    let texto = document.querySelector("body > section.section.resultado > div > div")
    texto.innerText = `El grupo de amigos gasto $${montoSesion} en ${conceptoSesion}. Cada integrante del grupo debe pagar $${montoDividido()}.`
}

//Evento que muestra la salida luego de que los inputs fueron procesados.

botonResultados.onclick = () => {
    montoDividido()
    resultado()
    botonResultados.style.display = "none"
    devolucionResultado.style.display = "block"

}