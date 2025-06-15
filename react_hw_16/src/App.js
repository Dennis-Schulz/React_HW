import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import { useState } from 'react'

function App() {
  const [open, setOpen] = useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }

  const handleClose = () => {
    setOpen(false)
  }

  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My material UI App
          </Typography>
        </Toolbar>
      </AppBar>
      <Container>
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          Добро пожаловать в наше приложение!
        </Typography>
        <Button onClick={handleClickOpen} variant="contained">
          Открыть диаологовое окно
        </Button>
        <Dialog
          open={open}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {'Использовать Material UI?'}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Это простое React приложение с использованием Material UI. Вы
              можете настроить его по своему усмотрению.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>ОТМЕНА</Button>
            <Button onClick={handleClose} autoFocus>
              СОГЛАСЕН
            </Button>
          </DialogActions>
        </Dialog>
      </Container>
    </div>
  )
}

export default App
