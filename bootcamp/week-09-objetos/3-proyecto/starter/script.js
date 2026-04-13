// ============================================
// PROYECTO SEMANA 09: Catálogo de Elementos
// ============================================
//
// INSTRUCCIONES:
// 1. Define tu dominio en DOMAIN_NAME y VALUE_LABEL
// 2. Completa el array `items` con datos de tu dominio
// 3. Implementa cada función siguiendo los TODOs
// 4. Ejecuta con: node script.js
//
// Tu catálogo debe tener:
//   - Mínimo 6 objetos con al menos 5 propiedades cada uno
//   - Al menos 1 propiedad numérica, 1 booleana y 1 opcional
// ============================================

// ============================================
// CONFIGURACIÓN DEL DOMINIO
// ============================================

// TODO: Reemplaza con el nombre de tu dominio
// Ejemplos: "Biblioteca", "Farmacia", "Gimnasio", "Restaurante"
const DOMAIN_NAME = "Contabilidad PYME";

// TODO: Reemplaza con el nombre del tipo de elemento
// Ejemplos: "libros", "medicamentos", "equipos", "platillos"
const VALUE_LABEL = "Transacciones";

// ============================================
// DATOS DEL CATÁLOGO
// ============================================

// TODO: Define al menos 6 objetos con mínimo 5 propiedades cada uno
// Incluye:
//   - id (número)
//   - name (string)
//   - Al menos 1 propiedad numérica (price, pages, duration, capacity, etc.)
//   - Al menos 1 propiedad booleana (available, active, inStock, visible, etc.)
//   - Al menos 1 propiedad opcional (no todos los objetos la tienen)

const items = [
 
  {
    id: 1,
    name: "Venta de productos",
    amount: 150000,
    type: "ingreso",
    active: true,
    client: "Tienda ABC" // opcional
  },
  {
    id: 2,
    name: "Pago de servicios",
    amount: 50000,
    type: "egreso",
    active: true
  },
  {
    id: 3,
    name: "Compra de insumos",
    amount: 80000,
    type: "egreso",
    active: false,
    provider: "Proveedor XYZ"
  },
  {
    id: 4,
    name: "Ingreso por consultoría",
    amount: 200000,
    type: "ingreso",
    active: true
  },
  {
    id: 5,
    name: "Pago de nómina",
    amount: 300000,
    type: "egreso",
    active: true
  },
  {
    id: 6,
    name: "Venta online",
    amount: 120000,
    type: "ingreso",
    active: false
  }

  // TODO: Objeto 1
  // TODO: Objeto 2
  // TODO: Objeto 3
  // TODO: Objeto 4
  // TODO: Objeto 5
  // TODO: Objeto 6
];

// ============================================
// INSPECCIÓN CON Object.*
// ============================================

/**
 * Muestra las claves y valores de un objeto usando Object.entries()
 * @param {Object} item - El objeto a inspeccionar
 */
const inspectItem = (item) => {
  console.log(`\n📋 Detalle de: ${item.name}`);

  Object.entries(item).forEach(([key, value]) => {
    console.log(key.padEnd(15), ":", value);
  });

  // TODO: Usar Object.entries() + forEach para imprimir cada clave y valor
  // Alinear las claves con padEnd para formato de tabla
};

/**
 * Calcula estadísticas numéricas del catálogo
 * @param {string} numericKey - El nombre de la propiedad numérica a analizar
 */
const calculateStats = (numericKey) => {
  const values = items.map(item => item[numericKey]);

  const total = values.reduce((acc, val) => acc + val, 0);
  const avg = total / values.length;
  const max = Math.max(...values);
  const min = Math.min(...values);

  console.log("\n📊 Estadísticas:");
  console.log("Total:", total);
  console.log("Promedio:", avg);
  console.log("Máximo:", max);
  console.log("Mínimo:", min);
};

// ============================================
// VERIFICACIÓN CON Object.hasOwn()
// ============================================

/**
 * Muestra el detalle de un elemento, incluyendo propiedades opcionales
 * si existen en ese objeto
 * @param {Object} item - El objeto a mostrar
 */
