class AlunoRepositorio {

    private alunos: Array<Aluno>;

    constructor() {
        this.alunos = [];
    }

    inserir(aluno: Aluno): void {
        this.alunos.push(aluno);
    }

    remover(matricula: string): void {
        const indxAlunoARemover = this.alunos.findIndex(aluno => aluno.matricula === matricula);
        if (indxAlunoARemover > -1) {
            this.alunos.splice(indxAlunoARemover, 1);
        }
    }

    listar(): Aluno[] {
        return this.alunos;
    }
}
