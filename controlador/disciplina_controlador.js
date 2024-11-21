class DisciplinaControlador {

    constructor() {
        this.servico = new DisciplinaService();
    }

    inserir() {
        const codigoElemento = document.querySelector("#codigo");
        const nomeElemento = document.querySelector("#nome");
        try {
            const disciplinaInserida = this.servico.inserir(codigoElemento.value, nomeElemento.value);
            const listaDisciplinasElemento = document.querySelector("#listaDisciplinas");
            this.inserirDisciplinaNoHtml(disciplinaInserida, listaDisciplinasElemento);
        } catch (error) {
            alert(error);
            console.error(error);
        }
    }

    inserirDisciplinaNoHtml(disciplina, elementoDestino) {
        const disciplinaElemento = document.createElement("li");
        disciplinaElemento.textContent = `Código: ${disciplina.codigo} - Nome: ${disciplina.nome}`;
        elementoDestino.appendChild(disciplinaElemento);
    }

    inserirAlunoNaDisciplina(codigoDisciplina, aluno) {
        try {
            this.servico.inserirAluno(codigoDisciplina, aluno);
        } catch (error) {
            alert(error.message);
        }
    }
}
