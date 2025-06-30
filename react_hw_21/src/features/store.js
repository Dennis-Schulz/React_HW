import { configureStore } from '@reduxjs/toolkit'
import questionnaireSlice from './questionnaire/questionnaireSlice'

export const store = configureStore({
  reducer: {
    questionnaire: questionnaireSlice,
  },
})

export default store
