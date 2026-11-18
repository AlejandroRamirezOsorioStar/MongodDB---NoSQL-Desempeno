// GREENPOWER - PARTE 4: AGREGACIONES
use("greenpower");

// AGREGACION 1
// Pregunta de negocio: ¿Cual es la capacidad promedio y cuantas plantas operativas hay por tecnologia?
print("\nAGREGACION 1 - Cantidad de plantas y capacidad promedio por tecnologia:");
printjson(db.plantas.aggregate([
  { $match: { estado_operativo: "En operación" } },
  { $group: {
      _id: "$tecnologia",
      cantidad_plantas: { $sum: 1 },
      capacidad_promedio_MW: { $avg: "$capacidad_mw" }
  }},
  { $sort: { capacidad_promedio_MW: -1 } }
]).toArray());

// DEMOSTRACION PARCIAL: resultado despues de aplicar $unwind.
print("\nRESULTADO PARCIAL DESPUES DE $unwind - Primeros 10 equipos:");
// Ejecutar este pipeline corto y explicar que cada documento de salida representa un equipo individual.
printjson(db.plantas.aggregate([
  { $unwind: "$equipos" },
  { $project: { _id: 0, planta: "$nombre", tipo_equipo: "$equipos.tipo", estado_equipo: "$equipos.estado" } },
  { $limit: 10 }
]).toArray());

// Pregunta de negocio: ¿Cuales son los tres tipos de equipo mas instalados en las plantas?
print("\nAGREGACION 2 - Top 3 tipos de equipo mas instalados:");
printjson(db.plantas.aggregate([
  { $unwind: "$equipos" },
  { $group: {
      _id: "$equipos.tipo",
      total_equipos: { $sum: 1 }
  }},
  { $project: { _id: 0, tipo_equipo: "$_id", total_equipos: 1 } },
  { $sort: { total_equipos: -1, tipo_equipo: 1 } },
  { $limit: 3 }
]).toArray());

print("\nParte 4: agregaciones finalizadas.");
