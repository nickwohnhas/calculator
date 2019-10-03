import React, {useState} from 'react'

const Calculator = () => {
  const handleClick = (e) => {
    if (restartComputation) {
      setLastValue(e.target.textContent)
      setComputation(e.target.textContent)
      setRestartComputation(false)
    } else {
      if (isNaN(parseInt(e.target.textContent)) || isNaN(parseInt(lastValue))) {
        setComputation(computation + " " + e.target.textContent)
      } else {
        setComputation(computation + e.target.textContent)
      }
      setLastValue(e.target.textContent)
    }
  }

  const handleEquals = () => {
    let sanitizedString = computation.replace(/x/g, "*")
    let evaluation = eval(sanitizedString)
    setComputation(evaluation)
    setRestartComputation(true)
  }

  const handleClear = () => {
    setComputation("")
    setRestartComputation(false)
    setLastValue("")
  }

  const [computation, setComputation] = useState("")
  const [restartComputation, setRestartComputation] = useState(false)
  const [lastValue, setLastValue] = useState("")

  return (
    <div>
      <header className="header">
        <h1>Calculator App</h1>
      </header>
      <div id="calculator">
        <section id="display">
          {computation}
    </section>
        <div className="clr"></div>
        <section id="numbers">
          <div className="row">
            <div onClick={handleClick} className="number">7</div>
            <div onClick={handleClick}className="number">4</div>
            <div onClick={handleClick}className="number">1</div>
          </div>

          <div className="row">
            <div onClick={handleClick}className="number">8</div>
            <div onClick={handleClick}className="number">5</div>
            <div onClick={handleClick}className="number">2</div>
          </div>

          <div className="row">
            <div onClick={handleClick}className="number">9</div>
            <div onClick={handleClick}className="number">6</div>
            <div onClick={handleClick}className="number">3</div>
          </div>
        </section>
        <section id="operations">
          <div onClick={handleClick}className="number">/</div>
          <div onClick={handleClick}className="number">x</div>
          <div onClick={handleClick}className="number">-</div>
        </section>
        <section id="bottom">
          <div onClick={handleClick}className="zero number">0</div>
          <div onClick={handleClear} className="lowest number">c</div>
          <div onClick={handleEquals} className="lowest number">=</div>
          <div onClick={handleClick}className="lowest number">+</div>
        </section>
      </div>
    </div>
  )
}

export default Calculator
