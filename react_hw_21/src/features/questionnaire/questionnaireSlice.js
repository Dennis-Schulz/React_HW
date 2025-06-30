import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  questions: [
    {
      id: 1,
      text: 'Question 1?',
      options: ['Option 1', 'Option 2'],
      correctAnswer: 0,
    },
    {
      id: 2,
      text: 'Question 2?',
      options: ['Option 1', 'Option 2'],
      correctAnswer: 1,
    },
    {
      id: 3,
      text: 'Question 3?',
      options: ['Option 1', 'Option 2'],
      correctAnswer: 0,
    },
    {
      id: 4,
      text: 'Question 4?',
      options: ['Option 1', 'Option 2'],
      correctAnswer: 0,
    },
    {
      id: 5,
      text: 'Question 5?',
      options: ['Option 1', 'Option 2'],
      correctAnswer: 1,
    },
  ],
  answers: {},
  isSubmitted: false,
  score: 0,
}

const questionnaireSlice = createSlice({
  name: 'questionnaire',
  initialState,
  reducers: {
    submitAnswers: (state, action) => {
      state.answers = action.payload
      state.isSubmitted = true
      state.score = state.questions.reduce((acc, question) => {
        if (state.answers[question.id] === question.correctAnswer) {
          return acc + 1
        }
        return acc
      }, 0)
    },
    setAnswer: (state, action) => {
      const { id, answer } = action.payload
      state.answers[id] = answer
    },
  },
})

export const { submitAnswers, setAnswer } = questionnaireSlice.actions
export default questionnaireSlice.reducer
