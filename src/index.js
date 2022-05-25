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
      '.content': {
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: '0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        hShadow: '#2c2a24',
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
