import React from 'react'
import { useState } from 'react'
import Answer from './Answer'
import { useEffect } from 'react'
import styles from '../components/styles/MathQuiz.module.css'

const MathQuiz = () => {
    const[score, setScore] = useState(0)
    const[a, setA] = useState(0)
    const[b, setB] = useState(0)
    const[c, setC] = useState(0)

    function randomNum() {
        const newA = Math.floor(Math.random() * 100);
        const newB = Math.floor(Math.random() * 100);
        setA(newA);
        setB(newB);
        setC(newA + newB);
      }
      
    
    useEffect(() => {
        randomNum();  
    }, [])

  return (
    <div className={styles.container}>
       <h2>Ваши очки:{score}</h2>
       <h2>{a} + {b} = ?</h2>
        <Answer a={a} b={b} c={c} score={score} setScore={setScore} randomNum={randomNum}/>
    </div>
  )
}

export default MathQuiz