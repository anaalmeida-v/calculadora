import React, { useState } from "react";

function Calculadora() {
  const [currentOperand, setCurrentOperand] = useState('');
  const [previousOperand, setPreviousOperand] = useState('');
  const [opration, setOperation] = useState(null);

  const clearButton = () => {
    setCurrentOperand('');
    setPreviousOperand('');
    setOperation(null);
  };

  const deleteButton = () => {
    setCurrentOperand(currentOperand.slice(0, -1));
  };      

  const appendNumber = (number) => {
    if (number === "." && currentOperand.includes('.')) return;

    setCurrentOperand(currentOperand + number);
  };

  const chooseOperation = (selectedOperation) => {
    if (currentOperand == '') return;

    setOperation(selectedOperation);
    setPreviousOperand(currentOperand);
    setCurrentOperand('');
  };

  return (
    <div className="calculadora">
      <div className="visor">
        <div className="operando-anterior">{previousOperand}</div>
        <div className="operando-atual">{currentOperand}</div>
      </div>

      <div className="teclado">
        <button className="btn-control span-two" onClick={clearButton}>AC</button>
        <button className="btn-control" onClick={deleteButton}>DEL</button>
        <button className="btn-operator" onClick={() => chooseOperation('/')}>/</button>

        <button className="btn-number" onClick={() => appendNumber('7')}>7</button>
        <button className="btn-number" onClick={() => appendNumber('8')}>8</button>
        <button className="btn-number" onClick={() => appendNumber('9')}>9</button>
        <button className="btn-operator" onClick={() => chooseOperation('*')}>*</button>

        <button className="btn-number" onClick={() => appendNumber('4')}>4</button>
        <button className="btn-number" onClick={() => appendNumber('5')}>5</button>
        <button className="btn-number" onClick={() => appendNumber('6')}>6</button>
        <button className="btn-operator" onClick={() => chooseOperation('-')}>-</button>

        <button className="btn-number" onClick={() => appendNumber('1')}>1</button>
        <button className="btn-number" onClick={() => appendNumber('2')}>2</button>
        <button className="btn-number" onClick={() => appendNumber('3')}>3</button>
        <button className="btn-operator" onClick={() => chooseOperation('+')}>+</button>

        <button className="btn-number" onClick={() => appendNumber('.')}>.</button>
        <button className="btn-number" onClick={() => appendNumber('0')}>0</button>
        <button className="btn-control span-two">=</button>
      </div>
    </div>
  )
}

export default Calculadora