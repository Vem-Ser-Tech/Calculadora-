import React, { useState } from 'react';
import './Calculadora.css';
import { calcular, calcularRaizQuadrada, calcularFatorial } from './calcular';
import { Box } from "@mui/system";
import Container from "@mui/material/Container";

const Calculadora = () => {
  const [numero1, setNumero1] = useState('');
  const [numero2, setNumero2] = useState('');
  const [operacao, setOperacao] = useState('');
  const [resultado, setResultado] = useState('');

  const handleNumeroChange = (e) => {
    const { name, value } = e.target;
    name === 'numero1' ? setNumero1(value) : setNumero2(value);
  };

  const handleOperacaoChange = (e) => {
    setOperacao(e.target.value);
  };

  const handleCalcular = () => {
    let resultado;
    if (operacao === 'raiz quadrada') {
      resultado = calcularRaizQuadrada(parseFloat(numero1));
    } else if (operacao === 'fatorial') {
      resultado = calcularFatorial(parseFloat(numero1));
    } else {
      resultado = calcular(parseFloat(numero1), parseFloat(numero2), operacao);
    }
    setResultado(`O resultado da operação ${operacao} é: ${resultado}`);
  };

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
        <Box m={12} />
          <input
            type="number"
            name="numero1"
            value={numero1}
            onChange={handleNumeroChange}
            placeholder="Digite o primeiro número"
          />
          {operacao !== 'raiz quadrada' && operacao !== 'fatorial' && (
            <input
              type="number"
              name="numero2"
              value={numero2}
              onChange={handleNumeroChange}
              placeholder="Digite o segundo número"
            />
          )}
          <select onChange={handleOperacaoChange}>
            <option value="soma">Soma</option>
            <option value="subtracao">Subtração</option>
            <option value="multiplicacao">Multiplicação</option>
            <option value="divisao">Divisão</option>
            <option value="raiz quadrada">Raiz Quadrada</option>
            <option value="potencia">Potência</option>
            <option value="fatorial">Fatorial</option>
          </select>
          <button onClick={handleCalcular}>=</button>
          <p className='result'>{resultado}</p>
        </div>
      </Container>
    </div>
  );
};

export default Calculadora;
