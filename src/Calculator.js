import React, { useState } from 'react';
import './Calculator.css';

const Calculator = () => {
  const [display, setDisplay] = useState('Use my Calculator please');
  const [backgroundColor, setBackgroundColor] = useState("#87ceeb"); 
  const [buttonAnimations, setButtonAnimations] = useState({});
  const [result,setResult]=useState(0);

  const handleNumberClick = (event) => {
    const number = event.target.innerHTML;
    if(display==='Use my Calculator please'|| display==='Error'||result===1)
    {
      setDisplay('')
      setResult(0)
    }
    setDisplay((prevDisplay) => prevDisplay + number);
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setBackgroundColor(randomColor);
  };
  const handleAnimation = (key) => {
    setButtonAnimations((prevAnimations) => ({
      ...prevAnimations,
      [key]: true,
    }));

    setTimeout(() => {
      setButtonAnimations((prevAnimations) => ({
        ...prevAnimations,
        [key]: false,
      }));
    }, 500);
  };

  const handleOperatorChange = (event) => {
    const operator = event.target.innerHTML;
    setDisplay((prevDisplay) => prevDisplay + operator);
  };

  const calculate = () => {
    try {
      const result = eval(display);
      setDisplay(result.toString());
      setResult(1)
    } catch (error) {
      setDisplay('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
  };

  return (
    <div className="calculator" style={{backgroundColor:backgroundColor}}>
      <div className="display">{display}</div>
      <div className="buttons">
        <div className="row">
          <button className="zero" onClick={clearDisplay}>
            AC
          </button>
          <button className={buttonAnimations['slide-in'] ? 'button-slide-in' : ''} onClick={(event) => {handleOperatorChange(event);handleAnimation('slide-in');}}>
            /
          </button>
        </div>
        <div className="row">
          <button className={buttonAnimations['bounce'] ? 'button-bounce' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('bounce');}}>7</button>
          <button className={buttonAnimations['bounce'] ? 'button-bounce' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('bounce');}}>8</button>
          <button className={buttonAnimations['bounce'] ? 'button-bounce' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('bounce');}}>9</button>
          <button className={buttonAnimations['slide-in'] ? 'button-slide-in' : ''} onClick={(event) => {handleOperatorChange(event);handleAnimation('slide-in');}}>
            *
          </button>
        </div>
        <div className="row">
          <button className={buttonAnimations['bounce'] ? 'button-bounce' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('bounce');}}>4</button>
          <button className={buttonAnimations['rotate'] ? 'button-rotate' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('rotate');}}>5</button>
          <button className={buttonAnimations['bounce'] ? 'button-bounce' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('bounce');}}>6</button>
          <button className={buttonAnimations['slide-in'] ? 'button-slide-in' : ''} onClick={(event) => {handleOperatorChange(event);handleAnimation('slide-in');}}>
            + 
          </button>
        </div>
        <div className="row">
          <button className={buttonAnimations['bounce'] ? 'button-bounce' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('bounce');}}>1</button>
          <button className={buttonAnimations['bounce'] ? 'button-bounce' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('bounce');}}>2</button>
          <button className={buttonAnimations['bounce'] ? 'button-bounce' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('bounce');}}>3</button>
          <button className={buttonAnimations['slide-in'] ? 'button-slide-in' : ''} onClick={(event) => {handleOperatorChange(event);handleAnimation('slide-in');}}>
            -
          </button>
        </div>
        <div className="row">
          <button className="clear" onClick={handleNumberClick}>
            0
          </button>
          <button className={buttonAnimations['rotate'] ? 'button-rotate' : ''} onClick={(event) => {handleNumberClick(event);handleAnimation('rotate');}}>.</button>
          <button className="equal" onClick={calculate}>
            =
          </button>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
