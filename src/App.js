import React, { useState } from 'react'
import "./style.css"
const App = () => {


  const [textt, settextt] = useState("")

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        const result = eval(textt);
        settextt(String(result));
      } catch (error) {
        settextt('Error');
      }
    } else if (value === 'C') {
      settextt('');
    } else {
      settextt((prevtextt) => prevtextt + value);
    }
  };

  return (
    <div className="main"> 
      <div className='textt'>
        <div className='textt'>{textt}</div>
      </div>
      <div className='body'>
      <button className='btngrey' onClick={() => handleButtonClick('1')}>1</button>
        <button className='btngrey' onClick={() => handleButtonClick('2')}>2</button>
        <button className='btngrey' onClick={() => handleButtonClick('3')}>3</button>
        <button className='btn' onClick={() => handleButtonClick('+')}>+</button>
        <button className='btngrey' onClick={() => handleButtonClick('4')}>4</button>
        <button className='btngrey' onClick={() => handleButtonClick('5')}>5</button>
        <button className='btngrey' onClick={() => handleButtonClick('6')}>6</button>
        <button className='btn' onClick={() => handleButtonClick('-')}>-</button>
        <button className='btngrey' onClick={() => handleButtonClick('7')}>7</button>
        <button className='btngrey' onClick={() => handleButtonClick('8')}>8</button>
        <button className='btngrey' onClick={() => handleButtonClick('9')}>9</button>
        <button className='btn' onClick={() => handleButtonClick('*')}>*</button>
        <button className='btngrey' onClick={() => handleButtonClick('0')}>0</button>
        <button className='btnred' onClick={() => handleButtonClick('C')}>C</button>
        <button className='btn' onClick={() => handleButtonClick('=')}>=</button>
        <button className='btn' onClick={() => handleButtonClick('/')}>/</button>
      </div>
    </div>
  )
}

export default App