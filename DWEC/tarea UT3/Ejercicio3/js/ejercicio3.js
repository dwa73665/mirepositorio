/**
 * @author Adrian Pomar Maseda  dwa73665@educastur.es
 * @version 1.0
 * @description Realizar un validador de datos utilizando las expresiones regulares con las especificaciones del enunciado.
 */

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
        validez = " INCORRECTO";
      }
      break;
    case "apellidos":
      resultado = regxp_apellidos.test(dato);
      if (resultado == true) {
        window.alert(`El dato ${dato} es valido`);
        validez = " Correcto";
      } else {
        window.alert("NO VALIDO");
        validez = " INCORRECTO";
      }
      break;
    case "email":
      resultado = regxp_email.test(dato);
      if (resultado == true) {
        window.alert(`El dato ${dato} es valido`);
        validez = " Correcto";
      } else {
        window.alert("NO VALIDO");
        validez = " INCORRECTO";
      }
      break;
    case "movil":
      resultado = regxp_movil.test(dato);
      if (resultado == true) {
        window.alert(`El campo ${dato} es valido`);
        validez = " Correcto";
      } else {
        window.alert("NO VALIDO");
        validez = " INCORRECTO";
      }
      break;
    case "localidad_residencia":
      resultado = regxp_localidad_residencia.test(dato);
      if (resultado == true) {
        window.alert(`El campo ${dato} es valido`);
        validez = " Correcto";
      } else {
        window.alert("NO VALIDO");
        validez = " INCORRECTO";
      }
      break;
    case curso:
      resultado = regxp_curso.test(dato);
      if (resultado == true) {
        window.alert(`El campo ${dato} es valido`);
        validez = " Correcto";
      } else {
        window.alert("NO VALIDO");
        validez = " INCORRECTO";
      }
      break;
    case "localidad_examenes":
      resultado = regxp_localidad_examenes.test(dato);
      if (resultado == true) {
        window.alert(`El campo ${dato} es valido`);
        validez = " Correcto";
      } else {
        window.alert("NO VALIDO");
        validez = " INCORRECTO";
      }
      break;
    case "observaciones":
      resultado = regxp_observaciones.test(dato);
      if (resultado == true) {
        window.alert(`El campo ${dato} es valido`);
        validez = " Correcto";
      } else {
        window.alert("NO VALIDO");
        validez = " INCORRECTO";
      }
      break;
    default:
      window.alert("No se ha podido validar");
      break;
  }
  return;
}

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
    case "apellidos":
      apellidos = window.prompt(
        "Introduzca sus apellidos: \n(Entre 4-80 caracteres, 1ª letra de cada uno mayúscula)"
      );
      break;
    case "email":
      email = window.prompt(
        "Introduzca su email: \n(formato: nombreusuario@dominio.es/com/org)"
      );
      break;
    case "movil":
      movil = window.prompt("Introduzca su movil: \n(formato: 999-999-999)");
      break;
    case "localidad_residencia":
      localidad_residencia = window.prompt(
        "Introduzca su residencia: \n(Nombre de entre 5 y 40 caracteres,todo mayúsculas.)"
      );
      break;
    case "curso":
      curso = window.prompt(
        "Introduzca su curso: \n(número en el intervalo 1 y 4)"
      );
      break;
    case "localidad_examenes":
      localidad_examenes = window.prompt(
        "Introduzca la localidad de examenes: \nDeberá ser una de entre (MADRID, CORUÑA, BILBAO, SEVILLA)"
      );
      break;
    case "observaciones":
      observaciones = window.prompt(
        "Introduzca alguna observacion si lo desea: \n(caracteres y dígitos de máximo 200 caracteres)"
      );
      break;
    default:
      window.alert("Error");
      break;
  }
}

/**
 * Complementa el HTML con la informacion introducida por el usuario y su validez CORRECTO o INCORRECTO
 */
function pasarInfoHTML() {
  document.getElementById("nombre").innerHTML = nombre + validez;
  document.getElementById("apellidos").innerHTML = apellidos + validez;
  document.getElementById("email").innerHTML = email + validez;
  document.getElementById("movil").innerHTML = movil + validez;
  document.getElementById("residencia").innerHTML =
    localidad_residencia + validez;
  document.getElementById("curso").innerHTML = curso + validez;
  document.getElementById("examenes").innerHTML = localidad_examenes + validez;
  document.getElementById("observaciones").innerHTML = observaciones + validez;
}

let apellidos;
let regxp_apellidos = /([A-Z]{1}[a-z]{3,79})+(\n[A-Z]{1}[a-z]{3,79}\n?)?/;
let email;
let regxp_email = /(\w{1,})@(\w{1,}).(es|com|org)/;
let movil;
let regxp_movil = /([0-9]{3})-([0-9]{3})-([0-9]{3})/;
let nombre;
let regxp_nombre = /([A-Z]{1}[a-z]{2,39})+(\n[A-Z]{1}[a-z]{2,39}\n?)?/;
let localidad_residencia;
let regxp_localidad_residencia = /[A-Z]{5,40}/;
let curso;
let regxp_curso = /[1-4]{1}/;
let localidad_examenes;
let regxp_localidad_examenes = /(MADRID|CORUÑA|BILBAO|SEVILLA){1}/;
let observaciones;
let regxp_observaciones = /\w{200}/;
let validez = "";

peticionInfo("nombre");
validaCampo("nombre", nombre);
if (nombre != null) {
  peticionInfo("apellidos");
  validaCampo("apellidos", apellidos);
  if (apellidos != null) {
    peticionInfo("email");
    validaCampo("email", email);
    if (email != null) {
      peticionInfo("movil");
      validaCampo("movil", movil);
      if (movil != null) {
        peticionInfo("localidad_residencia");
        validaCampo("localidad_residencia", localidad_residencia);
        if (localidad_residencia != null) {
          peticionInfo("curso");
          validaCampo("curso", curso);
          if (curso != null) {
            peticionInfo("localidad_examenes");
            validaCampo("localidad_examenes", localidad_examenes);
            if (localidad_examenes != null) {
              peticionInfo("observaciones");
              validaCampo("observaciones", observaciones);
            } else {
              document.getElementById("cancelado").innerHTML = "CANCELADO";
            }
          } else {
            document.getElementById("cancelado").innerHTML = "CANCELADO";
          }
        } else {
          document.getElementById("cancelado").innerHTML = "CANCELADO";
        }
      } else {
        document.getElementById("cancelado").innerHTML = "CANCELADO";
      }
    } else {
      document.getElementById("cancelado").innerHTML = "CANCELADO";
    }
  } else {
    document.getElementById("cancelado").innerHTML = "CANCELADO";
  }
} else {
  document.getElementById("cancelado").innerHTML = "CANCELADO";
}

pasarInfoHTML();
