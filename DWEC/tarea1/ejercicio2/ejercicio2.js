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

function pintarEscalera1(escalones, ancho, altura) {
  const asterisco = "*";
  const espacio = "&nbps;&nbps;";
  let linea = "";
  let vacio = "&nbsp;&nbsp;";

  //creo linea horizontal de asteriscos
  for (let j = 0; j < ancho; j++) {
    linea = linea + asterisco;
  }
  //creo espacio blanco
  for (let i = 0; i < ancho - 1; i++) {
    vacio = vacio + espacio;
  }
  //bucle escalones
  for (let k = 0; k < escalones; k++) {
    document.write("<p>" + linea + "</p>");
      //linea vertical
      for (let l = 0; l < altura; l++) {
        document.write("<p>" + vacio + asterisco + "</p>");
      }
  }
}

let escalones;
let ancho;
let altura;
cancelar = false;

numeroEscalones();
if (cancelar == false) {
  anchoEscalon();
  if (cancelar == false) {
    comprobarAnchuraMaxima();
    if (cancelar == false) {
      alturaEscalera();
      if (cancelar == false) {
        pintarEscalera1(escalones, ancho, altura);
        pintarEscalera2();
      }
    }
  }
}
