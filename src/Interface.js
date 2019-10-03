import React from 'react'

const Interface = ({ computation, handleClick, handleClear, handleEquals}) => {
  return (
    <div id="calculator">
      <section id="display">
        {computation}
      </section>
      <div className="clr"></div>
      <section id="numbers">
        <div className="row">
          <div onClick={handleClick} className="number">7</div>
          <div onClick={handleClick} className="number">4</div>
          <div onClick={handleClick} className="number">1</div>
        </div>

        <div className="row">
          <div onClick={handleClick} className="number">8</div>
          <div onClick={handleClick} className="number">5</div>
          <div onClick={handleClick} className="number">2</div>
        </div>

        <div className="row">
          <div onClick={handleClick} className="number">9</div>
          <div onClick={handleClick} className="number">6</div>
          <div onClick={handleClick} className="number">3</div>
        </div>
      </section>
      <section id="operations">
        <div onClick={handleClick} className="number">/</div>
        <div onClick={handleClick} className="number">x</div>
        <div onClick={handleClick} className="number">-</div>
      </section>
      <section id="bottom">
        <div onClick={handleClick} className="zero number">0</div>
        <div onClick={handleClear} className="lowest number">c</div>
        <div onClick={handleEquals} className="lowest number">=</div>
        <div onClick={handleClick} className="lowest number">+</div>
      </section>
    </div>
  )
}

export default Interface
