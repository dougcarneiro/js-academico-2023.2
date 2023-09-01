class AlunoControlador {

    private servico: AlunoService;
    private nomeElemento: HTMLInputElement;
    private idadeElemento: HTMLInputElement;
    private matriculaElemento: HTMLInputElement;
    private botaoCadastrarAtualizar: HTMLButtonElement;

    constructor() {
        this.servico = new AlunoService();
        this.nomeElemento = document.querySelector("#nome");
        this.idadeElemento = document.querySelector("#idade");
        this.matriculaElemento = document.querySelector("#matricula");
        this.botaoCadastrarAtualizar = document.querySelector("#botaoCadastrarAtualizar");
    }

    inserir() {
        const alunoInserido = this.servico.inserir(this.nomeElemento.value, Number(this.idadeElemento.value),
            this.matriculaElemento.value);
        const listaAlunosElemento = document.querySelector("#listaAlunos");
        if (alunoInserido) {
            this.inserirAlunoNoHtml(alunoInserido, listaAlunosElemento);
        }
    }

    inserirAlunoNoHtml(aluno: Aluno, elementoDestino: Element) {
        const alunoElemento = document.createElement("li");
        alunoElemento.textContent = `Nome: ${aluno.nome} - Idade: ${aluno.idade}  `;
        this.inserirBotaoRemover(alunoElemento, aluno.matricula);
        this.inserirBotaoEdicao(alunoElemento, aluno);
        elementoDestino.appendChild(alunoElemento);
    }

    inserirBotaoRemover(alunoElemento: Element, matricula: string) {
        //criar botao remocao
        const botaoRemover = document.createElement('button');
        botaoRemover.textContent = 'X';
        botaoRemover.addEventListener('click', () => {
            this.remover(matricula);
            alunoElemento.remove();
        });
        alunoElemento.appendChild(botaoRemover);
    }

    listarAlunosMenoresIdade() {
        const listaAlunosMenoresElemento = document.querySelector('#listaAlunosMenores');
        const alunosMenores = this.servico.listarMenoresIdade();
        alunosMenores.forEach(menor => this.inserirAlunoNoHtml(menor, listaAlunosMenoresElemento));
    }

    remover(matricula: string) {
        this.servico.remover(matricula);
    }

    inserirBotaoEdicao(alunoElemento: Element, aluno: Aluno) {
        const botaoEdicao = document.createElement('button');
        botaoEdicao.textContent = 'E';
        botaoEdicao.addEventListener('click', () => {
            this.nomeElemento.value = aluno.nome;
            this.idadeElemento.value = aluno.idade.toString();
            this.matriculaElemento.value = aluno.matricula;
            this.botaoCadastrarAtualizar.textContent = 'Atualizar';
        });
        alunoElemento.appendChild(botaoEdicao);
    }
}
