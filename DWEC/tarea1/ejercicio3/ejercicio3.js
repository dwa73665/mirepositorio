/**
 * @author  Adrian Pomar Maseda
 * @version 1.0
 * @description Juego de Cartas
 */

 function validarNombre(dato) {
  while (dato == "") {
    dato = window.prompt(
      "No has introducido nada.\nIntroduce un nombre o cancela para salir"
    );
  }
  if (dato == null) {
    cancelar_juego = true;
  }
  return dato;
}

function validarValorCarta(dato) {
  let valoresValidos = ["as", "2", "3", "4", "5", "6", "7", "s", "c", "r"];
  if (dato == null) {
    cancelar_juego = true;
  } else {
    while (dato == "" || valoresValidos.indexOf(dato) == -1) {
      dato = window.prompt(
        "No has introducido un valor de carta válido.\nLas cartas disponibles actualmente son:" +
          "\n" +
          "\n oros:        " +
          oros +
          "\n copas:      " +
          copas +
          "\n espadas:  " +
          espadas +
          "\n bastos:     " +
          bastos +
          "\n" +
          "\nElija una carta entre:  as  ,  2  ,  3  ,  4  ,  5  ,  6  ,  7  ,  s  ,  c  ,  r"
      );
    }
    return dato;
  }
}

function validarPalo(dato) {
  let valoresValidos = ["oros", "copas", "espadas", "bastos"];
  if (dato == null) {
    cancelar_juego = true;
  } else {
    while (dato == "" || valoresValidos.indexOf(dato) == -1) {
      dato = window.prompt(
        "No has intruducido un palo válido.\nElije: \noros \ncopas \nespadas \nbastos"
      );
    }
    return dato;
  }
}

function pideNombre(numero_de_jugador) {
  let nombre = window.prompt(
    "Introduce nombre del JUGADOR " +
      numero_de_jugador +
      " o cancela para salir"
  );
  nombre = validarNombre(nombre);
  return nombre;
}

function compararNombres() {
  while (jugador1 == jugador2) {
    window.alert("Los nombres coindicen.\nVuelva a introducirlos.");
    jugador2 = pideNombre(2);
    compararNombres();
  }
}

function mensajeCancelar() {
  document.getElementById("cancelado").innerHTML = "Juego cancelado";
}

function eligeCarta(i) {
  let carta_elegida_jugador_n = [];
  let index = i + 1;
  let valorCarta = window.prompt(
    "Es el turno numero " +
      contador_turnos +
      " jugador " +
      index +
      " :\nLas cartas disponibles actualmente son:" +
      "\n" +
      "\n oros:        " +
      oros +
      "\n copas:      " +
      copas +
      "\n espadas:  " +
      espadas +
      "\n bastos:     " +
      bastos +
      "\n" +
      "\nElija una carta entre:  as  ,  2  ,  3  ,  4  ,  5  ,  6  ,  7  ,  s  ,  c  ,  r"
  );

  valorCarta = validarValorCarta(valorCarta);
  if (cancelar_juego == false) {
    let palo = window.prompt(
      "\nElija el palo de su carta entre: \noros \ncopas \nespadas \nbastos"
    );
    palo = validarPalo(palo);
    if (cancelar_juego == false) {
      carta_elegida_jugador_n[0] = valorCarta;
      carta_elegida_jugador_n[1] = palo;
      return carta_elegida_jugador_n;
    }
  }
}

function jugadaEnCurso(cartaJugador1, cartaJugador2) {
  if (cartaJugador1[0] == cartaJugador2[0]) {
    puntuacion_jugadores += 1;
    window.alert(
      "Se ha producido pareja.\n El turno actual es: " +
        contador_turnos +
        " \n La puntuacion actual es: " +
        puntuacion_jugadores
    );
  } else {
    window.alert(
      "No se ha producido pareja.\n\n El turno actual es: " +
        contador_turnos +
        "\n\n La puntuacion actual es el: " +
        puntuacion_jugadores
    );
  }
}

