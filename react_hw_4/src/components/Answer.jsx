import React from 'react'
import { useState } from 'react'

const Answer = ({c, score, setScore, randomNum}) => {
    const[input, setInput] = useState('')
    const[bgColor, setBgColor] = useState('white')

    function checkAnswer() {
        if (Number(input) === c || input === c) {
            setBgColor('green');
            setScore(score + 1);
            randomNum();
            setInput('');
        }
        else {
            setBgColor('red');
            randomNum();
            setInput(''); 
        }
      }
 const timer = setTimeout(() => {setBgColor('white')}, 2000)

 React.useEffect(() => {
    return () => clearTimeout(timer)
  }, [timer])
  

  return (
    <div>
        <input style={{fontSize: '20px', width: '200px', backgroundColor: bgColor}} type='number' value={input} placeholder='Введите свой ответ' onChange={(e) => setInput(e.target.value)}/>
        <button style={{fontSize: '20px'}} onClick={() => checkAnswer()}>Отправить</button>
    </div>
  )
}

export default Answer