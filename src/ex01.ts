function contadorVogais(palavra: string): number {
    // Adicionando a frase toda em maiúsculo
    palavra = palavra.toLowerCase();

    // criando vetor com todas vogais
    const todasVogais: string[] = ['a', 'e', 'i', 'o', 'u'];

    let contador: number = 0;

    // Passando por todas as vogais
    for (let i: number = 0; i < palavra.length; i++) {
      // Verificando se a palavra tem vogal
      if (todasVogais.indexOf(palavra[i]) !== -1) {
        contador++;
      }
    }
  
    return contador;

    
  }
  
// Execução pelo parâmetro
const exemplo: string = "orion-bootcamp";
const quantVogais: number = contadorVogais(exemplo);
console.log(`A palavra "${exemplo}" possui um total de ${quantVogais} vogais.`);

// Execução pelo index.html
function contadorWeb() {
    const campoForm = document.getElementById("palavra") as HTMLInputElement;
    const resultado = document.getElementById("resultado");
    const palavraInserida = campoForm.value;
    const quantVogais = contadorVogais(palavraInserida);
  
    if (resultado) {
        resultado.textContent = `A palavra "${palavraInserida}" possui um total de ${quantVogais} vogais.`;
    }
  }
  