function borrarCartas() {
  let valor_a_borrar = 0;
  //borrar carta jugador 1
  switch (cartas_elegidas_todos_jugadores[0][1]) {
    case "oros":
      valor_a_borrar = oros.indexOf(cartas_elegidas_todos_jugadores[0][0]);
      oros[valor_a_borrar] = "_";
      break;
    case "copas":
      valor_a_borrar = copas.indexOf(cartas_elegidas_todos_jugadores[0][0]);
      copas[valor_a_borrar] = "_";
      break;
    case "espadas":
      valor_a_borrar = espadas.indexOf(cartas_elegidas_todos_jugadores[0][0]);
      espadas[valor_a_borrar] = "_";
      break;
    case "bastos":
      valor_a_borrar = bastos.indexOf(cartas_elegidas_todos_jugadores[0][0]);
      bastos[valor_a_borrar] = "_";
      break;
    default:
      window.alert("Error: No se han borrado cartas");
      break;
  }
  //borrar carta jugador 2
  if (
    cartas_elegidas_todos_jugadores[0] != cartas_elegidas_todos_jugadores[1]
  ) {
    switch (cartas_elegidas_todos_jugadores[1][1]) {
      case "oros":
        valor_a_borrar = oros.indexOf(cartas_elegidas_todos_jugadores[1][0]);
        oros[valor_a_borrar] = "_";
        break;
      case "copas":
        valor_a_borrar = copas.indexOf(cartas_elegidas_todos_jugadores[1][0]);
        copas[valor_a_borrar] = "_";
        break;
      case "espadas":
        valor_a_borrar = espadas.indexOf(cartas_elegidas_todos_jugadores[1][0]);
        espadas[valor_a_borrar] = "_";
        break;
      case "bastos":
        valor_a_borrar = bastos.indexOf(cartas_elegidas_todos_jugadores[1][0]);
        bastos[valor_a_borrar] = "_";
        break;
      default:
        window.alert("Error: No se han borrado cartas");
        break;
    }
  }
}

function evaluarResultado() {
  puntos_sobre10 = puntuacion_jugadores * 2;
  if (puntos_sobre10 <= 3) {
    mensajeFinal =
      "El resultado final es " +
      puntos_sobre10 +
      " sobre 10, necesitáis mejorar";
    window.alert(mensajeFinal);
  }
  if (puntos_sobre10 >= 4 && puntos_sobre10 <= 6) {
    mensajeFinal =
      "El resultado final es " +
      puntos_sobre10 +
      " sobre 10, vais por buen camino";
    window.alert(mensajeFinal);
  }
  if (puntos_sobre10 >= 7 && puntos_sobre10 <= 9) {
    mensajeFinal =
      "El resultado final es " +
      puntos_sobre10 +
      " sobre 10, estáis en la misma sintonía";
    window.alert(mensajeFinal);
  }
  if (puntos_sobre10 == 10) {
    mensajeFinal =
      "El resultado final es " + puntos_sobre10 + " sobre 10, lo bordáis.";
    window.alert(mensajeFinal);
  }
}

function pasarInfoHTML() {
  document.getElementById("jugador1").innerHTML = jugador1;
  document.getElementById("jugador2").innerHTML = jugador2;
  document.getElementById("numeroparejas").innerHTML = puntuacion_jugadores;
  document.getElementById("puntuacion").innerHTML = puntos_sobre10;
  document.getElementById("mensaje").innerHTML = mensajeFinal;
}

let oros = ["as", "2", "3", "4", "5", "6", "7", "s", "c", "r"];
let copas = ["as", "2", "3", "4", "5", "6", "7", "s", "c", "r"];
let espadas = ["as", "2", "3", "4", "5", "6", "7", "s", "c", "r"];
let bastos = ["as", "2", "3", "4", "5", "6", "7", "s", "c", "r"];
let numero_jugadores = 2;
let jugador1, jugador2;
let cancelar_juego = false;
let numero_turnos = 4;
let contador_turnos = 1;
let puntuacion_jugadores = 0;
let puntos_sobre10 = 0;
let cartas_elegidas_todos_jugadores = [];
let mensajeFinal = "";

jugador1 = pideNombre(1);
if (cancelar_juego == false) {
  jugador2 = pideNombre(2);
  if (cancelar_juego == false) {
    compararNombres();
    if (cancelar_juego == false) {
      // bucle turnos
      for (let j = 0; j < numero_turnos; j++) {
        if (cancelar_juego == false) {
          // bucle pregunta carta tantas veces como jugadores
          for (let i = 0; i < numero_jugadores; i++) {
            if (cancelar_juego == false) {
              cartas_elegidas_todos_jugadores[i] = eligeCarta(i);
            }
          }
          if (cancelar_juego == false) {
            borrarCartas();
          } else {
            mensajeCancelar();
          }
          jugadaEnCurso(
            cartas_elegidas_todos_jugadores[0],
            cartas_elegidas_todos_jugadores[1]
          );
        }
        contador_turnos++;
      }
      if (cancelar_juego == false) {
        evaluarResultado();
        pasarInfoHTML();
      }
    } else {
      mensajeCancelar();
    }
  } else {
    mensajeCancelar();
  }
} else {
  mensajeCancelar();
}
