// Esta função conta o número de vogais em uma palavra dada, incluindo vogais com acentos.
function contadorVogais(palavra) {
    // Adicionando a frase toda em maiúsculo
    palavra = palavra.toLowerCase();
    // Define um array com todas as vogais, incluindo vogais com acentos
    var todasVogais = ['a', 'e', 'i', 'o', 'u', 'á', 'é', 'í', 'ó', 'ú', 'à', 'è', 'ì', 'ò', 'ù'];
    var contador = 0;
    // Passando por todas as vogais
    for (var i = 0; i < palavra.length; i++) {
        // Verificando se a palavra tem vogal
        if (todasVogais.indexOf(palavra[i]) !== -1) {
            contador++;
        }
    }
    return contador;
}
// Execução pelo parâmetro
var exemplo = "orion-bootcamp";
var quantVogais = contadorVogais(exemplo);
console.log("A palavra \"".concat(exemplo, "\" possui um total de ").concat(quantVogais, " vogais."));
// Execução pelo index.html
function contadorWeb() {
    var campoForm = document.getElementById("palavra");
    var resultado = document.getElementById("resultado");
    var palavraInserida = campoForm.value;
    var quantVogais = contadorVogais(palavraInserida);
    if (resultado) {
        resultado.textContent = "A palavra \"".concat(palavraInserida, "\" possui um total de ").concat(quantVogais, " vogais.");
    }
}
