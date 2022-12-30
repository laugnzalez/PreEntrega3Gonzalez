
let botonOscuro = document.querySelector("#botonOscuro")
let botonClaro = document.querySelector("#botonClaro")
let body = document.querySelector("body")
let subtitulo = document.querySelector("body > section:nth-child(3) > div > h2:nth-child(1)")
let subtitulo2 = document.querySelector("body > section:nth-child(3) > div > h2:nth-child(3)")

let nuevoDatoLocal = (clave, valor) => {
    localStorage.setItem(clave, valor)
}

let obtenerDatoLocal = (clave) => {
    let datos = localStorage.getItem(clave)
    let datosParseados = JSON.parse(datos)
    return datosParseados
}

let borrarDatoLocal = (clave) => {
    localStorage.clear(clave)
}

let goDark = () => {
    body.classList.add("has-background-grey-darker", "has-text-white-ter");
    subtitulo.classList.add("has-text-white-ter");
    subtitulo2.classList.add("has-text-white-ter");
}

let goLight = () => {
    body.classList.remove("has-background-grey-darker" , "has-text-white-ter");
    subtitulo.classList.remove("has-text-white-ter");
    subtitulo2.classList.remove("has-text-white-ter");
}

botonOscuro.onclick = () => {
    nuevoDatoLocal("temaOscuro", "true")
    goDark()
}

let validarTemaOscuro = obtenerDatoLocal("temaOscuro")


if (validarTemaOscuro === true) {
    goDark()
}

botonClaro.onclick = () => {
    borrarDatoLocal("temaOscuro")
    goLight()
}