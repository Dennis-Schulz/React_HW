import React from 'react'
import { useState } from 'react'

const Answer = ({c, score, setScore, randomNum}) => {
    const[input, setInput] = useState('')

    function checkAnswer() {
        if (Number(input) === c || input === c) {
            setScore(score + 1);
            randomNum();
            setInput('');
        }
        else {
            randomNum();
            setInput(''); 
        }
      }

  return (
    <div>
        <input style={{fontSize: '20px'}} type='number' value={input} placeholder='Введите свой ответ' onChange={(e) => setInput(e.target.value)}/>
        <button style={{fontSize: '20px'}} onClick={() => checkAnswer()}>Отправить</button>
    </div>
  )
}

export default Answer