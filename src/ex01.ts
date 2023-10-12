/**
 * Conta o número de vogais em uma palavra, incluindo vogais com acento.
 * @param palavra - A palavra para a qual deseja contar as vogais.
 * @returns O número de vogais na palavra.
 */
function contadorVogais(palavra: string): number {
    // Adicionando a frase toda em maiúsculo
    palavra = palavra.toLowerCase();

    // Define um array com todas as vogais, incluindo vogais com acentos
    const todasVogais: string[] = [
      'a', 'á', 'à', 'â', 'ã',
      'e', 'é', 'è', 'ê',
      'i', 'í', 'ì', 'î',
      'o', 'ó', 'ò', 'ô', 'õ',
      'u', 'ú', 'ù', 'û',
  ];


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

/**
 * Exibe o número de vogais em uma palavra na página HTML.
 */
function contadorWeb(): void {
    const campoForm = document.getElementById("palavra") as HTMLInputElement;
    const resultado = document.getElementById("resultado");
    const palavraInserida = campoForm.value;
    const quantVogais = contadorVogais(palavraInserida);
  
    if (resultado) {
        resultado.textContent = `A palavra "${palavraInserida}" possui um total de ${quantVogais} vogais.`;
    }
  }
  


