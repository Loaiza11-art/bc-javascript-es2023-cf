// ============================================
// PROYECTO INTEGRADOR — ETAPA 0
// Semana 10 — JavaScript ES2023 Bootcamp
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza DOMAIN_NAME y los datos de ejemplo con tu dominio asignado
// 2. Implementa cada TODO siguiendo las instrucciones de los comentarios
// 3. Ejecuta con: node 3-proyecto/starter/app.js
// 4. Valida el checklist del README antes de entregar
//
// DOMINIO ASIGNADO: [completar con tu dominio]
// ============================================

// ============================================
// SECCIÓN 1: Configuración y Constantes (Semanas 01–02)
// ============================================

// TODO: Renombrar con el nombre de tu dominio (en inglés, UPPER_SNAKE_CASE)
const DOMAIN_NAME = "ACCOUNTING_APP";
const VALUE_LABEL = "transactions";

// TODO: Ajustar al límite razonable para tu dominio
// Usa separadores numéricos (ES2021): 1_000, 10_000
const MAX_ITEMS = 1_000;

// ============================================
// SECCIÓN 2: Datos — Array Principal (Semanas 01–02)
// ============================================

// TODO: Definir el array con MÍNIMO 6 objetos
// Requisitos:
// - Mínimo 5 propiedades por objeto (tipos mixtos)
// - Al menos 1 propiedad numérica (para calcular estadísticas)
// - Al menos 1 propiedad booleana (para filtrar activos/inactivos)
// - Al menos 1 propiedad OPCIONAL (no todos los objetos la tienen)
//
// Nota para el aprendiz — Adaptaciones por dominio:
// - Biblioteca:    { id, title, author, year, pages, available, notes? }
// - Farmacia:      { id, name, price, stock, laboratory, active, prescription? }
// - Gimnasio:      { id, name, memberType, fee, joinDate, active, plan? }
// - Restaurante:   { id, name, category, price, calories, available, allergens? }
// - Banco:         { id, owner, type, balance, rate, active, creditLimit? }

const items = [
  {
    id: 1,
    description: "Venta de productos",
    amount: 500,
    type: "income",
    active: true,
    category: "ventas",
  },
  {
    id: 2,
    description: "Pago de arriendo",
    amount: 300,
    type: "expense",
    active: true,
    category: "gastos fijos",
    notes: "Pago mensual",
  },
  {
    id: 3,
    description: "Compra de insumos",
    amount: 200,
    type: "expense",
    active: false,
    category: "inventario",
  },
  {
    id: 4,
    description: "Servicio de mantenimiento",
    amount: 150,
    type: "expense",
    active: true,
    category: "servicios",
  },
  {
    id: 5,
    description: "Ingreso por asesoría",
    amount: 400,
    type: "income",
    active: true,
    category: "servicios",
  },
  {
    id: 6,
    description: "Pago de internet",
    amount: 100,
    type: "expense",
    active: true,
    category: "gastos fijos",
  },
];

// ============================================
// SECCIÓN 3: Funciones CRUD (Semanas 07–08)
// ============================================

/**
 * Agrega un nuevo elemento al array principal
 * @param {Object} item - El elemento a agregar
 */
const addItem = (item) => {
  if (items.length >= MAX_ITEMS) {
    console.log("Límite alcanzado");
    return;
  }

  items.push(item);
  console.log(`✅ Transacción agregada: ${item.description}`);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} - El elemento encontrado o undefined
 */
const findById = (id) => {
  return items.find(item => item.id === id);
};

/**
 * Retorna todos los elementos activos
 * @returns {Object[]}
 */
const getActive = () => {
  return items.filter(item => item.active);
};

/**
 * Filtra elementos por el valor de un campo
 * @param {string} field - El nombre de la propiedad
 * @param {*} value - El valor a buscar
 * @returns {Object[]}
 */
const filterByField = (field, value) => {
  return items.filter(item => item[field] === value);
};

// ============================================
// SECCIÓN 4: Funciones de Análisis (Semanas 08–09)
// ============================================

/**
 * Actualiza un elemento de forma inmutable usando spread
 * @param {number} id - Id del elemento a actualizar
 * @param {Object} changes - Objeto con los cambios a aplicar
 * @returns {Object[]} - Nuevo array con el elemento actualizado
 */
const updateItem = (id, changes) => {
  return items.map(item =>
    item.id === id
      ? { ...item, ...changes }
      : item
  );
};

/**
 * Calcula estadísticas de un campo numérico
 * @param {string} field - El nombre de la propiedad numérica
 * @returns {{ min: number, max: number, avg: number, total: number }}
 */
const calculateStats = (field) => {
  const values = items.map(i => i[field]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const avg = total / values.length;

  return { min, max, avg, total };
};

// ============================================
// SECCIÓN 5: Funciones de Display (Semanas 04–07)
// ============================================

/**
 * Formatea un elemento para mostrar en consola (una línea)
 * @param {Object} item - El elemento a formatear
 * @returns {string}
 */
const formatItem = (item) => {
  return `[${item.id}] ${item.description.padEnd(25)} | $${item.amount} | ${item.type} | ${item.active ? "Activo" : "Inactivo"} | ${item.notes ?? "Sin notas"}`;
};

/**
 * Genera el reporte completo del dominio
 * Usa: Object.entries, forEach, filter, map, calculateStats
 */
const buildReport = () => {
  console.log(`Reporte de ${DOMAIN_NAME}`);
  console.log("=".repeat(50));

  items.forEach(item => console.log(formatItem(item)));

  const active = getActive();
  console.log(`\nActivos: ${active.length}`);

  const stats = calculateStats("amount");
  console.log(`\nTotal: ${stats.total}`);
  console.log(`Promedio: ${stats.avg.toFixed(2)}`);

  console.log("\nPropiedades del primer item:");
  Object.entries(items[0]).forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
  });

  console.log(`\nTotal de registros: ${items.length}`);
};

// ============================================
// SECCIÓN 6: Ejecución Principal
// ============================================
//
// TODO: Descomentar a medida que implementes cada función
//

console.log("=".repeat(40));
console.log(`  ${DOMAIN_NAME.toUpperCase()}`);
console.log("=".repeat(40));
console.log(`Total de ${VALUE_LABEL}: ${items.length} / ${MAX_ITEMS}`);
console.log("");

// Paso 1: Buscar por id
const found = findById(1);
// console.log("Encontrado id=1:", found?.name ?? "no encontrado");
console.log(found);

// Paso 2: Listar activos
const active = getActive();
// console.log(`Activos: ${active.length}`);
// active.forEach(item => console.log(" ", formatItem(item)));
console.log(active);

// Paso 3: Filtrar por campo
// const filtered = filterByField("category", "tipo-a");
// console.log(`Filtro category=tipo-a: ${filtered.length} resultados`);
// console.log("");

// Paso 4: Actualizar con spread
// const updated = updateItem(1, { value: 999 });
// console.log(`Actualizado id=1: value=${updated.find(i => i.id === 1)?.value}`);
// console.log("");

// Paso 5: Estadísticas
const stats = calculateStats("amount");
// console.log(`Estadísticas (value): min=${stats.min} max=${stats.max} avg=${stats.avg.toFixed(2)}`);
console.log(stats);

// Paso 6: Reporte completo
buildReport();

// TODO: Agregar un nuevo elemento usando addItem
// addItem({ id: 7, name: "Nuevo elemento", value: 300, active: true, category: "tipo-a" });
