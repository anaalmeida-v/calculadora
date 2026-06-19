import { useState } from 'react'

function Calculadora() {
  const [currentOperand, setCurrentOperand] = useState('0')
  const [previousOperand, setPreviousOperand] = useState('')
  const [operation, setOperation] = useState(undefined)

  function appendNumber(number) {
    if (number === '.') {
      if (currentOperand.includes('.')) return
      setCurrentOperand(currentOperand + '.')
      return
    }

    if (currentOperand === '0') {
      setCurrentOperand(number)
    } else {
      setCurrentOperand(currentOperand + number)
    }
  }

  function clear() {
    setCurrentOperand('0')
    setPreviousOperand('')
    setOperation(undefined)
  }

  function deleteDigit() {
    if (currentOperand.length === 1) {
      setCurrentOperand('0')
    } else {
      setCurrentOperand(currentOperand.slice(0, -1))
    }
  }

  return (
    <div className="calculator">
      <div className="display">
        <div className="previous-operand">{previousOperand}</div>
        <div className="current-operand">{currentOperand}</div>
      </div>

      <div className="keypad">
        <button className="btn-control span-two" onClick={clear}>AC</button>
        <button className="btn-control" onClick={deleteDigit}>DEL</button>
        <button className="btn-operator">/</button>

        <button className="btn-number" onClick={() => appendNumber('7')}>7</button>
        <button className="btn-number" onClick={() => appendNumber('8')}>8</button>
        <button className="btn-number" onClick={() => appendNumber('9')}>9</button>
        <button className="btn-operator">*</button>

        <button className="btn-number" onClick={() => appendNumber('4')}>4</button>
        <button className="btn-number" onClick={() => appendNumber('5')}>5</button>
        <button className="btn-number" onClick={() => appendNumber('6')}>6</button>
        <button className="btn-operator">-</button>

        <button className="btn-number" onClick={() => appendNumber('1')}>1</button>
        <button className="btn-number" onClick={() => appendNumber('2')}>2</button>
        <button className="btn-number" onClick={() => appendNumber('3')}>3</button>
        <button className="btn-operator">+</button>

        <button className="btn-number" onClick={() => appendNumber('.')}>.</button>
        <button className="btn-number" onClick={() => appendNumber('0')}>0</button>
        <button className="btn-control span-two">=</button>
      </div>
    </div>
  )
}

export default Calculadora
