# GreenPower — Evidencia de desempeño en MongoDB

**Sistema:** Sistema 17 — GreenPower (gestión de energía renovable).

## Descripción de la colección principal

La colección principal es `plantas`. Cada documento representa una planta de generación de energía e incluye:

- Identificador personalizado (`_id` de texto).
- Nombre, tecnología, capacidad y estado operativo.
- Ubicación como documento anidado (`departamento`, `municipio` y coordenadas).
- Fecha de inicio almacenada como fecha BSON mediante `ISODate()`.
- Arreglo de documentos `equipos`, con código, tipo, marca y estado.
- Información de contratos y generación mensual cuando corresponde.

Se cargan 12 documentos de demostración diseñados para ejecutar las operaciones CRUD, las cinco consultas asignadas y los dos ejercicios de agregación. Son datos académicos de ejemplo, no registros reales completos de la base SQL original.

## Archivos

| Archivo | Contenido |
|---|---|
| `1-datos.mongodb.js` | Selecciona `greenpower`, elimina y recrea únicamente `plantas`, e inserta 12 documentos. |
| `2-crud.mongodb.js` | `insertOne`, `insertMany`, `updateOne`, `updateMany`, `$push`, `countDocuments` y `deleteMany`. |
| `3-consultas.mongodb.js` | Las cinco consultas asignadas al Sistema 17: GreenPower. |
| `4-agregaciones.mongodb.js` | Dos pipelines de agregación y una consulta parcial para mostrar el resultado de `$unwind`. |

## Requisitos previos

1. Tener MongoDB Community Server instalado y en ejecución.
2. Tener MongoDB Shell (`mongosh`) instalado y reconocido desde CMD.
3. Guardar los cuatro archivos en una misma carpeta.

## Cómo ejecutar

Abrir CMD en la carpeta donde están guardados los archivos y ejecutar los comandos **uno por uno y en este orden**:

```cmd
mongosh "mongodb://127.0.0.1:27017" --file "1-datos.mongodb.js"
mongosh "mongodb://127.0.0.1:27017" --file "2-crud.mongodb.js"
mongosh "mongodb://127.0.0.1:27017" --file "3-consultas.mongodb.js"
mongosh "mongodb://127.0.0.1:27017" --file "4-agregaciones.mongodb.js"
```

## Consideraciones

- `1-datos.mongodb.js` elimina y vuelve a crear **solo** la colección `plantas`. No elimina las otras colecciones de la base `greenpower`.
- `2-crud.mongodb.js` inserta tres documentos temporales (`CRUD001`, `CRUD002` y `CRUD003`), realiza las modificaciones y luego los elimina. No elimina las 12 plantas principales.
- Ejecutar primero `1-datos.mongodb.js`. Después ejecutar CRUD, consultas y agregaciones.
- La consulta 5 usa octubre de 2026 como último mes calendario completo para los datos de demostración. Si el docente interpreta “último mes” como los últimos 30 días, se debe ajustar el rango de fechas.
- Para repetir toda la demostración desde cero, volver a ejecutar primero `1-datos.mongodb.js`.
