class Urgent extends Tasca {
    #recordatori;

    constructor(id, nom, prioritat, recordatori) {
        super(id, nom, prioritat);
        this.#recordatori = recordatori;
        this.tipus = "Urgent";
    }

    mostrarInfoTasca() {
        return `${super.mostrarInfoTasca()} - Recordatori: ${this.#recordatori}`;
    }
}
