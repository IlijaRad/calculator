/* eslint no-eval: 0 */

import { useState, useEffect } from "react";

function App() {

  const [calculation, setCalculation] = useState([]);
  const [calculationArray, setCalculationArray] = useState([]);
  const [sum, setSum] = useState(0)

  useEffect(() => {
    document.title = "Calculator";
  })

  useEffect(() => {
    console.log(calculation, calculationArray, 'calculation, calculationArray')
  }, [calculation, calculationArray])

  const round = (n, d) => Math.round(n * Math.pow(10, d)) / Math.pow(10, d)


  const total = calculation => {
    if (String(calculation).length === 0) {
      calculation = 0;
    } else {
      calculation = round(eval(calculation), 8);
    }

    setSum(calculation);
  }


  const posNeg = () => {
    const newValue = [[...calculationArray].join('') * -1];
    setCalculationArray(newValue);
    setCalculation(newValue.join(''));
  }

  const clear = () => {
    setCalculationArray([]);
    setCalculation([]);
    total([]);
  }

  const percent = () => {
    const newValue = [[...calculationArray].join('') * 0.01];
    setCalculationArray(newValue);
    setCalculation(newValue.join(''));
  }

  const backSpace = () => {
    const withoutLast = [...calculationArray];
    withoutLast.splice(calculationArray.length - 1, 1);
    setCalculationArray(withoutLast);
    setCalculation(withoutLast.join(''));
  }

  const equals = () => {
    if (isNaN(calculationArray[calculation.length - 1])) return;
    total(calculationArray.join(''));

  }

  const defaultFunc = value => {
    if (isNaN(value) && isNaN(calculationArray[calculationArray.length - 1])) return;
    setCalculationArray([...calculationArray, value]);
    setCalculation([...calculationArray, value].join(''));
  }

  const handleClick = e => {
    const buttonType = e.target.innerHTML;
    switch (buttonType) {
      case 'C':
        clear();
        break;
      case '+/-':
        posNeg();
        break;
      case '%':
        percent();
        break;
      case '←':
        backSpace();
        break;
      case '=':
        equals();
        break;
      default:
        defaultFunc(buttonType);
    }

  }

  return (
    <div className="container">
      <div className="grid-container">
        <div className="display tr tl">
          <div className="display__calculation">{calculation}</div>
          <div className="display__total">{sum}</div>
        </div>
        <button onClick={handleClick} className="button gray">C</button>
        <button onClick={handleClick} className="button gray">+/-</button>
        <button onClick={handleClick} className="button gray">%</button>
        <button onClick={handleClick} className="button orange">/</button>
        <button onClick={handleClick} className="button white">7</button>
        <button onClick={handleClick} className="button white">8</button>
        <button onClick={handleClick} className="button white">9</button>
        <button onClick={handleClick} className="button orange">*</button>
        <button onClick={handleClick} className="button white">4</button>
        <button onClick={handleClick} className="button white">5</button>
        <button onClick={handleClick} className="button white">6</button>
        <button onClick={handleClick} className="button orange">-</button>
        <button onClick={handleClick} className="button white">3</button>
        <button onClick={handleClick} className="button white">2</button>
        <button onClick={handleClick} className="button white">1</button>
        <button onClick={handleClick} className="button orange">+</button>
        <button onClick={handleClick} className="button white bl">0</button>
        <button onClick={handleClick} className="button white">.</button>
        <button onClick={handleClick} className="button white">←</button>
        <button onClick={handleClick} className="button red br">=</button>
      </div>
    </div>
  )
}

export default App;