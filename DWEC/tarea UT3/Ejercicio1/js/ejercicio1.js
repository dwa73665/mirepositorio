/**
 * @author Adrian Pomar Maseda
 * @version version 1.0
 * @description El programa solicitará determinada información por pantalla. Esta informacion será añadida a la pagina web como indica el enunciado. Se tratarán como objetos Number y String.
 */

/**
 *Solicita por pantalla al usuario que introduzca un numero.
 @param {Number} i - indica el numero que se esta introduciendo.
 @returns {Number} retorna el string introducido por el usuario como Number.
 */
function pedirNumero(i) {
  let numero = window.prompt(
    "Introduce el " +
      i +
      "º número: (si tiene decimales utiliza el punto NO LA COMA) "
  );
  return Number(numero);
}

/**
 * Solicita por pantalla al usuario que introduzca una cadena de texto.
 * @param {Nunmber} i indice que indica la cadena que se está introduciendo.
 * @returns {String} devuelve la cadena introducida por el usuario.
 */
function pedirCadena(i) {
  let cadena = window.prompt("Introduce la " + i + "ª cadena de texto: ");
  return cadena;
}

/**
 * Solicita por pantalla al usuario la posicion del string de la cual desea conocer el caracter que contiene. Se manejan las posciones de forma natural para el usuario, es decir empezando por la primera como la posicion 1.
 * @returns {number} posicion_desde1 - devuelve la posicion introducida como String convertida en Number.
 */
function pedirPosicion() {
  posicion_desde1 = window.prompt(
    "Introduce la posición (empezando por 1) de la que desees saber su contenido: \nLa cadena introducida fue: " +
      cadena1
  );
  posicion_desde1 = Number(posicion_desde1);
  return posicion_desde1;
}

/**
 * Solicita por pantalla al usuario un caracter del que quiera conocer su posicion en la cadena de texto.
 * @returns {string} devuelve el caracter elegido por el usuario.
 */
function pedirCaracter() {
  let caracter = window.prompt(
    "Introduce el caracter del que quieras obtener su posicion: \nLa cadena introducida fue: " +
      cadena3
  );
  return caracter;
}

/**
 * Añade toda la informacion almacenada en el documento HTML
 */
function pasarInfoHTML() {
  //informacion de objeto Number
  document.getElementById("n1").innerHTML = numero1;
  document.getElementById("decimales").innerHTML = numDecimales;
  document.getElementById("n2").innerHTML = numero2;
  document.getElementById("expo").innerHTML = numExpo;
  document.getElementById("n3").innerHTML = numero3;
  document.getElementById("precision").innerHTML = numPrecision;
  //informacion de objeto String
  document.getElementById("c1").innerHTML = cadena1;
  document.getElementById("pos_1").innerHTML = posicion_desde1;
  document.getElementById("pos_2").innerHTML = posicion_desde1;
  document.getElementById("letra").innerHTML = letra;
  document.getElementById("c2").innerHTML = cadena2;
  document.getElementById("concatenadas").innerHTML = cadenasConcatenadas;
  document.getElementById("c3").innerHTML = cadena3;
  document.getElementById("caracter").innerHTML = caracterBuscado;
  document.getElementById("posicionBusqueda").innerHTML =
    posicion_caracterBuscado;
}

let numero1 = 0,
  numero2 = 0,
  numero3 = 0;
let numDecimales = 0,
  numExpo = 0,
  numPrecision = 0;
let cadena1 = "",
  cadena2 = "",
  cadena3 = "";
let posicion_desde0 = 0,
  posicion_desde1 = 0;
let letra = "";
let cadenasConcatenadas;
let caracterBuscado = "";
let posicion_caracterBuscado = 0;

//parte1 Number
numero1 = pedirNumero(1);
numero2 = pedirNumero(2);
numero3 = pedirNumero(3);
numDecimales = numero1.toFixed(2);
numExpo = numero2.toExponential(2);
numPrecision = numero3.toPrecision(2);
cadena1 = pedirCadena(1);
//parte2 String
posicion_desde0 = pedirPosicion() - 1;
letra = cadena1.charAt(posicion_desde0);
cadena2 = pedirCadena(2);
cadenasConcatenadas = cadena1.concat(cadena2);
cadena3 = pedirCadena(3);
caracterBuscado = pedirCaracter();
posicion_caracterBuscado = cadena3.indexOf(caracterBuscado);
posicion_caracterBuscado += 1;

pasarInfoHTML();
