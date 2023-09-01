class Aluno {

    #nome: string;

    constructor(nome: string, public idade: number, public matricula: string) {
        this.#nome = nome;
    }

    get nome() {
        return this.#nome;
    }

    set nome(novoNome: string) {
        this.#nome = novoNome;
    }
}
