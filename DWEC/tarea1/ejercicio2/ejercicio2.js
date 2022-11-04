/**
 * @author Adrian Pomar Maseda
 * @version 1.0
 * @description
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

function comprobarAnchuraMaxima() {
  if (escalones * ancho > 80) {
    document.write("<h3>NO ES POSIBLE DIBUJAR LA ESCALERA</h3>");
    cancelar = true;
  }
}

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

function lineaHorizontal(tabulado) {
  let linea = "";
  for (let i = 0; i < ancho; i++) {
    linea = linea + asterisco;
  }
  document.write("<p>" + tabulado + linea + "</p>");
}

function lineaVertical(tabulado) {
  let anchovacio = "";
  for (let l = 1; l < ancho; l++) {
    anchovacio = anchovacio + espacio;
  }
  for (let j = 1; j < altura; j++) {
    document.write("<p>" + tabulado + anchovacio + asterisco + "</p>");
  }
}

function escalado(i) {
  let sangrado = ancho * i;
  for (let z = 1; z < sangrado; z++) {
    tabulado = tabulado + espacio;
  }
}

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
