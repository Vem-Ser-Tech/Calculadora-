import React, { useState } from 'react';
import './Calculadora.css';
import { Box } from "@mui/system";
import Container from "@mui/material/Container";

const Calculadora = () => {
  const [num, setNum] = useState('0');
  const [history, setHistory] = useState('');
  const [operator, setOperator] = useState('');

  function inputNum(e) {
    const input = e.target.value;
    setNum((prevNum) => (prevNum === '0' || operator) ? input : prevNum + input);
    setOperator('');
  }

  function clear() {
    setNum('0');
    setHistory('');
    setOperator('');
  }

  function percentage() {
    const result = parseFloat(num) / 100;
    setNum(String(result));
    updateHistory(result);
  }

  function changeSign() {
    const result = -parseFloat(num);
    setNum(String(result));
    updateHistory(result);
  }

  function operatorHandler(operatorInput) {
    if (operatorInput === '=') {
      calculate();
    } else {
      setOperator(operatorInput);
      setHistory(num + operatorInput);
    }
  }

  function calculate() {
    const result = evaluateExpression(history + num);
    setNum(String(result));
    setHistory('');
    setOperator('');
  }

  function updateHistory(result) {
    setHistory(history + operator + num + '=' + result);
  }

  function evaluateExpression(expression) {
    return eval(expression);
  }

  return (
    <div>
      <Box m={5} />
      <Container maxWidth="xs">
        <div className="wrapper">
          <Box m={12}></Box>
          <h1 className="result" name="resultado">{num}</h1>
          <div className="history">{history}</div>

          <button onClick={clear}>AC</button>
          <button onClick={changeSign}>+/-</button>
          <button onClick={percentage}>%</button>

          <button className="orange" onClick={() => operatorHandler('/')}>/</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '7' } })}>7</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '8' } })}>8</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '9' } })}>9</button>

          <button className="orange" onClick={() => operatorHandler('*')}>X</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '4' } })}>4</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '5' } })}>5</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '6' } })}>6</button>

          <button className="orange" onClick={() => operatorHandler('-')}>-</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '1' } })}>1</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '2' } })}>2</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '3' } })}>3</button>

          <button className="orange" onClick={() => operatorHandler('+')}>+</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '0' } })}>0</button>
          <button className="gray" onClick={() => inputNum({ target: { value: '.' } })}>,</button>
          <button className="gray" style={{ visibility: "hidden" }}>,</button>

          <button className="orange" onClick={() => operatorHandler('=')}>=</button>
        </div>
      </Container>
    </div>
  );
};

export default Calculadora;
