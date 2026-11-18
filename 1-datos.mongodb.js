use("greenpower");
db.plantas.drop();

// 12 plantas. Cada documento tiene _id personalizado, ubicacion anidada,
// arreglo de documentos equipos y fecha ISODate. Algunas tienen generacion_mensual.
db.plantas.insertMany([
  {
    _id: "GP001", nombre: "Solar Wayuu", tecnologia: "Solar", capacidad_mw: 120,
    estado_operativo: "En operación",
    ubicacion: { departamento: "La Guajira", municipio: "Uribia", coordenadas: "11.7,-72.2" },
    fecha_inicio: ISODate("2023-03-15T00:00:00Z"),
    equipos: [
      { codigo: "EQ001", tipo: "Inversor", marca: "Huawei", estado: "En servicio" },
      { codigo: "EQ002", tipo: "Panel solar", marca: "Jinko", estado: "En servicio" }
    ],
    contratos: [{ numero: "C001", cliente: "Energia Caribe", estado: "Vigente" }],
    generacion_mensual: [{ fecha: ISODate("2026-10-05T00:00:00Z"), mwh: 18500 }, { fecha: ISODate("2026-10-20T00:00:00Z"), mwh: 19200 }]
  },
  {
    _id: "GP002", nombre: "Eolica del Norte", tecnologia: "Eolica", capacidad_mw: 180,
    estado_operativo: "En operación",
    ubicacion: { departamento: "La Guajira", municipio: "Maicao", coordenadas: "11.3,-72.3" },
    fecha_inicio: ISODate("2022-08-10T00:00:00Z"),
    equipos: [
      { codigo: "EQ003", tipo: "Aerogenerador", marca: "Vestas", estado: "En servicio" },
      { codigo: "EQ004", tipo: "Inversor", marca: "SMA", estado: "Fuera de servicio" }
    ],
    contratos: [{ numero: "C002", cliente: "Red Nacional", estado: "Vigente" }],
    generacion_mensual: [{ fecha: ISODate("2026-10-12T00:00:00Z"), mwh: 24100 }]
  },
  {
    _id: "GP003", nombre: "Solar del Cesar", tecnologia: "Solar", capacidad_mw: 95,
    estado_operativo: "En operación",
    ubicacion: { departamento: "Cesar", municipio: "Valledupar", coordenadas: "10.5,-73.2" },
    fecha_inicio: ISODate("2024-01-20T00:00:00Z"),
    equipos: [
      { codigo: "EQ005", tipo: "Inversor", marca: "Fronius", estado: "En servicio" },
      { codigo: "EQ006", tipo: "Panel solar", marca: "JA Solar", estado: "En servicio" }
    ],
    generacion_mensual: [{ fecha: ISODate("2026-10-08T00:00:00Z"), mwh: 15400 }]
  },
  {
    _id: "GP004", nombre: "Eolica Magdalena", tecnologia: "Eolica", capacidad_mw: 210,
    estado_operativo: "En operación",
    ubicacion: { departamento: "Magdalena", municipio: "Santa Marta", coordenadas: "11.2,-74.2" },
    fecha_inicio: ISODate("2021-06-01T00:00:00Z"),
    equipos: [
      { codigo: "EQ007", tipo: "Aerogenerador", marca: "Siemens Gamesa", estado: "En servicio" },
      { codigo: "EQ008", tipo: "Inversor", marca: "ABB", estado: "En servicio" }
    ],
    contratos: [{ numero: "C004", cliente: "Comercializadora Sol", estado: "Vigente" }],
    generacion_mensual: [{ fecha: ISODate("2026-10-15T00:00:00Z"), mwh: 26800 }]
  },
  {
    _id: "GP005", nombre: "Hidro Rio Claro", tecnologia: "Hidroelectrica", capacidad_mw: 75,
    estado_operativo: "En operación",
    ubicacion: { departamento: "Antioquia", municipio: "Cocorna", coordenadas: "6.0,-75.2" },
    fecha_inicio: ISODate("2020-11-12T00:00:00Z"),
    equipos: [
      { codigo: "EQ009", tipo: "Turbina", marca: "Andritz", estado: "En servicio" },
      { codigo: "EQ010", tipo: "Generador", marca: "ABB", estado: "En servicio" }
    ],
    contratos: [],
    generacion_mensual: [{ fecha: ISODate("2026-10-18T00:00:00Z"), mwh: 13200 }]
  },
  {
    _id: "GP006", nombre: "Solar Sabana", tecnologia: "Solar", capacidad_mw: 65,
    estado_operativo: "En operación",
    ubicacion: { departamento: "Atlantico", municipio: "Soledad", coordenadas: "10.9,-74.8" },
    fecha_inicio: ISODate("2023-09-05T00:00:00Z"),
    equipos: [
      { codigo: "EQ011", tipo: "Inversor", marca: "Huawei", estado: "En servicio" },
      { codigo: "EQ012", tipo: "Panel solar", marca: "LONGi", estado: "En servicio" }
    ],
    generacion_mensual: [{ fecha: ISODate("2026-10-10T00:00:00Z"), mwh: 11800 }]
  },
  {
    _id: "GP007", nombre: "Eolica del Valle", tecnologia: "Eolica", capacidad_mw: 155,
    estado_operativo: "En mantenimiento",
    ubicacion: { departamento: "Valle del Cauca", municipio: "Yumbo", coordenadas: "3.6,-76.5" },
    fecha_inicio: ISODate("2022-02-14T00:00:00Z"),
    equipos: [
      { codigo: "EQ013", tipo: "Aerogenerador", marca: "Vestas", estado: "En servicio" },
      { codigo: "EQ014", tipo: "Inversor", marca: "SMA", estado: "En servicio" }
    ],
    generacion_mensual: [{ fecha: ISODate("2026-10-11T00:00:00Z"), mwh: 9700 }]
  },
  {
    _id: "GP008", nombre: "Solar del Llano", tecnologia: "Solar", capacidad_mw: 88,
    estado_operativo: "En operación",
    ubicacion: { departamento: "Meta", municipio: "Villavicencio", coordenadas: "4.1,-73.6" },
    fecha_inicio: ISODate("2024-05-22T00:00:00Z"),
    equipos: [
      { codigo: "EQ015", tipo: "Inversor", marca: "Fronius", estado: "Fuera de servicio" },
      { codigo: "EQ016", tipo: "Panel solar", marca: "Jinko", estado: "En servicio" }
    ],
    generacion_mensual: [{ fecha: ISODate("2026-10-22T00:00:00Z"), mwh: 14200 }]
  },
  {
    _id: "GP009", nombre: "Hidro Alto Cauca", tecnologia: "Hidroelectrica", capacidad_mw: 240,
    estado_operativo: "En operación",
    ubicacion: { departamento: "Cauca", municipio: "Popayan", coordenadas: "2.4,-76.6" },
    fecha_inicio: ISODate("2019-07-18T00:00:00Z"),
    equipos: [
      { codigo: "EQ017", tipo: "Turbina", marca: "Andritz", estado: "En servicio" },
      { codigo: "EQ018", tipo: "Generador", marca: "Siemens", estado: "En servicio" }
    ],
    contratos: [{ numero: "C009", cliente: "Energia Nacional", estado: "Vigente" }],
    generacion_mensual: [{ fecha: ISODate("2026-10-25T00:00:00Z"), mwh: 31000 }]
  },
  {
    _id: "GP010", nombre: "Solar Santander", tecnologia: "Solar", capacidad_mw: 52,
    estado_operativo: "En operación",
    ubicacion: { departamento: "Santander", municipio: "Bucaramanga", coordenadas: "7.1,-73.1" },
    fecha_inicio: ISODate("2025-02-01T00:00:00Z"),
    equipos: [
      { codigo: "EQ019", tipo: "Inversor", marca: "Huawei", estado: "En servicio" },
      { codigo: "EQ020", tipo: "Panel solar", marca: "LONGi", estado: "En servicio" }
    ],
    generacion_mensual: [{ fecha: ISODate("2026-10-06T00:00:00Z"), mwh: 8900 }]
  },
  {
    _id: "GP011", nombre: "Eolica Guajira II", tecnologia: "Eolica", capacidad_mw: 135,
    estado_operativo: "En operación",
    ubicacion: { departamento: "La Guajira", municipio: "Riohacha", coordenadas: "11.5,-72.9" },
    fecha_inicio: ISODate("2023-12-01T00:00:00Z"),
    equipos: [
      { codigo: "EQ021", tipo: "Aerogenerador", marca: "GE", estado: "En servicio" },
      { codigo: "EQ022", tipo: "Inversor", marca: "ABB", estado: "En servicio" }
    ],
    contratos: [],
    generacion_mensual: [{ fecha: ISODate("2026-10-28T00:00:00Z"), mwh: 20500 }]
  },
  {
    _id: "GP012", nombre: "Biomasa del Eje", tecnologia: "Biomasa", capacidad_mw: 45,
    estado_operativo: "En operación",
    ubicacion: { departamento: "Risaralda", municipio: "Pereira", coordenadas: "4.8,-75.7" },
    fecha_inicio: ISODate("2022-10-30T00:00:00Z"),
    equipos: [
      { codigo: "EQ023", tipo: "Caldera", marca: "Thermax", estado: "En servicio" },
      { codigo: "EQ024", tipo: "Generador", marca: "ABB", estado: "En servicio" }
    ],
    generacion_mensual: [{ fecha: ISODate("2026-10-30T00:00:00Z"), mwh: 7600 }]
  }
]);

print("Parte 1 lista. Plantas insertadas: " + db.plantas.countDocuments());
