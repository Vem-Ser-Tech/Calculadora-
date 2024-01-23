const readline = require('readline');

// Cria uma interface de leitura e escrita
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Função para realizar uma operação aritmética
function calcular(numero1, numero2, operacao) {
    switch (operacao) {
        case 'soma':
            return numero1 + numero2;
        case 'subtracao':
            return numero1 - numero2;
        case 'multiplicacao':
            return numero1 * numero2;
        case 'divisao':
            return numero1 / numero2;  
        case 'raiz quadrada':
            return calcularRaizQuadrada(numero1)
        default:
            return 'Operação inválida';
    }
}
 // função Raiz Quadrada
function calcularRaizQuadrada(numero) {
   if (numero < 0){
    return 'Não e possível calcular raiz quadrada de um número negativo!'
   }
   return Math.sqrt(numero);
}

// Função principal
function main() {
    // Solicitar ao usuário que insira dois números
    rl.question('Digite o primeiro número: ', (numero1) => {
        rl.question('Digite o segundo número: ', (numero2) => {
            // Solicitar ao usuário que escolha uma operação
            rl.question('Escolha a operação (soma, subtracao, multiplicacao, divisao, raiz quadrada): ', (operacao) => {
                // Chamar a função calcular e exibir o resultado
                let resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
                console.log(`O resultado da operação ${operacao} é: ${resultado}`);

                // Fechar a interface de leitura e escrita
                rl.close();
            });
        });
    });
}

// Chamar a função principal
main();
