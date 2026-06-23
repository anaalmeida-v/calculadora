function Calculadora() {
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

        <button className="btn-number">7</button>
        <button className="btn-number">8</button>
        <button className="btn-number">9</button>
        <button className="btn-operator">*</button>

        <button className="btn-number">4</button>
        <button className="btn-number">5</button>
        <button className="btn-number">6</button>
        <button className="btn-operator">-</button>

        <button className="btn-number">1</button>
        <button className="btn-number">2</button>
        <button className="btn-number">3</button>
        <button className="btn-operator">+</button>

        <button className="btn-number">.</button>
        <button className="btn-number">0</button>
        <button className="btn-control span-two">=</button>
      </div>
    </div>
  )
}

export default Calculadora