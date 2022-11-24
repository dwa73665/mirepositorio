/**
 * @author Adrian Pomar Maseda <dwa73665@educastur.es> https://github.com/dwa73665/mirepositorio/tree/main/DWEC/tarea1
 * @version 1.0
 * @description Programa que dibuja una escalera de asteriscos. Primero pide los datos altura, ancho y número de escalones.
 * La anchura total no puede ser superior a 80.
 */

/**
 * Solicita al usuario por pantalla el numero de escalones que debe tener la escalera
 */
function numeroEscalones() {
  escalones = window.prompt("Introduzca el número de escalones");
  while (isNaN(escalones) || escalones == "") {
    if (escalones == "") {
      window.alert("No has introducido nada");
    } else if (isNaN(escalones) == true) {
      window.alert("No es un número");
    }
    escalones = window.prompt("Introduce el número de escalones");
  }
  if (escalones != null) {
    document.write("<h4>Número de escalones: " + escalones + "</h4>");
  } else {
    cancelar = true;
    document.write("Escalera cancelada");
  }
}

/**
 * Solicita al usuario el ancho del escalón.
 */
function anchoEscalon() {
  ancho = window.prompt("Introduzca el ancho de escalon");
  while (isNaN(ancho) || ancho == "") {
    if (ancho == "") {
      window.alert("No has introducido nada");
    } else if (isNaN(ancho) == true) {
      window.alert("No es un número");
    }
    ancho = window.prompt("Introduce el ancho de escalon");
  }
  if (ancho != null) {
    document.write("<h4>Ancho de escalon: " + ancho + "</h4>");
  } else {
    cancelar = true;
    document.write("Escalera cancelada");
  }
}

/**
 * Comprueba la anchura total que ocupará la escalera. Si es mas de 80 informara con un mensaje.
 */
function comprobarAnchuraMaxima() {
  if (escalones * ancho > 80) {
    document.write("<h3>NO ES POSIBLE DIBUJAR LA ESCALERA</h3>");
    cancelar = true;
  }
}

/**
 * Solicita al usuario la altura que tendra cada escalón.
 */
function alturaEscalera() {
  altura = window.prompt("Introduzca la altura de escalon");
  while (isNaN(altura) || altura == "") {
    if (altura == "") {
      window.alert("No has introducido nada");
    } else if (isNaN(altura) == true) {
      window.alert("No es un número");
    }
    altura = window.prompt("Introduce la altura de escalon");
  }
  if (altura != null) {
    document.write("<h4>Altura de escalon: " + altura + "</h4>");
  } else {
    cancelar = true;
    document.write("\nEscalera cancelada");
  }
}

/**
 * Concatena un numero de asteriscos que se corresponde con el ancho del escalon.
 * Inserta en el documento html esa cadena de astericos junto con el espacio en
 * blanco que corresponda segun el escalon.
 * @param {} tabulado espacios en blanco correspondientes segun el escalónn.
 */
function lineaHorizontal(tabulado) {
  let linea = "";
  for (let i = 0; i < ancho; i++) {
    linea = linea + asterisco;
  }
  document.write("<p>" + tabulado + linea + "</p>");
}

/**
 * Inserta las lineas con correspondientes a la altura del escalón, constan de espacios concatenados y un asterisco final.
 * @param {} tabulado
 */
function lineaVertical(tabulado) {
  let anchovacio = "";
  for (let l = 1; l < ancho; l++) {
    anchovacio = anchovacio + espacio;
  }
  for (let j = 1; j < altura; j++) {
    document.write("<p>" + tabulado + anchovacio + asterisco + "</p>");
  }
}

/**
 * Aumenta el sangrado o espacios en blanco a instertar para cada escalón.
 * @param {} i numero de escalon
 */
function escalado(i) {
  let sangrado = ancho * i;
  for (let z = 1; z < sangrado; z++) {
    tabulado = tabulado + espacio;
  }
}

/**
 * Funcion que construye la escalera. Llama a las funciones que insertan las
 * partes de la escalera en un bucle, tantas veces como escalones haya indicado
 * el usuario.
 * @param {num} escalones numero de escalones de la escalera
 */
function pintarEscalera1(escalones) {
  for (let k = 0; k < escalones; k++) {
    escalado(k);
    lineaHorizontal(tabulado);
    lineaVertical(tabulado);
    tabulado = "";
  }
}

const asterisco = "*";
const espacio = "&nbsp;&nbsp;";
let escalones;
let ancho;
let altura;
let tabulado = "";
let cancelar = false;

numeroEscalones();
if (cancelar == false) {
  anchoEscalon();
  if (cancelar == false) {
    comprobarAnchuraMaxima();
    if (cancelar == false) {
      alturaEscalera();
      if (cancelar == false) {
        pintarEscalera1(escalones, ancho, altura);
      }
    }
  }
}
