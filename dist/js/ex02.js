"use strict";
let pessoas = [
    { id: 1, nome: "Ada Lovelace", biografia: "Ada Lovelace, foi uma matemática e escritora inglesa reconhecida por ter escrito o primeiro algoritmo para ser processado por uma máquina" },
    { id: 2, nome: "Alan Turing", biografia: "Alan Turing foi um matemático, cientista da computação, lógico, criptoanalista, filósofo e biólogo teórico britânico, ele é amplamente considerado o pai da ciência da computação teórica e da inteligência artificial" },
    { id: 3, nome: "Nikola Tesla", biografia: "Nikola Tesla foi um inventor, engenheiro eletrotécnico e engenheiro mecânico sérvio, mais conhecido por suas contribuições ao projeto do moderno sistema de fornecimento de eletricidade em corrente alternada." },
    { id: 4, nome: "Nicolau Copérnico", biografia: "Nicolau Copérnico foi um astrônomo e matemático polonês que desenvolveu a teoria heliocêntrica do Sistema Solar." }
];
const obterBiografiaPorIDFuncional = (id, listaPessoas) => {
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.biografia : "Pessoa não encontrada.";
};
function obterBiografiaPorIDImperativo(id) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id === id) {
            return pessoas[i].biografia;
        }
    }
    return "Pessoa não encontrada.";
}
const obterNomePorIDFuncional = (id, listaPessoas) => {
    const pessoa = listaPessoas.find(pessoa => pessoa.id === id);
    return pessoa ? pessoa.nome : "Pessoa não encontrada.";
};
function obterNomePorIDImperativo(id) {
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id === id) {
            return pessoas[i].nome;
        }
    }
    return "Pessoa não encontrada.";
}
const removerPessoaPorIDFuncional = (id, listaPessoas) => {
    const pessoaEncontrada = listaPessoas.find(pessoa => pessoa.id === id);
    if (pessoaEncontrada) {
        const nomePessoaRemovida = pessoaEncontrada.nome;
        const novaLista = listaPessoas.filter(pessoa => pessoa.id !== id);
        listaPessoas.length = 0;
        novaLista.forEach(pessoa => listaPessoas.push(pessoa));
        exibirRegistros(listaPessoas);
        return `${nomePessoaRemovida} foi removido(a).`;
    }
    else {
        return "Pessoa não encontrada.";
    }
};
function removerPessoaPorIDImperativo(id) {
    let indiceParaRemover = -1;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id === id) {
            indiceParaRemover = i;
            break;
        }
    }
    if (indiceParaRemover !== -1) {
        const nomePessoaRemovida = pessoas[indiceParaRemover].nome;
        pessoas.splice(indiceParaRemover, 1);
        exibirRegistros(pessoas);
        return `${nomePessoaRemovida} foi removido(a).`;
    }
    else {
        return "Pessoa não encontrada.";
    }
}
const alterarRegistroPorIDFuncional = (id, campo, novoTexto, listaPessoas) => {
    if (novoTexto === null) {
        return "Texto inválido.";
    }
    const pessoaEncontrada = listaPessoas.find(pessoa => pessoa.id === id);
    if (pessoaEncontrada) {
        const pessoaModificada = { ...pessoaEncontrada };
        if (campo === "nome") {
            pessoaModificada.nome = novoTexto;
        }
        else if (campo === "biografia") {
            pessoaModificada.biografia = novoTexto;
        }
        const indicePessoa = listaPessoas.findIndex(pessoa => pessoa.id === id);
        listaPessoas[indicePessoa] = pessoaModificada;
        exibirRegistros(listaPessoas);
        return "Alteração feita com sucesso.";
    }
    else {
        return "Pessoa não encontrada.";
    }
};
function alterarRegistroPorIDImperativo(id, campo, novoTexto) {
    let indiceParaAlterar = -1;
    for (let i = 0; i < pessoas.length; i++) {
        if (pessoas[i].id === id) {
            indiceParaAlterar = i;
            break;
        }
    }
    if (novoTexto === null) {
        return "Texto inválido.";
    }
    if (indiceParaAlterar !== -1) {
        if (campo === "nome") {
            pessoas[indiceParaAlterar].nome = novoTexto;
        }
        else if (campo === "biografia") {
            pessoas[indiceParaAlterar].biografia = novoTexto;
        }
        exibirRegistros(pessoas);
        return "Alteração feita com sucesso.";
    }
    else {
        return "Pessoa não encontrada.";
    }
}
function exibirRegistros(lista) {
    const listaExibicao = document.getElementById("lista-pessoas");
    if (listaExibicao) {
        listaExibicao.innerHTML = "";
        lista.forEach((item) => {
            const li = document.createElement("li");
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
            li.appendChild(divElement);
            li.appendChild(document.createElement("br"));
            listaExibicao.appendChild(li);
        });
    }
}
document.addEventListener("DOMContentLoaded", function () {
    exibirRegistros(pessoas);
    const formConsulta = document.getElementById("formEnviarID");
    const formAlteracao = document.getElementById("formAlteracao");
    const botaoMostrarNome = document.getElementById("mostrarNome");
    const botaoMostrarBiografia = document.getElementById("mostrarBiografia");
    const botaoRemoverRegistro = document.getElementById("removerRegistro");
    const respDivForm1 = document.getElementById("respForm1");
    const respDivForm2 = document.getElementById("respForm2");
    let resposta;
    formConsulta.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(formConsulta);
        const inputID = formData.get("ID");
        const id = parseInt(inputID);
        if (event.submitter == botaoMostrarNome) {
            resposta = obterNomePorIDFuncional(id, pessoas);
            console.log(resposta);
            respDivForm1.textContent = resposta;
        }
        else if (event.submitter == botaoMostrarBiografia) {
            resposta = obterBiografiaPorIDFuncional(id, pessoas);
            console.log(resposta);
            respDivForm1.textContent = resposta;
        }
        else if (event.submitter == botaoRemoverRegistro) {
            resposta = removerPessoaPorIDFuncional(id, pessoas);
            console.log(resposta);
            respDivForm1.textContent = resposta;
        }
        exibirRegistros(pessoas);
    });
    formAlteracao.addEventListener('submit', function (event) {
        event.preventDefault();
        const formData = new FormData(formAlteracao);
        const inputID = formData.get("ID");
        const id = parseInt(inputID);
        const campo = formData.get("campo");
        const novoConteudo = formData.get("novoconteudo");
        resposta = alterarRegistroPorIDFuncional(id, campo, novoConteudo, pessoas);
        console.log(resposta);
        respDivForm2.textContent = resposta;
        exibirRegistros(pessoas);
    });
});
