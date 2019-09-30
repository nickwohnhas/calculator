import React from 'react'

const Calculator = () => (

  <div>
    <header className="header">
      <h1>Calculator App</h1>
    </header>
    <div id="calculator">
    <section id="display">
        0
    </section>
      <div className="clr"></div>
      <section id="numbers">
        <div className="row">
          <div className="number">7</div>
          <div className="number">4</div>
          <div className="number">1</div>
        </div>

        <div className="row">
          <div className="number">8</div>
          <div className="number">5</div>
          <div className="number">2</div>
        </div>

        <div className="row">
          <div className="number">9</div>
          <div className="number">6</div>
          <div className="number">3</div>
        </div>
      </section>
      <section id="operations">
        <div className="number">/</div>
        <div className="number">x</div>
        <div className="number">-</div>
      </section>
      <section id="bottom">
        <div className="zero number">0</div>
        <div className="lowest number">=</div>
        <div className="lowest number">+</div>
      </section>
    </div>
  </div>
)

export default Calculator
