// Crear instancia de APP
const app = new App();

// Mostrar lista inicial
console.log("Estado inicial:");
app.actualitzarLlista();
console.log("Total de tareas:", app.mostrarTotalTasques());

// Añadir 4 tareas: 2 normales, 2 urgentes y 1 crítica
const tascaNormal1 = new Tasca(1, "Hacer compra", 1);
const tascaNormal2 = new Tasca(2, "Limpiar casa", 2);
const tascaUrgent1 = new Urgent(3, "Llamar médico", 3, "Llamar antes de las 15:00");
const tascaUrgent2 = new Urgent(4, "Pagar factura", 3, "Vence hoy");
const tascaCritica = new Critica(5, "Entregar proyecto", 4, "2025-02-20", "Proyecto final de curso");

app.afegirTasca(tascaNormal1);
app.afegirTasca(tascaNormal2);
app.afegirTasca(tascaUrgent1);
app.afegirTasca(tascaUrgent2);
app.afegirTasca(tascaCritica);

console.log("\nDespués de añadir tareas:");
app.actualitzarLlista();
console.log("Total de tareas:", app.mostrarTotalTasques());

// Modificar una tarea
app.modificaNomTasca(1, "Hacer compra semanal");

// Completar dos tareas
app.completarTasca(2);
app.completarTasca(3);

// Añadir una nueva tarea
const tascaNova = new Tasca(6, "Revisar correo", 1);
app.afegirTasca(tascaNova);

console.log("\nDespués de modificaciones:");
app.actualitzarLlista();
console.log("Total de tareas:", app.mostrarTotalTasques());

// Eliminar dos tareas
app.eliminarTasca(1);
app.eliminarTasca(4);

console.log("\nDespués de eliminar tareas:");
app.actualitzarLlista();
console.log("Total de tareas:", app.mostrarTotalTasques());
