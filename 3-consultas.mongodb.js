// GREENPOWER - PARTE 3: CINCO CONSULTAS ASIGNADAS
use("greenpower");

// Consulta 1: ¿Que plantas tienen capacidad superior a 50 MW y tecnologia solar o eolica?
print("\nCONSULTA 1 - Plantas solares o eolicas con capacidad superior a 50 MW:");
printjson(db.plantas.find({
  capacidad_mw: { $gt: 50 },
  tecnologia: { $in: ["Solar", "Eolica"] }
}).toArray());

// Consulta 2: ¿Que plantas de La Guajira se encuentran en operacion?
print("\nCONSULTA 2 - Plantas operativas de La Guajira:");
printjson(db.plantas.find({
  "ubicacion.departamento": "La Guajira",
  estado_operativo: "En operación"
}).toArray());

// Consulta 3: ¿Que plantas tienen algun inversor que este fuera de servicio?
// $elemMatch asegura que tipo y estado correspondan al MISMO elemento del arreglo equipos.
print("\nCONSULTA 3 - Plantas con inversores fuera de servicio:");
printjson(db.plantas.find({
  equipos: {
    $elemMatch: { tipo: "Inversor", estado: "Fuera de servicio" }
  }
}).toArray());

// Consulta 4: ¿Que plantas no tienen contratos de venta de energia?
// Incluye documentos donde contratos no existe y documentos donde contratos es un arreglo vacio.
print("\nCONSULTA 4 - Plantas sin contratos:");
printjson(db.plantas.find({
  $or: [
    { contratos: { $exists: false } },
    { contratos: { $size: 0 } }
  ]
}).toArray());

// Consulta 5: ¿Cuales son las 5 plantas con mayor generacion durante octubre de 2026?
// Se interpreta "ultimo mes" como el ultimo mes calendario completo: octubre de 2026.
print("\nCONSULTA 5 - Top 5 plantas por generacion en octubre de 2026:");
printjson(db.plantas.aggregate([
  { $unwind: "$generacion_mensual" },
  { $match: {
      "generacion_mensual.fecha": {
        $gte: ISODate("2026-10-01T00:00:00Z"),
        $lt: ISODate("2026-11-01T00:00:00Z")
      }
  }},
  { $group: {
      _id: "$_id",
      nombre: { $first: "$nombre" },
      tecnologia: { $first: "$tecnologia" },
      MWh: { $sum: "$generacion_mensual.mwh" }
  }},
  { $sort: { MWh: -1 } },
  { $limit: 5 },
  { $project: { _id: 0, nombre: 1, tecnologia: 1, MWh: 1 } }
]).toArray());

print("\nParte 3: consultas finalizadas.");
