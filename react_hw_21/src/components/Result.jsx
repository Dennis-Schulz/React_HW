import { useSelector, useDispatch } from 'react-redux'
import { submitAnswers } from '../features/questionnaire/questionnaireSlice'

const Result = () => {
  const dispatch = useDispatch()
  const { score, answers } = useSelector(
    (state) => state.questionnaire
  )

  const handleSubmit = () => {
    dispatch(submitAnswers(answers))
  }

  return (
    <div>
      <button
        style={{
          marginTop: '20px',
          background: 'blue',
          color: 'white',
          width: '200px',
          cursor: 'pointer',
        }}
        type="button"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <p>Your Score: {score}</p>
    </div>
  )
}

export default Result
