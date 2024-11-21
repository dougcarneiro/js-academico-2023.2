class DisciplinaRepositorio {

    constructor() {
        this.disciplinas = [];
    }

    inserir(disciplina) {
        this.disciplinas.push(disciplina);
    }

    pesquisar(codigo) {
        return this.disciplinas.findIndex(disc => {
            disc.codigo === codigo
        });
    }

    atualizar(disciplina) {
        const indxDisciplinaAAtualizar = this.disciplinas.findIndex(disc => {
            disc.codigo === disciplina.codigo;
        })
        this.disciplinas.indexOf(indxDisciplinaAAtualizar).nome = nome;
    }

    remover(codigo) {
        const indxDisciplinaARemover = this.disciplinas.findIndex(disciplina => disciplina.codigo === codigo);
        if (indxDisciplinaARemover > -1) {
            this.disciplinas.splice(indxDisciplinaARemover, 1);
        }
    }

    listar() {
        return this.disciplinas;
    }
}
