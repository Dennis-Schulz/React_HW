import { useSelector, useDispatch } from 'react-redux'
import { setAnswer } from '../features/questionnaire/questionnaireSlice'

const Question = () => {
  const dispatch = useDispatch()
  const { questions, answers } = useSelector((state) => state.questionnaire)

  return (
    <div>
      <ul>
        {questions.map((question) => (
          <li style={{ listStyle: 'none', display: 'flex', flexDirection: 'column' }} key={question.id}>
            <p>{question.text}</p>
            {question.options.map((option, index) => (
              <label key={index}>
                <input
                  type="radio"
                  name={`question-${question.id}`}
                  value={index}
                  checked={answers[question.id] === index}
                  onChange={() =>
                    dispatch(setAnswer({ id: question.id, answer: index }))
                  }
                />
                {option}
              </label>
            ))}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Question
