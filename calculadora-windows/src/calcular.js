// Função para calcular a raiz quadrada
function calcularRaizQuadrada(numero) {
  if (numero < 0) {
    return "Não é possível calcular raiz quadrada de um número negativo!";
  }
  return Math.sqrt(numero);
}

// Função para calcular o fatorial
function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= numero; i++) {
    resultado *= i;
  }
  return resultado;
}

// Função para realizar uma operação aritmética
function calcular(numero1, numero2, operador) {
  switch (operador) {
    case '+':
      return numero1 + numero2;
    case '-':
      return numero1 - numero2;
    case '*':
      return numero1 * numero2;
    case '/':
      return numero1 / numero2;
    case 'raiz quadrada':
      return calcularRaizQuadrada(numero1);
    case 'potencia':
      return Math.pow(numero1, numero2);
    case 'fatorial':
      return calcularFatorial(numero1);
    default:
      return "Operação inválida";
  }
}

module.exports = {
  calcular,
  calcularRaizQuadrada,
  calcularFatorial,
};