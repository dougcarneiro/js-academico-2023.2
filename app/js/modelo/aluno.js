class Aluno {
    idade;
    matricula;
    #nome;
    constructor(nome, idade, matricula) {
        this.idade = idade;
        this.matricula = matricula;
        this.#nome = nome;
    }
    get nome() {
        return this.#nome;
    }
    set nome(novoNome) {
        this.#nome = novoNome;
    }
}
