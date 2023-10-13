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

// Função para obter a biografia de uma pessoa pelo ID
function obterBiografiaPorID(id: number, listaPessoas: Pessoa[]): string {
  const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
  return pessoa ? pessoa.biografia : "Pessoa não encontrada.";
}

// Função para obter o nome de uma pessoa pelo ID
function obterNomePorID(id: number): string {
  const pessoa = pessoas.find(p => p.id === id);
  return pessoa ? pessoa.nome : "Pessoa não encontrada.";
}

// Função para remover uma pessoa da lista pelo ID
function removerPessoaPorID(id: number): string {
  let indiceParaRemover = -1;

  // Encontra o índice do objeto especificado pelo ID
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].id === id) {
      indiceParaRemover = i;
      break;
    }
  }

  // Remove o objeto no índice encontrado
  if (indiceParaRemover !== -1) {
    const nomePessoaRemovida = pessoas[indiceParaRemover].nome;
    pessoas.splice(indiceParaRemover, 1);
    return `${nomePessoaRemovida} foi removido(a).`;
  } else {
    return "Pessoa não encontrada.";
  }
}

// Função para alterar o nome ou a biografia de uma pessoa pelo ID
function alterarRegistroPorID(id: number, campo: string, novoTexto: string) {
  let indiceParaAlterar = -1;

  // Encontra o índice do objeto especificado pelo ID
  for (let i = 0; i < pessoas.length; i++) {
    if (pessoas[i].id === id) {
      indiceParaAlterar = i;
      break;
    }
  }

  if (novoTexto === null)
    return "Texto inválido.";

  // Altera o objeto no índice encontrado
  if (indiceParaAlterar !== -1) {
    if (campo === "nome") {
      pessoas[indiceParaAlterar].nome = novoTexto;
    } else if (campo === "biografia") {
      pessoas[indiceParaAlterar].biografia = novoTexto;
    }
  } else {
    return "Pessoa não encontrada.";
  }

  return "Alteração feita com sucesso.";
}

// Função para exibir registros na página HTML
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
  const respDivForm1 =  document.getElementById("respForm1") as HTMLDivElement;
  const respDivForm2 =  document.getElementById("respForm2") as HTMLDivElement;

  let resposta: string;

  // Formulário para consulta de nome, biografia ou remoção
  formConsulta.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formConsulta);
    const inputID: string = formData.get("ID") as string;
    const id: number = parseInt(inputID);

    if (event.submitter == botaoMostrarNome) {
      resposta = obterNomePorID(id);
      console.log(resposta);
      respDivForm1.textContent = resposta;
    } else if (event.submitter == botaoMostrarBiografia) {
      resposta = obterBiografiaPorID(id, pessoas); // Adicione 'pessoas' como segundo argumento
      console.log(resposta);
      respDivForm1.textContent = resposta;
    } else if (event.submitter == botaoRemoverRegistro) {
      resposta = removerPessoaPorID(id);
      console.log(resposta);
      respDivForm1.textContent = resposta;
    }

    // Mantém a lista exibida atualizada
    exibirRegistros(pessoas);
  });

  // Formulário para alteração em um item na lista
  formAlteracao.addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(formAlteracao);
    const inputID: string = formData.get("ID") as string;
    const id: number = parseInt(inputID);

    const campo: string = formData.get("campo") as string;
    const novoConteudo: string = formData.get("novoconteudo") as string;

    resposta = alterarRegistroPorID(id, campo, novoConteudo);
    console.log(resposta);
    respDivForm2.textContent = resposta;

    // Mantém a lista exibida atualizada
    exibirRegistros(pessoas);
  });
});