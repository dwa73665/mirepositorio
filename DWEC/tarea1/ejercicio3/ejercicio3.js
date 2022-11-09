/**
 * @author  Adrian Pomar Maseda
 * @version 1.0
 * @description Ejercicio 3:Juego de Cartas, de la segunda Tarea evaluable de DWEC.
 *
 * El juego de cartas se desarrolla con la baraja española y participan dos jugadores.
 *
 * En cada turno eligen una carta de las que haya disponibles, sin saber lo que elige el compañero.
 *
 * Hasta finalizar el turno no se retirarán las cartas elegidas de las disponibles, ya que en el mismo turno,
 * sobre todo el primero, si se elimina una carta se le facilita informacion al segundo jugador.
 *
 * Cuando hagan pareja se añadirá un punto a la puntuación global.
 * Son cinco turnos.
 *
 * Al final de la partida la puntuacion sobre 5 se transformará a puntuacion sobre 10 y se mostraran
 * mensajes segun la puntucion obtenida
 */

/**
 * Controla que el usuario introduzca un nombre válido (no vacio) y hace funcional el boton
 * cancelar del prompt.
 * @param {String} dato - String introducido por el usuario guardado en la variable jugador1.
 * @returns {String} dato - String validado segun los criterios para almecenarlo en jugador1.
 * */
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

/**
 * Comprueba validez en primer lugar de el valor de la carta, introducido en el prompt por el usuario, esté entre los 10 tipos posibles y comprueba además
 * que la carta este disponible en el mazo en el turno actual. El botón cancelar del prompt es funcional.
 * @param {String} dato - Para evaluar el valor de la carta como valido y saber si esta disponible.
 * @param {String} tipo - Para identificar el palo donde evaluar la disponibilidad de la carta.
 * @returns {String} dato - devuelve un valor de carta válido.
 * */
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
    switch (tipo) {
      case "oros":
        while (oros.indexOf(dato) == -1) {
          dato = window.prompt(
            "Has elegio una carta NO DISPONIBLE. Las cartas disponibles son:" +
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
        break;
      case "copas":
        while (copas.indexOf(dato) == -1) {
          dato = window.prompt(
            "Has elegio una carta NO DISPONIBLE. Las cartas disponibles son:" +
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
        break;
      case "espadas":
        while (espadas.indexOf(dato) == -1) {
          dato = window.prompt(
            "Has elegio una carta NO DISPONIBLE. Las cartas disponibles son:" +
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
        break;
      case "bastos":
        while (bastos.indexOf(dato) == -1) {
          dato = window.prompt(
            "Has elegio una carta NO DISPONIBLE. Las cartas disponibles son:" +
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
        break;
    }
    return dato;
  }
}

/**
 * Comprueba validez del palo introducido por el usuario entre los 4 posibles. Hace funcional la opción cancelar del prompt.
 * @param {String} dato - Valor de palo introducido.
 * @returns {String} dato - de palo válido.
 */
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

/**
 * Solicita por pantalla un nombre de jugador del que se comprobará su validez y se puede cancelar juego.
 * @param {String} numero_de_jugador - número jugador al que se refiere.
 * @returns {String} nombre válido para el juegador que se almacenará en una variable.
 */
function pideNombre(numero_de_jugador) {
  let nombre = window.prompt(
    "Introduce nombre del JUGADOR " +
      numero_de_jugador +
      " o cancela para salir"
  );
  nombre = validarNombre(nombre);
  return nombre;
}

/**
 * Compara que el jugador 2 no se llame igual que el jugador 1, si es así, solicita un nuevo nombre para el juegador 2.
 */
function compararNombres() {
  while (jugador1 == jugador2) {
    window.alert("Los nombres coindicen.\nVuelva a introducirlos.");
    jugador2 = pideNombre(2);
    compararNombres();
  }
}

/**
 * Mensaje a mostrar en la distintas fases del programa cuando se cancela en un prompt.
 */
function mensajeCancelar() {
  document.getElementById("cancelado").innerHTML = "Juego cancelado";
}

/**
 * Solicita por pantalla al jugador correspondiente, el palo de la baraja y el valor de la carta. Comprobará la validez de los datos llamando
 * a las funciones de validación. Finalmente los guardará en un array.
 * @param {Number} i Identificador del jugador al que se refiere
 * @returns {Array} carta_elegida_jugador_n  Almacena los valores del valor de la carta y el palo en un array.
 */
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

/**
 * Comprueba si las cartas elegidas por los jugadores (almacenadas en un array) hacen pareja, para ello evalua la igualdad del valor de la carta, el palo
 * en este caso es irrelevante para la puntuación. Si son pareja la puntucion de la partida se incrementa en 1.
 * @param {Array} cartaJugador1
 * @param {Array} cartaJugador2
 */
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

/**
 * Borra las cartas elegidas por los jugadores de los cuatro Arrays que almacenan las 10 cartas de cada palo.
 */
function borrarCartas() {
  let valor_a_borrar = 0;
  //borrar carta jugador 1
  switch (cartas_elegidas_todos_jugadores[0][1]) {
    case "oros":
      valor_a_borrar = oros.indexOf(cartas_elegidas_todos_jugadores[0][0]);
      oros.splice(valor_a_borrar, 1);
      break;
    case "copas":
      valor_a_borrar = copas.indexOf(cartas_elegidas_todos_jugadores[0][0]);
      copas.splice(valor_a_borrar, 1);
      break;
    case "espadas":
      valor_a_borrar = espadas.indexOf(cartas_elegidas_todos_jugadores[0][0]);
      espadas.splice(valor_a_borrar, 1);
      break;
    case "bastos":
      valor_a_borrar = bastos.indexOf(cartas_elegidas_todos_jugadores[0][0]);
      bastos.splice(valor_a_borrar, 1);
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
        oros.splice(valor_a_borrar, 1);
        break;
      case "copas":
        valor_a_borrar = copas.indexOf(cartas_elegidas_todos_jugadores[1][0]);
        copas.splice(valor_a_borrar, 1);
        break;
      case "espadas":
        valor_a_borrar = espadas.indexOf(cartas_elegidas_todos_jugadores[1][0]);
        espadas.splice(valor_a_borrar, 1);
        break;
      case "bastos":
        valor_a_borrar = bastos.indexOf(cartas_elegidas_todos_jugadores[1][0]);
        bastos.splice(valor_a_borrar, 1);
        break;
      default:
        window.alert("Error: No se han borrado cartas");
        break;
    }
  }
}

/**
 * De la puntucion obtenida en los 5 turnos, tratandola como fraccion con denominador 5 y numerador la puntucion, obtiene la fraccion equivalente
 * con denominador 10. Obtiene una puntuacion sobre 10 puntos, y se asocia un mensaje (segun los intervalos de puntuacion establecidos) que se
 * muestra por pantalla.
 */
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

/**
 * Modifica el contenido del documento HTML con la informacion almacenada de la partida.
 */
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
let numero_turnos = 5;
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
