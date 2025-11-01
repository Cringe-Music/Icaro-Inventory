function userClicked(registro){
    const dataSheet = ss.getSheetByName("data");
    dataSheet.appendRow([
        registro.id,
        registro.serie,
        registro.tipoEq,
        registro.marca,
        registro.modelo,
        registro.ram,
        registro.disco,
        registro.discoCap,
        registro.procesador,
        registro.procesadorVel,
        registro.so,
        registro.hostname,
        registro.ipAddress,
        registro.usuario,
        registro.userdom,
        registro.ubicacion,
        registro.departamento,
        registro.provincia,
        registro.distrito,
        registro.sede,
        registro.codSede,
        registro.piso,
        registro.area,
        registro.estado,
        new Date(),
        registro.asociado,
        registro.observaciones,
        registro.responsable
    ]);
}