class Tasca {
    #id;
    #nom;
    #completada;
    prioritat;
    tipus;
    static totalTasques = 0;

    constructor(id, nom, prioritat) {
        this.#id = id;
        this.#nom = nom;
        this.#completada = false;
        this.prioritat = prioritat;
        this.tipus = "Normal";
        Tasca.totalTasques++;
    }

    get id() {
        return this.#id;
    }

    set id(nouId) {
        this.#id = nouId;
    }

    get nom() {
        return this.#nom;
    }

    set nom(nouNom) {
        this.#nom = nouNom;
    }

    set completar(valor) {
        this.#completada = valor;
    }

    estaCompletada() {
        return this.#completada;
    }

    mostrarInfoTasca() {
        return `Tasca ${this.#id}: ${this.#nom} (${this.tipus}) - Prioritat: ${this.prioritat} - Completada: ${this.#completada ? 'Sí' : 'No'}`;
    }

    static obtenirTotalTasques() {
        return Tasca.totalTasques;
    }
}
