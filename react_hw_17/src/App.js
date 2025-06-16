import { useState } from 'react'
import { ThemeProvider, Typography, Button, Stack } from '@mui/material'
import { createTheme } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'

const theme = createTheme({
  palette: {
    mode: 'light',
  },
})

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
})

function App() {
  const [modeTheme, setModeTheme] = useState('light')

  return (
    <ThemeProvider theme={modeTheme === 'light' ? theme : darkTheme}>
      <CssBaseline />
      <div className="App">
        <Stack spacing={3} alignItems="start" marginLeft={3}>
          <Typography variant="h2">{modeTheme} Mode</Typography>
          <Button
            variant="contained"
            onClick={() =>
              setModeTheme(modeTheme === 'light' ? 'dark' : 'light')
            }
          >
            Toggle Theme
          </Button>
        </Stack>
      </div>
    </ThemeProvider>
  )
}

export default App
