/**
 * @author Adrian Pomar Maseda dwa73655@educastur
 * @version 1.0
 * @description Una empresa guarda la informacion de productos en un array con la siguiente estructura :
 *      [codigoProducto, descripcion, precio,
 *       codigoProducto, descripcion, precio ....]
 * El programa debe poder mostrar:
 *  1. producto mas barato, descripcion y precio.
 *  2. producto mas caro, descripcion y precio.
 *  3. lista de productos ordenados por precio mayor a menor
 *  4. Crear una cesta con un nº de productos y unidades que se solicitara el usuario. Mostrandose en la web el contenido e importe total.
 */

/**
 * Calcula el número de productos que hay en el array "productos" pasado por parametro, teniendo en cuenta que cada producto ocupa 3 posiciones
 * @param {Array} array - array de productos
 * @returns {Number} num_productos - número de productos
 */
function calcularNumProductos(array) {
  var num_productos = 0;
  num_productos = array.length / 3;
  return num_productos;
}

/**
 * Divide el array productos cada 3 posiciones y lo almacena en la matriz
 * @param {Array} arrayProduct - array de productos
 */
function dividirProductos(arrayProduct) {
  for (var i = 0; i < arrayProduct.length; i += 3) {
    matriz.push(arrayProduct.slice(i, i + 3));
  }
}

/**
 * ordena los elementos de la matriz en funcion de su segunda posicion, de mayor a menor o de menor aarrayProduct mayor segun su parametro
 * @param {String} orden - "mayor" o "menor" indica si se ordena de mayor a menor o de menor a mayor
 * @returns {Array} matriz - matriz ordenada
 */
function ordenarMatriz(ordenprimero) {
  switch (ordenprimero) {
    case "mayor":
      matriz.sort(function (a, b) {
        return b[2] - a[2];
      });
      break;
    case "menor":
      matriz.sort(function (a, b) {
        return a[2] - b[2];
      });
      break;
    default:
      console.log("Error en el orden");
      break;
  }
}

/**
 * Llama a la funcion ordenarMatriz() para ordenar la matriz de mayor a menor y almacena el producto mas barato y el mas caro en variables.
 */
function obtenerProductosExtremos() {
  ordenarMatriz("mayor");
  productoMasCaro = matriz[0];
  ordenarMatriz("menor");
  productoMasBarato = matriz[0];
}

/**
 * Genera un string por cada elemento en la matriz con la informacion de la posicion 1 y 2 , correspondientes a nombre y precio.
 * @returns {String} cadena - cadena con la informacion de los productos
 */
function generarCadenaProductos() {
  var cadenaProductos =
    "La lista de productos ordenada de mayor a menor es:<br>";
  for (var i = 0; i < matriz.length; i++) {
    cadenaProductos +=
      `${i + 1}. "` +
      matriz[i][1] +
      '" con un precio de ' +
      matriz[i][2] +
      "€" +
      "<br>";
  }
  return cadenaProductos;
}

/**
 * Muestra el producto más barato, el más caro, y la matriz en el HTML
 */
function insertarProductosHTML() {
  document.getElementById("productoMasBarato").innerHTML =
    "El producto mas barato es '" +
    productoMasBarato[1] +
    "' con un precio de " +
    productoMasBarato[2] +
    "€";

  document.getElementById("productoMasCaro").innerHTML =
    "El producto mas caro es '" +
    productoMasCaro[1] +
    "' con un precio de " +
    productoMasCaro[2] +
    "€";

  document.getElementById("listaProductos").innerHTML = cadenaProductos;
}

/**
 * Modifica una cadena de texto que recibe por parametro y cambia los caracteres <br> por \n .
 * @param {String} cadena string a modificar
 * @returns {String} nueva cadena - cadena modificada
 */
function modificarCadena(cadena) {
  var nuevaCadena = cadena.replace(/<br>/g, "\n");
  nuevaCadena = nuevaCadena.replace("ordenada de mayor a menor", "disponibles");
  return nuevaCadena;
}

/**
 * Muestra los productos disponibles al usuario en un prompt donde puede insertar el que desea o cancelar. A continuación se pregunta el número de unidades que desa para ese artículo, tambien puede cancerlar si lo desea. Finalmente si ha elegido un producto y su cantidad se almacenará en el array de la Cesta.
 */
function pedidoUsuario() {
  var articulo = prompt(
    cadenaAnuncio +
      "\n" +
      "Introduzca el nombre del producto (¡¡SIN COMILLAS!!) que desea comprar o cancelar para salir."
  );
  if (articulo != null) {
    if (productos.includes(articulo) == true) {
      window.alert("El producto " + articulo + " se ha añadido a la cesta.");
      var unidades = prompt("Introduzca las unidades que desea del producto");
      if (unidades != null) {
        unidades = parseInt(unidades);
        if (unidades > 0) {
          cesta.push([articulo, unidades]);
          var x = window.confirm("¿Desea seguir comprando?");
          if (x == true) {
            pedidoUsuario();
          } else {
            window.alert("Ha finalizado su compra");
          }
        } else {
          window.alert("No se han añadido unidades al producto.");
          pedidoUsuario();
        }
      } else {
        window.alert("Ha cancelado la compra");
      }
    } else {
      window.alert("El producto " + articulo + " no se encuentra disponible.");
      pedidoUsuario();
    }
  } else {
    alert("Ha cancelado la compra");
  }
}

/**
 * Genera un string con la informacion de los productos que se han añadido a la cesta.
 */
function generarCadenaCesta() {
  var cadenaCesta = "La cesta contiene:<br>";
  for (var i = 0; i < cesta.length; i++) {
    cadenaCesta +=
      cesta[i][1] + " unidades del producto " + cesta[i][0] + "<br>";
  }
  return cadenaCesta;
}

/**
 * Calcula el importe de la cesta.
 * @returns {Number} importe - importe total de la cesta
 */
function calcularImporte() {
  var importe = 0;
  for (var i = 0; i < cesta.length; i++) {
    for (var j = 0; j < matriz.length; j++) {
      if (cesta[i][0] == matriz[j][1]) {
        importe += cesta[i][1] * matriz[j][2];
      }
    }
  }
  return importe;
}

/**
 * Muestra la cesta y el importe en el HTML.
 */
function insertarCestaHTML() {
  document.getElementById("cesta").innerHTML = cadenaCesta;
  document.getElementById("importe").innerHTML =
    "El importe total es " + importe + "€";
}

let productos = [
  3,
  "manzana",
  3,
  2,
  "pera",
  2,
  1,
  "fresa",
  1,
  4,
  "tomate",
  4,
  5,
  "platano",
  5,
];
let num_productos = 0;
let productoMasCaro;
let productoMasBarato;
let matriz;
let cadenaProductos = "";
let cadenaAnuncio = "";
let cesta = new Array();
let cadenaCesta = "";
let importe = 0;

num_productos = calcularNumProductos(productos);
matriz = new Array();
dividirProductos(productos);
obtenerProductosExtremos();
ordenarMatriz("mayor");
cadenaProductos = generarCadenaProductos();
insertarProductosHTML();
cadenaAnuncio = modificarCadena(cadenaProductos);
pedidoUsuario();
cadenaCesta = generarCadenaCesta();
importe = calcularImporte();
insertarCestaHTML();
