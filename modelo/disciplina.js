class Disciplina {

    constructor(codigo, nome) {
        this._codigo = codigo;
        this._nome = nome;
        this._alunos = [];
    }

    get codigo() {
        return this._codigo;
    }

    set codigo(novoCodigo) {
        this._codigo = novoCodigo;
    }

    get nome() {
        return this._nome;
    }

    set nome(novoNome) {
        this._nome = novoNome;
    }

    get alunos() {
        return this._alunos;
    }

    set alunos(novoAlunos) {
        this._alunos = novoAlunos;
    }

    adicionarAluno(novoAluno) {
        this._alunos.push(novoAluno);
    }

    removerAluno(matricula) {
        const indxAlunoARemover = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (indxAlunoARemover > -1) {
            this._alunos.splice(indxAlunoARemover, 1);
        }
    }
}
