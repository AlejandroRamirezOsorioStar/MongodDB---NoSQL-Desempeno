// GREENPOWER - PARTE 2: OPERACIONES CRUD
use("greenpower");

// Limpieza de los documentos de demostracion para poder repetir este archivo.
db.plantas.deleteMany({ _id: { $in: ["CRUD001", "CRUD002", "CRUD003"] } });

// 1. Insertar un documento adicional con insertOne.
db.plantas.insertOne({
  _id: "CRUD001", nombre: "Planta Prueba CRUD Uno", tecnologia: "Solar", capacidad_mw: 60,
  estado_operativo: "En operación",
  ubicacion: { departamento: "La Guajira", municipio: "Fonseca" },
  fecha_inicio: ISODate("2025-01-10T00:00:00Z"),
  equipos: [{ codigo: "CR-EQ01", tipo: "Inversor", marca: "Demo", estado: "En servicio" }],
  contratos: [], generacion_mensual: [], registro_prueba: true
});

// 2. Insertar dos documentos con insertMany.
db.plantas.insertMany([
  {
    _id: "CRUD002", nombre: "Planta Prueba CRUD Dos", tecnologia: "Eolica", capacidad_mw: 70,
    estado_operativo: "En operación", ubicacion: { departamento: "Atlantico", municipio: "Baranoa" },
    fecha_inicio: ISODate("2025-02-10T00:00:00Z"),
    equipos: [{ codigo: "CR-EQ02", tipo: "Aerogenerador", marca: "Demo", estado: "En servicio" }],
    contratos: [], generacion_mensual: [], registro_prueba: true
  },
  {
    _id: "CRUD003", nombre: "Planta Prueba CRUD Tres", tecnologia: "Solar", capacidad_mw: 80,
    estado_operativo: "En operación", ubicacion: { departamento: "Cesar", municipio: "Valledupar" },
    fecha_inicio: ISODate("2025-03-10T00:00:00Z"),
    equipos: [{ codigo: "CR-EQ03", tipo: "Panel solar", marca: "Demo", estado: "En servicio" }],
    contratos: [], generacion_mensual: [], registro_prueba: true
  }
]);

// 3. Modificar un campo de un documento con updateOne y $set.
db.plantas.updateOne(
  { _id: "CRUD001" },
  { $set: { capacidad_mw: 65 } }
);

// 4. Modificar varios documentos con updateMany y $inc.
db.plantas.updateMany(
  { registro_prueba: true },
  { $inc: { capacidad_mw: 5 } }
);

// 5. Agregar un equipo al arreglo con $push.
db.plantas.updateOne(
  { _id: "CRUD001" },
  { $push: { equipos: { codigo: "CR-EQ04", tipo: "Medidor", marca: "Demo", estado: "En servicio" } } }
);

// 6. Contar primero los documentos que se eliminaran y luego ejecutar deleteMany.
const cantidadAntesDeEliminar = db.plantas.countDocuments({ registro_prueba: true });
print("Documentos que cumplen el filtro antes de eliminar: " + cantidadAntesDeEliminar);
db.plantas.deleteMany({ registro_prueba: true });
print("Documentos de prueba restantes: " + db.plantas.countDocuments({ registro_prueba: true }));

print("Parte 2 CRUD finalizada.");
