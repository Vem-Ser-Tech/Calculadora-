const readline = require("readline");

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Função para realizar uma operação aritmética
function calcular(numero1, numero2, operacao) {
  switch (operacao) {
    case "soma":
      return numero1 + numero2;
    case "subtracao":
      return numero1 - numero2;
    case "multiplicacao":
      return numero1 * numero2;
    case "divisao":
      return numero1 / numero2;
    case "raiz quadrada":
      return calcularRaizQuadrada(numero1);
    case "potencia":
      return Math.pow(numero1, numero2);
    case "fatorial":
      return fatorial(numero1);
    case "fracao":
      return calcularFracao(numero1); 
    default:
      return "Operação inválida";
  }
}

// Função principal
function main() {
  rl.question(
    // Solicitar ao usuário que escolha uma operação
    "Escolha a operação (soma, subtracao, multiplicacao, divisao, potencia, fatorial, raiz quadrada, fracao): ",
    (operacao) => {
      if (
        operacao === "soma" ||
        operacao === "subtracao" ||
        operacao === "multiplicacao" ||
        operacao === "divisao" ||
        operacao === "potencia" ||
        operacao === "fatorial" ||
        operacao === "raiz quadrada"||
        operacao === "fracao"
      ) {
        // para opções com um numero
        if (operacao === "fatorial" || operacao === "raiz quadrada") {
          rl.question("Digite um número: ", (numero1) => {
            //Chamar a função calcular e exibir o resultado para fatorial
            let resultado = calcular(parseFloat(numero1), 0, operacao);
            console.log(`O resultado da operação ${operacao} é: ${resultado}`);
          });
        }
        // Solicitar ao usuário que insira dois números
        rl.question("Digite o primeiro número: ", (numero1) => {
          rl.question("Digite o segundo número: ", (numero2) => {
            // Chamar a função calcular e exibir o resultado
            resultado = calcular(
              parseFloat(numero1),
              parseFloat(numero2),
              operacao
            );
            console.log(`O resultado da operação ${operacao} é: ${resultado}`);

            // Fechar a interface de leitura e escrita
            rl.close();
          });
        });
      } else {
        console.log("Escolha uma opção válida");
        main();
      }
    }
  );
}

// função Raiz Quadrada
function calcularRaizQuadrada(numero) {
  if (numero < 0) {
    return "Não e possível calcular raiz quadrada de um número negativo!";
  }
  return Math.sqrt(numero);
}
// Função para operação fatorial
function fatorial(n) {
  // fatorial de 0 e 1 é 1
  if (n === 0 || n === 1) {
    return 1;
  }
  // ex: 3 -> i = 2 -> 3 * 2 -> n = 6 & i-- = 1 -> 6 * 1 -> n = 6
  for (i = n - 1; i >= 1; i--) {
    n *= i;
  }
  return n;
}

//Função para fração
function calcularFracao(numero) {
  const fracao = 1 / (numero);
  return fracao;
}

// Chamar a função principal
main();
