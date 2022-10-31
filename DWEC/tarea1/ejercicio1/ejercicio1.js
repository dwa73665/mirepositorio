/**
 * @author Adrian Pomar Maseda
 * @version 1.0
 * @description Calcular la letra asociada al numero de un DNI.
 * 
 * Se debe obtener el resto de dividir el número del DNI entre 23, que sera un número 
 * natural entre 0 y 22. Este número nos indicará nuestra letra entre 
 * las posibles letras [TRWAGMYFPDXBNJZSQVHLCKE]
 */

const letras='TRWAGMYFPDXBNJZSQVHLCKE';

function letraDNI() {
    let numeroDNI = window.prompt('Introduce tu número de DNI.\n Son 8 digitos:');                
    while ( isNaN(numeroDNI) || numeroDNI.length!=8 || numeroDNI=="" ) {
        if (numeroDNI=="") {
            window.alert('No has introducido nada');
        }else if (isNaN(numeroDNI)==true) {
            window.alert('No has introducido un número, si no letras');
        }else if(isNaN(numeroDNI)==false & numeroDNI.length!=8){
            window.alert('Has introducido numeros pero una cantidad distinta de 8');
        }else{
            window.alert('Hay algún error en sus datos')
        }
        numeroDNI = window.prompt('Introduce de nuevo tu DNI (8 digitos numéricos).');
    }
    const modulo = numeroDNI % 23;
    const letra = letras[modulo];
    document.write('<p> Tu numero de DNI es: <b>' + numeroDNI + '</b><br> Y la letra correspondiente es: <b>' + letra + '</b></p>');
}

letraDNI();
