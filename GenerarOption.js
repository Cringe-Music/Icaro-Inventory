/**
 * Devuelve una lista de <option> de una hoja
 * @param {GoogleAppsScript.Spreadsheet.Spreadsheet} urlDeHoja - Ruta de Spreadsheet
 * @param {string} nombreHoja - Nombre de la hoja dentro del archivo
 * @param {number} filaInicio - Número de fila desde donde se inicia la lectura
 * @param {number} columna - Número de columna desde donde se inicia la lectura
 * @param {number} [numeroColumna=1] - Número de columnas a considerar (por defecto 1)
 * @returns {string} Cadena HTML con las opciones <option> generadas
 *
 * @example
 * const ss = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/...")
 * const opciones = getOpciones(ss, "DISCO", 2, 1)
 */

function getOpciones(urlDeHoja,nombreHoja,filaInicio,columna,numeroColumna=1){
    const hoja = urlDeHoja.getSheetByName(nombreHoja);
    if(!hoja){
        throw new Error(`No se encontró la hoja: ${nombreHoja}`);
    }    
    const ValorFilaFinal = hoja.getRange(filaInicio,columna).getDataRegion().getLastRow();
    const lista = hoja.getRange(filaInicio,columna,ValorFilaFinal - filaInicio + 1,numeroColumna).getValues();
    return lista.map(function(resultado){ return '<option>' + resultado[0] + '</option>';}).join('');
}

/**
DETALLES DE FUNCIONAMIENTO
############################## 
 *
*Qué hacemos con getRange???
#############################
*Accedemos a la celda A1
*var range = sheet.getRange("A1");

*Accedemos a la celda en la fila 2, columna 3 (C2)
*var range = sheet.getRange(2, 3);

*Accedemos a un bloque de celdas: desde fila 2, columna 1, con 3 filas y 2 columnas
*var range = sheet.getRange(2, 1, 3, 2);
*A2  B2
*A3  B3
*A4  B4

*Qué hacemos con getDataRegion???
#############################
*       A       B       C
*   1  Nombre  Edad    Ciudad
*   2  Luis    30      Lima
*   3  Ana     25      Cusco
*   4  Jorge   40      Arequipa
*   5
*   6  Pedro   35      Trujillo
*
* var rango = hoja.getRange("A2").getDataRegion();
* rango tendría el valor de A2:C4
* se corta en el primer espacio
*
*Qué hace getLastRow???
#############################
* var rango = hoja.getRange("A2").getDataRegion().getLastRow();
* Obtiene el ultimo valor del ordinal de la fila del bloque. en este caso A2:C4
* El valor de la posición de la ultima fila de la región, en este caso sería 4 (es el valor ordinal).
* Si la consulta sobre el mismo ejemplo fuese
* hoja.getRange(6, 1).getDataRegion().getLastRow() nos daría el valor de 6
* Sobre nuestra formula al valorFilaFinal le restamos 1 del encabezado
* y por defecto nuestro valor de numero de colunmas a considerar sera 1
*
*Qué hace join('')???
#############################
* El join es un método de array que sirve para concatenar el contenido en modo de texto
*/