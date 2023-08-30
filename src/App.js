import { useState } from "react";
import "./App.css";

function App() {
  const [display, setDisplay] = useState("0");

  const handleNumber = (event) => {
    const number = event.target.textContent;

    if (display === "0") {
      setDisplay(number);
    } else {
      setDisplay(display + number);
    }
  };

  const handleOperator = (event) => {
    const operator = event.target.textContent;
    setDisplay(display + " " + operator + " ");
  };

  const handleEqual = () => {
    setDisplay(eval(display));
  };

  const handleDecimal = () => {
    const array = display.split(" ");
    const lastElement = array[array.length - 1];

    if (
      !lastElement.includes(".") &&
      typeof parseInt(lastElement) === "number"
    ) {
      setDisplay(display + ".");
    }
  };

  const handleClear = () => {
    setDisplay("0");
  };

  const handleBack = () => {
    setDisplay(display.slice(0, -1));
  };
  return (
    <div id="app">
      <div>
        <div className="calculator">
          <div id="display">{display}</div>

          <button className="button" id="clear" onClick={handleClear}>
            AC
          </button>
          <button className="button" id="divide" onClick={handleOperator}>
            /
          </button>
          <button className="button" id="multiply" onClick={handleOperator}>
            *
          </button>
          <button className="button" id="delete" onClick={handleBack}>
            DEL
          </button>

          <button className="button" id="seven" onClick={handleNumber}>
            7
          </button>
          <button className="button" id="eight" onClick={handleNumber}>
            8
          </button>
          <button className="button" id="nine" onClick={handleNumber}>
            9
          </button>

          <button className="button" id="subtract" onClick={handleOperator}>
            -
          </button>

          <button className="button" id="four" onClick={handleNumber}>
            4
          </button>
          <button className="button" id="five" onClick={handleNumber}>
            5
          </button>
          <button className="button" id="six" onClick={handleNumber}>
            6
          </button>
          <button className="button" id="add" onClick={handleOperator}>
            +
          </button>

          <button className="button" id="one" onClick={handleNumber}>
            1
          </button>
          <button className="button" id="two" onClick={handleNumber}>
            2
          </button>
          <button className="button" id="three" onClick={handleNumber}>
            3
          </button>

          <button className="button" id="zero" onClick={handleNumber}>
            0
          </button>
          <button className="button" id="decimal" onClick={handleDecimal}>
            .
          </button>

          <button className="button" id="equals" onClick={handleEqual}>
            =
          </button>
        </div>

        <div className="author">by dheeshi</div>
      </div>
    </div>
  );
}

export default App;
