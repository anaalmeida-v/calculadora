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

  };

  const appendnumber = (number) => {
    if (number === "." && currentOperand.includes('.')) return;

    setCurrentOperand(currentOperand + number);
  }

  return (
    <div className="calculadora">
      <div className="visor">
        <div className="operando-anterior">{previousOperand}</div>
        <div className="operando-atual">{currentOperand}</div>
      </div>

      <div className="teclado">
        <button className="btn-control span-two" onClick={clearButton}>AC</button>
        <button className="btn-control" onClick={deleteButton}>DEL</button>
        <button className="btn-operator">/</button>

        <button className="btn-number" onClick={() => appendnumber('7')}>7</button>
        <button className="btn-number" onClick={() => appendnumber('8')}>8</button>
        <button className="btn-number" onClick={() => appendnumber('9')}>9</button>
        <button className="btn-operator">*</button>

        <button className="btn-number" onClick={() => appendnumber('4')}>4</button>
        <button className="btn-number" onClick={() => appendnumber('5')}>5</button>
        <button className="btn-number" onClick={() => appendnumber('6')}>6</button>
        <button className="btn-operator">-</button>

        <button className="btn-number" onClick={() => appendnumber('1')}>1</button>
        <button className="btn-number" onClick={() => appendnumber('2')}>2</button>
        <button className="btn-number" onClick={() => appendnumber('3')}>3</button>
        <button className="btn-operator">+</button>

        <button className="btn-number" onClick={() => appendnumber('.')}>.</button>
        <button className="btn-number" onClick={() => appendnumber('0')}>0</button>
        <button className="btn-control span-two">=</button>
      </div>
    </div>
  )
}

export default Calculadora