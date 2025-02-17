class App {
    #tasques;

    constructor() {
        this.#tasques = [];
    }

    afegirTasca(tasca) {
        this.#tasques.push(tasca);
    }

    completarTasca(id) {
        const tasca = this.#tasques.find(t => t.id === id);
        if (tasca) {
            tasca.completar = true;
        }
    }

    eliminarTasca(id) {
        const index = this.#tasques.findIndex(t => t.id === id);
        if (index !== -1) {
            this.#tasques.splice(index, 1);
            Tasca.totalTasques--;
        }
    }

    modificaNomTasca(id, nom) {
        const tasca = this.#tasques.find(t => t.id === id);
        if (tasca) {
            tasca.nom = nom;
        }
    }

    actualitzarLlista() {
        const output = document.getElementById('output');
        output.innerHTML = '<h2>Lista de Tareas:</h2>';
        this.#tasques.forEach(tasca => {
            output.innerHTML += `<p>${tasca.mostrarInfoTasca()}</p>`;
        });
    }

    mostrarTotalTasques() {
        return Tasca.obtenirTotalTasques();
    }
}