const showWithOptionals = (item) => {
  console.log(`\n→ ${item.name}`);
  console.log("Monto:", item.amount);
  console.log("Activo:", item.active);

  if (Object.hasOwn(item, "client")) {
    console.log("Cliente:", item.client);
  }

  if (Object.hasOwn(item, "provider")) {
    console.log("Proveedor:", item.provider);
  }
};
// ============================================
// ITERACIÓN CON for...in
// ============================================

/**
 * Imprime todas las propiedades de un objeto usando for...in
 * @param {Object} item - El objeto a recorrer
 */
const printAllProperties = (item) => {
  console.log(`\n🔍 Propiedades de "${item.name}":`);

  for (let key in item) {
    if (Object.hasOwn(item, key)) {
      console.log(key, ":", item[key]);
    }
  }
};

// ============================================
// SPREAD OPERATOR
// ============================================

/**
 * Aplica una actualización inmutable a un elemento
 * @param {Object} item - El objeto original
 * @param {Object} changes - Las propiedades a actualizar
 * @returns {Object} Nuevo objeto con los cambios aplicados
 */
const updateItem = (item, changes) => {
  return { ...item, ...changes };
};
// ============================================
// OPERACIONES CON EL ARRAY
// ============================================

/**
 * Filtra los elementos disponibles/activos
 * @returns {Object[]} Array de elementos disponibles
 */
const getAvailable = () => {
  return items.filter(item => item.active);
};

/**
 * Busca un elemento por su id
 * @param {number} id - El id a buscar
 * @returns {Object|undefined} El elemento encontrado o undefined
 */
const findById = (id) => {
  return items.find(item => item.id === id);
};

/**
 * Agrega una propiedad calculada a cada elemento
 * @returns {Object[]} Nuevo array con la propiedad adicional
 */
const addCalculatedProp = () => {
  return items.map(item => ({
    ...item,
    amountWithTax: item.amount * 1.19
  }));
};

/**
 * Ordena los elementos por valor numérico (sin mutar el original)
 * @param {boolean} ascending - true para ascendente, false para descendente
 * @returns {Object[]} Nuevo array ordenado
 */
const sortByNumericProp = (ascending = true) => {
  return [...items].sort((a, b) => {
    return ascending ? a.amount - b.amount : b.amount - a.amount;
  });
};

// ============================================
// REPORTE FINAL
// ============================================

/**
 * Imprime el reporte completo del catálogo
 */
const buildReport = () => {
  console.log("\n" + "=".repeat(50));
  console.log(`📦 CATÁLOGO: ${DOMAIN_NAME.toUpperCase()}`);
  console.log("=".repeat(50));

  console.log("Total:", items.length);

  const available = getAvailable();
  console.log("Activos:", available.length);

  calculateStats("amount");

  const sorted = sortByNumericProp();
  console.log("\n📄 Ordenados:");
  sorted.forEach(item => console.log(item.name, "-", item.amount));

  const max = sortByNumericProp(false)[0];
  const min = sortByNumericProp(true)[0];

  console.log("\nMayor:", max.name);
  console.log("Menor:", min.name);

  console.log("=".repeat(50));
};

// ============================================
// EJECUCIÓN PRINCIPAL
// ============================================

console.log(`\n🚀 Iniciando catálogo: ${DOMAIN_NAME}`);
console.log(`   Total de ${VALUE_LABEL}: ${items.length}`);

inspectItem(items[0]);
calculateStats("amount");
items.forEach(showWithOptionals);
printAllProperties(items[0]);

const updated = updateItem(items[0], { amount: 999999 });
console.log(updated);

console.log(getAvailable());

console.log(findById(2));
console.log(findById(999));

console.log(addCalculatedProp());

console.log(sortByNumericProp());

buildReport();
// TODO: Llamar a las funciones implementadas en este orden:
// 1. inspectItem(items[0])
// 2. calculateStats("nombreDeTuPropiedadNumerica")
// 3. items.forEach(showWithOptionals)
// 4. printAllProperties(items[0])
// 5. Demostrar updateItem con un ejemplo
// 6. Mostrar elementos disponibles con getAvailable()
// 7. Demostrar findById con un id válido y uno inexistente
// 8. Mostrar addCalculatedProp()
// 9. Mostrar sortByNumericProp()
// 10. buildReport()
