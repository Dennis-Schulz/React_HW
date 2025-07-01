import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

export const fetchRandomQuote = createAsyncThunk(
  'quote/fetchRandomQuote',
  async () => {
    const response = await axios.get('/api/api/random')
    return response.data
  }
)

const quoteSlice = createSlice({
  name: 'quote',
  initialState: {
    quote: null,
    author: null,
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchRandomQuote.pending, (state) => {
        state.status = 'loading'
      })
      .addCase(fetchRandomQuote.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.quote = action.payload[0].q
        state.author = action.payload[0].a
      })
      .addCase(fetchRandomQuote.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
  },
})

export default quoteSlice.reducer

export const selectQuote = (state) => state.quote

export const selectQuoteStatus = (state) => state.quote.status