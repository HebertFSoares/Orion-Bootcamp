"use strict";
function contadorVogais(palavra) {
    palavra = palavra.toLowerCase();
    const todasVogais = ['a', 'e', 'i', 'o', 'u'];
    let contador = 0;
    for (let i = 0; i < palavra.length; i++) {
        if (todasVogais.indexOf(palavra[i]) !== -1) {
            contador++;
        }
    }
    return contador;
}
const exemplo = "orion-bootcamp";
const quantVogais = contadorVogais(exemplo);
console.log(`A palavra "${exemplo}" possui um total de ${quantVogais} vogais.`);
function contadorWeb() {
    const campoForm = document.getElementById("palavra");
    const resultado = document.getElementById("resultado");
    const palavraInserida = campoForm.value;
    const quantVogais = contadorVogais(palavraInserida);
    if (resultado) {
        resultado.textContent = `A palavra "${palavraInserida}" possui um total de ${quantVogais} vogais.`;
    }
}
