import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import reportWebVitals from './reportWebVitals'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DateAdapter from '@mui/lab/AdapterLuxon'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import GlobalStyles from '@mui/material/GlobalStyles'
import CssBaseline from '@mui/material/CssBaseline'

import App from './App'

import './index.css'

// customize later
const theme = createTheme({
  components: {
    MuiButton: {
      styleOverrides: {
        // Name of the slot
        root: {
          // Some CSS
          textTransform: 'initial',
          fontSize: '1.1rem',
          lineHeight: '1.3rem',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#2c2a24',
      paper: '#2c2a24',
    },
    primary: {
      main: '#dcddce',
    },
    secondary: {
      main: '#dcddce',
    },
    text: {
      primary: '#dcddce',
      secondary: '#dcddce',
    },
  },
  typography: {
    fontFamily: 'Abril Fatface',
  },
})
// customize later
const globalStyles = (
  <GlobalStyles
    styles={{
      'html, body, #root': {
        height: '100vh',
        maxHeight: '100%',
        width: '100vw',
        overflow: 'hidden',
      },
      '.App': {
        display: 'flex',
        flexDirection: 'column',
        flex: '1',
        overflow: 'hidden',
      },
      body: {
        fontFamily: 'Domine',
      },
      '#root': {
        display: 'flex',
        flex: '1',
      },
      form: {
        flexDirection: 'column',
        flex: 1,
        minHeight: 0,
      },
    }}
  />
)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      {globalStyles}
      <BrowserRouter>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <App />
        </LocalizationProvider>
      </BrowserRouter>
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
)

reportWebVitals()
