import "./App.css";
import { useState } from "react";
function App() {
  const [result, setResult] = useState("");
  const [totalresult, setTotalResult] = useState("");

  function clear()
  {
    setResult("");
    setTotalResult(0);
  }

  function backspace()
  {
    setResult(result.slice(0,-1));
  }

  function handleClick(e)
  {
    setResult(result.concat(e.target.name));
  }

  function calculateValue()
  {
    try
    {
      setTotalResult(eval(result));
    }
    catch(error)
    {
      setTotalResult("Error");
      
    }
  }

  return (
    <div className="container">
      
      <div className="calculator-result">
        <span className="tresult">{totalresult}</span>
        <input className="input-field" type="text" placeholder = "0" value={result} disabled />
      </div>
      
      <div className="buttons">
      <button className="ac" onClick={clear}>AC</button>
      <button  onClick={backspace}>DEL</button>
      <button name="%" onClick={handleClick}>%</button>
      <button className="highlight" name="/" onClick={handleClick}>/</button>
      <button name="7" onClick={handleClick}>7</button>
      <button name="8" onClick={handleClick}>8</button>
      <button name="9" onClick={handleClick}>9</button>
      <button className="highlight" name="*" onClick={handleClick}>*</button>
      <button name="4" onClick={handleClick}>4</button>
      <button name="5" onClick={handleClick}>5</button>
      <button name="6" onClick={handleClick}>6</button>
      <button className="highlight" name="-" onClick={handleClick}>-</button>
      <button name="1" onClick={handleClick}>1</button>
      <button name="2" onClick={handleClick}>2</button>
      <button name="3" onClick={handleClick}>3</button>
      <button className="highlight" name="+" onClick={handleClick}>+</button>
      <button name="0" onClick={handleClick}>0</button>
      <button name="00" onClick={handleClick}>00</button>
      <button name="." onClick={handleClick}>.</button>
      <button className="highlight" name="=" onClick={calculateValue}>=</button>


    </div>
      

    </div>
    
  );
}

export default App;