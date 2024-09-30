import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createTheme, ThemeProvider } from '@mui/material/styles';
import App from './App.jsx'
import './index.css'

const theme = createTheme({
  typography: {
    fontFamily: 'Noir Pro Medium, Arial, sans-serif', // Your custom font
  },
});

createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
  <StrictMode>
    <App />
  </StrictMode>
  </ThemeProvider>
)
