/**
 * @author Adrian Pomar Maseda
 * @version 1.0
 * @description
 */

function validaCampo(campo, dato) {
  switch (campo) {
    case nombre:
      break;
    case apellidos:
      break;
    case email:
      break;
    case movil:
      resultado = regxp_movil.test(dato);
      if (resultado == true) {
        window.alert("el movil es valido");
      }
      break;
    case localidad_residencia:
      break;
    case curso:
      break;
    case localidad_examenes:
      break;
    case observaciones:
      break;
    default:
      window.alert("No se ha podido validar");
      break;
  }
  return;
}

function peticionInfo(campo) {
  switch (campo) {
    case nombre:
      nombre = window.prompt("Introduzca su nombre:");
      break;
    case apellidos:
      apellidos = window.prompt("Introduzca sus apellidos:");
      break;
    case email:
      email = window.prompt("Introduzca su email:");
      break;
    case movil:
      movil = window.prompt("Introduzca su movil");
      break;
    case localidad_residencia:
      localidad_residencia = window.prompt("Introduzca su residencia:");
      break;
    case curso:
      curso = window.prompt("Introduzca su curso:");
      break;
    case localidad_examenes:
      localidad_examenes = window.prompt(
        "Introduzca la localidad de examenes:"
      );
      break;
    case observaciones:
      observaciones = window.prompt(
        "Introduzca alguna observacion si lo desea:"
      );
      break;
    default:
      window.alert("Error");
      break;
  }
}

let apellidos;
let email;
let movil;
let regxp_movil = /^(6|9)\d{8}/;
let nombre;
let localidad_residencia;
let curso;
let localidad_examenes;
let observaciones;

peticionInfo(nombre);
peticionInfo(apellidos);
peticionInfo(email);
peticionInfo(movil);
validaCampo(movil, movil);
peticionInfo(localidad_residencia);
peticionInfo(curso);
peticionInfo(localidad_examenes);
peticionInfo(observaciones);
