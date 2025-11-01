const url = "https://docs.google.com/spreadsheets/d/1nHX6SL9SjmL3WiQbnHJuXPQfR14i95sJim0kjHdns50/edit?gid=0";
const ss = SpreadsheetApp.openByUrl(url);

function doGet(e) {
  const page = HtmlService.createTemplateFromFile("index");

  // AGREGAR 'ss' COMO PRIMER PARÁMETRO
  page.listTipo = getOpciones(ss, "TIPO", 1, 1);
  page.listMarca = getOpciones(ss, "MARCA", 1, 1);
  page.listModelo = getOpciones(ss, "MODELO", 1, 1);
  page.listRam = getOpciones(ss, "RAM", 1, 1);
  page.listDisco = getOpciones(ss, "DISCO", 2, 1);
  page.listDiscoCap = getOpciones(ss, "DISCO", 2, 3);
  page.listProcesador = getOpciones(ss, "PROCESADOR", 2, 1);
  page.listProcesadorVel = getOpciones(ss, "PROCESADOR", 2, 3);
  page.listSO = getOpciones(ss, "S.O.", 1, 1);
  page.listEstado = getOpciones(ss, "ESTADO", 1, 1);
  page.listUbicacion = getOpciones(ss, "UBICACION", 2, 1);
  page.listDepartamento = getOpciones(ss, "UBICACION", 2, 3);
  page.listProvincia = getOpciones(ss, "UBICACION", 2, 5);
  page.listDistrito = getOpciones(ss, "UBICACION", 2, 7);
  page.listSede = getOpciones(ss, "SEDE", 2, 1);
  page.listPiso = getOpciones(ss, "SEDE", 2, 4);
  page.listArea = getOpciones(ss, "SEDE", 2, 6);
  page.listTecnico = getOpciones(ss, "TECNICO", 1, 1);

  return page.evaluate();
}

function include(filename) {
  return HtmlService.createHtmlOutputFromFile(filename).getContent();
}

function getUsuarioDominio(usuarioDominio) {
  const hoja = ss.getSheetByName("USUARIOS");
  const data = hoja.getRange(2, 1, hoja.getLastRow() - 1, 2).getValues();
  //const fila = data.find(r => r[0] === usuarioDominio);
  const fila = data.find(r => String(r[0]) === String(usuarioDominio));
  return fila ? fila[1] : '';
}

function getNombreSede(codigoSede) {
  const hoja = ss.getSheetByName("SEDE");
  const data = hoja.getRange(2, 1, hoja.getLastRow()-1, 2).getValues(); // [codigo,nombreSede]  
  //const fila = data.find(r => r[0] === codigoSede);
  const fila = data.find(r => String(r[0]) === String(codigoSede));
  //Logger.log(fila);
  return fila ? fila[1] : '';
}

function getComentarios() {
  var ss = SpreadsheetApp.openByUrl(url);
  var ws = ss.getSheetByName("COMENTARIOS");
  var data = ws.getRange(2, 1).getDataRegion().getValues();
  var options = {};
  data.forEach(function (v) {
    options[v[0]] = null;
  });
  Logger.log(options);
  return options;
}