import type {} from '@mui/x-date-pickers/themeAugmentation'

import { createTheme, responsiveFontSizes } from '@mui/material/styles'

let theme = createTheme({
  palette: {
    // type: darkMode ? 'dark' : 'light',
    mode: 'light',
    primary: {
      main: '#51BAB3',
    },
    secondary: {
      main: '#E088A8',
    },
  },
  typography: {
    fontFamily: ['"mostra-nuova"', 'sans-serif'].join(','),
    h1: {
      fontWeight: 'bold',
      fontSize: '38px',
      paddingBottom: '10px',
      textTransform: 'uppercase',
      lineHeight: 1,
      letterSpacing: '2px',
      // color:
    },
    h2: {
      // fontWeight: 'bold',
      // fontSize: '1.9rem',
      // paddingBottom: 12,
      fontWeight: 'bold',
      fontSize: '30px',
      paddingBottom: '10px',
      letterSpacing: '2px',
      textTransform: 'uppercase',
      lineHeight: 1,
      marginTop: '0px !important',
    },

    h3: {
      // fontWeight: 'bold',
      // fontSize: '1.7rem',
      // paddingBottom: 12,
      fontWeight: 'bold',
      fontSize: '23px',
      paddingBottom: '10px',
      textTransform: 'uppercase',
      lineHeight: 1,
      letterSpacing: '2px',
    },
    h4: {
      // fontWeight: 'bold',
      // fontSize: '1.5rem',
      // paddingBottom: 8,
      fontSize: '20px',
      paddingBottom: '10px',
      textTransform: 'uppercase',
      lineHeight: 1,
      letterSpacing: '2px',
    },
    h5: {
      // fontWeight: 'bold',
      // fontSize: '1.3rem',
      // paddingBottom: 8,
      fontSize: '18px',
      paddingBottom: '8px',
      textTransform: 'uppercase',
      lineHeight: 1,
      letterSpacing: '2px',
    },
    h6: {
      fontSize: '16px',
      paddingBottom: '5px',
      textTransform: 'uppercase',
      lineHeight: 1,
      letterSpacing: '2px',
    },
    subtitle1: {
      fontSize: 12,
      paddingBottom: 12,
      color: '#5A5A5A',
    },
    body1: {
      fontFamily: ['itc-avant-garde-gothic-pro', 'sans-serif'].join(','),
      paddingBottom: 10,
      fontWeight: 'lighter',
      color: '#5A5A5A',
    },
  },
  components: {
    MuiDatePicker: {
      styleOverrides: {
        root: {
          backgroundColor: 'red',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
    },
  },
})
theme = responsiveFontSizes(theme)
export default theme
