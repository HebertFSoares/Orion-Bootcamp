// Definição da interface Pessoa
interface Pessoa {
  id: number;
  nome: string;
  biografia: string;
}

// Lista de pessoas com exemplos
let pessoas: Pessoa[] = [
  { id: 1, nome: "Ada Lovelace", biografia: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
  { id: 2, nome: "Alan Turing", biografia: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
  { id: 3, nome: "Nikola Tesla", biografia: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
  { id: 4, nome: "Nicolau Copérnico", biografia: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
/**
 * Retorna a biografia de uma pessoa com base no ID.
 * @param id - O ID da pessoa.
 * @param listaPessoas - A lista de pessoas para procurar.
 * @returns A biografia da pessoa ou uma mensagem de erro se a pessoa não for encontrada.
 */
const obterBiografiaPorIDFuncional = (id: number, listaPessoas: Pessoa[]): string => {
  const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
  return pessoa ? pessoa.biografia : "Pessoa não encontrada.";
};

/**
 * Retorna a biografia de uma pessoa pelo ID no paradigma imperativo.
 * @param id - O ID da pessoa.
 * @returns A biografia da pessoa ou uma mensagem de erro se a pessoa não for encontrada.
 */
function obterBiografiaPorIDImperativo(id: number): string {
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].id === id) {
      return pessoas[i].biografia;
    }
  }
  return "Pessoa não encontrada.";
}


/**
 * Retorna o nome de uma pessoa pelo ID no paradigma funcional.
 * @param id - O ID da pessoa.
 * @param listaPessoas - A lista de pessoas.
 * @returns O nome da pessoa ou uma mensagem de erro se a pessoa não for encontrada.
 */
const obterNomePorIDFuncional = (id: number, listaPessoas: Pessoa[]): string => {
  const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
  return pessoa ? pessoa.nome : "Pessoa não encontrada.";
};

/**
 * Retorna o nome de uma pessoa pelo ID no paradigma imperativo.
 * @param id - O ID da pessoa.
 * @param listaPessoas - A lista de pessoas.
 * @returns O nome da pessoa ou uma mensagem de erro se a pessoa não for encontrada.
 */
function obterNomePorIDImperativo(id: number, listaPessoas: Pessoa[]): string {
  for (let i = 0; i < listaPessoas.length; i++) {
    if (listaPessoas[i].id === id) {
      return listaPessoas[i].nome;
    }
  }
  return "Pessoa não encontrada.";
}

/**
 * Remove uma pessoa da lista pelo ID no paradigma funcional.
 * @param id - O ID da pessoa a ser removida.
 * @param listaPessoas - A lista de pessoas.
 * @returns Uma mensagem de confirmação se a pessoa foi removida com sucesso ou uma mensagem de erro se a pessoa não for encontrada.
 */
const removerPessoaPorIDFuncional = (id: number, listaPessoas: Pessoa[]): string => {
  const pessoaEncontrada = listaPessoas.find(pessoa => pessoa.id === id);

  if (pessoaEncontrada) {
    const nomePessoaRemovida = pessoaEncontrada.nome;
    const novaLista = listaPessoas.filter(pessoa => pessoa.id !== id);
    listaPessoas.length = 0;
    novaLista.forEach(pessoa => listaPessoas.push(pessoa));
    exibirRegistros(listaPessoas); // Atualiza a lista no HTML
    return `${nomePessoaRemovida} foi removido(a).`;
  } else {
    return "Pessoa não encontrada.";
  }
};

/**
 * Remove uma pessoa da lista pelo ID no paradigma imperativo.
 * @param id - O ID da pessoa a ser removida.
 * @param listaPessoas - A lista de pessoas.
 * @returns Uma mensagem de confirmação se a pessoa foi removida com sucesso ou uma mensagem de erro se a pessoa não for encontrada.
 */
function removerPessoaPorIDImperativo(id: number, listaPessoas: Pessoa[]): string {
  let indiceParaRemover = -1;

  for (let i = 0; i < listaPessoas.length; i++) {
    if (listaPessoas[i].id === id) {
      indiceParaRemover = i;
      break;
    }
  }

  if (indiceParaRemover !== -1) {
    const nomePessoaRemovida = listaPessoas[indiceParaRemover].nome;
    listaPessoas.splice(indiceParaRemover, 1);
    exibirRegistros(listaPessoas); // Atualiza a lista no HTML
    return `${nomePessoaRemovida} foi removido(a).`;
  } else {
    return "Pessoa não encontrada.";
  }
}

/**
 * Altera o nome ou a biografia de uma pessoa pelo ID no paradigma funcional.
 * @param id - O ID da pessoa.
 * @param campo - O campo a ser alterado, 'nome' ou 'biografia'.
 * @param novoTexto - O novo texto a ser atribuído.
 * @param listaPessoas - A lista de pessoas.
 * @returns Uma mensagem de confirmação se a alteração foi feita com sucesso ou uma mensagem de erro se a pessoa não for encontrada ou o texto for inválido.
 */
const alterarRegistroPorIDFuncional = (id: number, campo: string, novoTexto: string, listaPessoas: Pessoa[]): string => {
  if (novoTexto === null) {
    return "Texto inválido.";
  }

  const pessoaEncontrada = listaPessoas.find(pessoa => pessoa.id === id);

  if (pessoaEncontrada) {
    const pessoaModificada = { ...pessoaEncontrada };

    if (campo === "nome") {
      pessoaModificada.nome = novoTexto;
    } else if (campo === "biografia") {
      pessoaModificada.biografia = novoTexto;
    }

    const indicePessoa = listaPessoas.findIndex(pessoa => pessoa.id === id);
    listaPessoas[indicePessoa] = pessoaModificada;
    exibirRegistros(listaPessoas); // Atualiza a lista no HTML
    return "Alteração feita com sucesso.";
  } else {
    return "Pessoa não encontrada.";
  }
};

/**
 * Altera o nome ou a biografia de uma pessoa pelo ID no paradigma imperativo.
 * @param id - O ID da pessoa.
 * @param campo - O campo a ser alterado, 'nome' ou 'biografia'.
 * @param novoTexto - O novo texto a ser atribuído.
 * @param listaPessoas - A lista de pessoas.
 * @returns Uma mensagem de confirmação se a alteração foi feita com sucesso ou uma mensagem de erro se a pessoa não for encontrada ou o texto for inválido.
 */
function alterarRegistroPorIDImperativo(id: number, campo: string, novoTexto: string, listaPessoas: Pessoa[]): string {
  let indiceParaAlterar = -1;

  for (let i = 0; i < listaPessoas.length; i++) {
    if (listaPessoas[i].id === id) {
      indiceParaAlterar = i;
      break;
    }
  }

  if (novoTexto === null) {
    return "Texto inválido.";
  }

  if (indiceParaAlterar !== -1) {
    if (campo === "nome") {
      listaPessoas[indiceParaAlterar].nome = novoTexto;
    } else if (campo === "biografia") {
      listaPessoas[indiceParaAlterar].biografia = novoTexto;
    }

    exibirRegistros(listaPessoas); // Atualiza a lista no HTML
    return "Alteração feita com sucesso.";
  } else {
    return "Pessoa não encontrada.";
  }
}

/**
 * Exibe registros na página HTML.
 * @param lista - A lista de pessoas a ser exibida.
 */
function exibirRegistros(lista: Pessoa[]) {
  const listaExibicao = document.getElementById("lista-pessoas") as HTMLUListElement;

  if (listaExibicao) {
    listaExibicao.innerHTML = "";
    lista.forEach((item) => {
      const li = document.createElement("li");

      // Formata os objetos Pessoa da lista para serem exibidos na página HTML
      const idElement = document.createElement("strong");
      idElement.textContent = item.id.toString();

      const nomeElement = document.createElement("strong");
      nomeElement.textContent = item.nome;

      const biografiaElement = document.createElement("span");
      biografiaElement.textContent = item.biografia;

      const divElement = document.createElement("div");

      divElement.appendChild(idElement);
      divElement.appendChild(document.createElement("br"));
      divElement.appendChild(nomeElement);
      divElement.appendChild(document.createElement("br"));
      divElement.appendChild(biografiaElement);

      // Conclui a criação de um item da lista exibida
      li.appendChild(divElement);
      li.appendChild(document.createElement("br"));

      listaExibicao.appendChild(li);
    });
  }
}

// Aguarda o carregamento completo da página
document.addEventListener("DOMContentLoaded", function () {
  // Exibe os registros iniciais na página
  exibirRegistros(pessoas);

  // Obtém elementos de formulários e botões
  const formConsulta = document.getElementById("formEnviarID") as HTMLFormElement;
  const formAlteracao = document.getElementById("formAlteracao") as HTMLFormElement;

  const botaoMostrarNome = document.getElementById("mostrarNome") as HTMLButtonElement;
  const botaoMostrarBiografia = document.getElementById("mostrarBiografia") as HTMLButtonElement;
  const botaoRemoverRegistro = document.getElementById("removerRegistro") as HTMLButtonElement;

  // Obtém elementos de resposta
  const respDivForm1 = document.getElementById("respForm1") as HTMLDivElement;
  const respDivForm2 = document.getElementById("respForm2") as HTMLDivElement;

  let resposta: string;

  // Formulário para consulta de nome, biografia ou remoção
  formConsulta.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(formConsulta);
    const inputID: string = formData.get("ID") as string;
    const id: number = parseInt(inputID);

    if (event.submitter == botaoMostrarNome) {
      resposta = obterNomePorIDFuncional(id, pessoas);
      console.log(resposta);
      respDivForm1.textContent = resposta;
    } else if (event.submitter == botaoMostrarBiografia) {
      resposta = obterBiografiaPorIDFuncional(id, pessoas);
      console.log(resposta);
      respDivForm1.textContent = resposta;
    } else if (event.submitter == botaoRemoverRegistro) {
      resposta = removerPessoaPorIDFuncional(id, pessoas);
      console.log(resposta);
      respDivForm1.textContent = resposta;
    }

    // Mantém a lista exibida atualizada
    exibirRegistros(pessoas);
  });

  // Formulário para alteração em um item na lista
  formAlteracao.addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(formAlteracao);
    const inputID: string = formData.get("ID") as string;
    const id: number = parseInt(inputID);

    const campo: string = formData.get("campo") as string;
    const novoConteudo: string = formData.get("novoconteudo") as string;

    resposta = alterarRegistroPorIDFuncional(id, campo, novoConteudo, pessoas);
    console.log(resposta);
    respDivForm2.textContent = resposta;

    // Mantém a lista exibida atualizada
    exibirRegistros(pessoas);
  });
});
