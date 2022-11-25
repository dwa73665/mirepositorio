/**
 * @author Adrian Pomar Maseda dwa73655@educastur.es
 * @version 1.0
 * @description Pagina web que solicita al usuario un nombre y email valido. Se muestra a continuacion un prompt para aceptar o cancelar el uso de cookies. En caso de aceptar se crea una cookie que cuenta las sucesivas visitas del usuario.
 */

/**
 * Pide por pantalla al usuario que introduza informacion.
 * @param {string} campo Tipo de campo que se solicita.
 */
function peticionInfo(campo) {
  switch (campo) {
    case "nombre":
      nombre = window.prompt(
        "Introduzca su nombre: \n(Entre 3-40 caracteres. Nombre compuesto, 1ª letra de cada uno mayúscula)"
      );
      break;
    case "email":
      email = window.prompt(
        "Introduzca su email: \n(formato: nombreusuario@dominio.es/com/org)"
      );
      break;
    default:
      window.alert("Error");
      break;
  }
}

/**
 * Compara el valor introducido por el usuario con la expresion regular que debe cumplir.
 * @param {String} campo Tipo de campo que se va a validar
 * @param {String} dato String que contiene la informacion      introducida por el usuario.
 */
function validaCampo(campo, dato) {
  validez = "";
  switch (campo) {
    case "nombre":
      resultado = regxp_nombre.test(dato);
      if (resultado == true) {
        window.alert(`El dato ${dato} es valido`);
        validez = " Correcto";
      } else {
        window.alert("NO VALIDO");
      }
      break;
    case "email":
      resultado = regxp_email.test(dato);
      if (resultado == true) {
        window.alert(`El dato ${dato} es valido`);
      } else {
        window.alert("NO VALIDO");
      }
      break;
    default:
      window.alert("No se ha podido validar");
      break;
  }
  return;
}

/**
 * Pregunta al usuario por pantalla si acepta el uso de cookies.
 * Si acepta devuelve el valor true y false si cancela.
 * @returns {boolean} acepta
 */
function aceptarCookies() {
  let acepta;
  acepta = window.confirm(
    "Esta pagina utiliza cookies propias y de terceros. Si consiente su uso pulse ACEPTAR si no, pulse Cancelar"
  );
  return acepta;
}

/**
 * Crea una cookie con nombre, valor y fecha de expiracion indicados en los parametros
 * @param {String} nombreCookie
 * @param {String} valorCookie
 * @param {Number} expirarDias
 */
function crearCookie(nombreCookie, valorCookie, expirarDias) {
  const d = new Date();
  d.setTime(d.getTime() + expirarDias * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie =
    nombreCookie + "=" + valorCookie + ";" + expires + ";path=/";
}

/**
 * Almacena en una variable el valor de la cookie con el nombre indicado en el parametro.
 * @param {String} nombreCookie
 * @returns {String} valorCookie
 */
function getCookie(nombreCookie) {
  let dato = nombreCookie + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(dato) == 0) {
      return c.substring(dato.length, c.length);
    }
  }
  return "";
}

/**
 * Comprueba si existe una cookie "usuario" con un valor de nombre.
 * Si la cookie no contiene un valor de nombre, pide al usuario que introduzca uno.
 */
function comprobarCookieUsuario() {
  let dato = getCookie("usuario");
  if (dato != "") {
    alert("Bienvenido de nuevo " + dato);
  } else {
    dato = prompt("Por favor introduce tu nombre", "");
    if (dato != "" && dato != null) {
      crearCookie("usuario", dato, 365);
    }
  }
}

/**
 * Comprueba si existe una cookie "visitas" con un valor de numero de visitas.
 */
function comprobarCookieVisitas() {
  let dato = getCookie("visitas");
  if (dato != "") {
    dato++;
    crearCookie("visitas", dato, 365);
    alert("Numero de visitas: " + dato);
  } else {
    dato = 1;
    crearCookie("visitas", dato, 365);
    alert("Bienvenido por primera vez");
  }
}

let nombre = "";
let regxp_nombre = /([A-Z]{1}[a-z]{2,39})+(\n[A-Z]{1}[a-z]{2,39}\n?)?/;
let email = "";
let regxp_email = /(\w{1,})@(\w{1,}).(es|com|org)/;
let aceptar = false;
let usuario = "";
let visitas = new Number();

peticionInfo("nombre");
validaCampo("nombre", nombre);
peticionInfo("email");
validaCampo("email", email);
aceptar = aceptarCookies();
if (aceptar == true) {
  comprobarCookieUsuario();
  comprobarCookieVisitas();
  document.getElementById("usuario").innerHTML = `<h3>Hola ${getCookie(
    "usuario"
  )}, has visitado esta pagina ${getCookie("visitas")} veces.</h3>`;
} else {
  document.write("<p>Has cancelado las cookies</p>");
}
