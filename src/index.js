import DateAdapter from '@mui/lab/AdapterLuxon'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot } from 'recoil'
import App from './App'
import reportWebVitals from './reportWebVitals'

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
      paper: '#34322D',
    },
    primary: {
      main: '#dcddce',
    },
    secondary: {
      main: '#dcddce',
    },
    text: {
      primary: '#dcddce',
      secondary: '#B7B8AB',
      disabled: '#8E8F85',
      hint: '#8E8F85',
    },
  },
  typography: {
    fontFamily: 'Abril Fatface',
  },
  divider: '#34322D',
})

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
      // self-typing content styling
      '.content': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '250px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
      video: {
        display: 'flex',
        flex: '1',
        position: 'fixed',
        right: '0',
      },
    }}
  />
)

console.log('THEME', theme)

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <React.Fragment>
      <CssBaseline />
      {globalStyles}
      <BrowserRouter>
        <LocalizationProvider dateAdapter={DateAdapter}>
          <RecoilRoot>
            <App />
          </RecoilRoot>
        </LocalizationProvider>
      </BrowserRouter>
    </React.Fragment>
  </ThemeProvider>,
  document.getElementById('root'),
)

reportWebVitals()
