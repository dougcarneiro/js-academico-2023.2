class AlunoService {

    private repositorio: AlunoRepositorio;

    constructor() {
        this.repositorio = new AlunoRepositorio();
    }

    inserir(nome: string, idade: number, matricula: string) {
        const alunoPesquisado = this.pesquisarPorMatricula(matricula);
        if (alunoPesquisado.length > 0) {
            throw new Error('Aluno já cadastrado!');
        }
        const alunoNovo = new Aluno(nome, idade, matricula);
        this.repositorio.inserir(alunoNovo);
        return alunoNovo;
    }

    pesquisarPorMatricula(matricula: string): Aluno[] {
        return this.repositorio.listar().filter(
            aluno => aluno.matricula === matricula);
    }

    remover(matricula: string): void {
        this.repositorio.remover(matricula);
    }

    listarMenoresIdade(): Aluno[] {
        return this.repositorio.listar().filter(aluno => aluno.idade < 18);
    }
}
