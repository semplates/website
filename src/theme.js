import { red } from '@material-ui/core/colors';
import { createTheme } from '@material-ui/core/styles';

// A custom theme for this app
const theme = createTheme({
  typography: {
    fontFamily: 'Roboto',
    h1: {
      fontFamily: 'Montserrat',
      fontWeight: '900',
      fontSize: '3.5rem',
      '@media (max-width: 960px)': {
        fontSize: '3.1rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '2.1rem',
      },
      fontStyle: 'normal',
    },
    h2: {
      fontFamily: 'Roboto',
      fontSize: '1.4rem',
      '@media (max-width: 960px)': {
        fontSize: '1.3rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.2rem',
      },
    },
    h3: {
      fontFamily: 'Montserrat',
      fontWeight: 600,
      fontSize: '2.1rem',
      '@media (max-width: 960px)': {
        fontSize: '1.8rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.6rem',
      },
    },
    h4: {
      fontFamily: 'Roboto',
      fontWeight: 400,
      fontSize: '1.4rem',
      '@media (max-width: 960px)': {
        fontSize: '1.3rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.1rem',
      },
    },
    h5: {
      fontFamily: 'Montserrat',
      fontSize: '1.6rem',
      fontWeight: 600,
      '@media (max-width: 1280px)': {
        textAlign: 'center',
        width: '100%',
      },
      '@media (max-width: 960px)': {
        fontSize: '1.6rem',
      },
      '@media (max-width: 600px)': {
        fontSize: '1.4rem',
      },
    },
    h6: {
      fontWeight: 400,
      fontSize: '1.2rem',
      '@media (max-width: 1280px)': {
        textAlign: 'center',
        width: '100%',
      },
      '@media (max-width: 960px)': {
        fontSize: '1.1rem',
      },
    },
    button: {
      fontFamily: 'Roboto',
      fontSize: '1.3rem',
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      light: '#60CCCA',
      main: '#5bc0be',
      dark: '#3c807e',
    },
    secondary: {
      light: '#5c7ea9',
      main: '#3a506b',
      dark: '#272E45',
    },
    warning: {
      main: '#FFD200',
    },
    text: {
      primary: '#3a506b',
      secondary: '#ffffff',
      main: '#0B132B',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
      alternativie: '#c7f5f4',
    },
    grey: {
      100: '#E5E5E5',
      200: '#CCCCCC',
      300: '#B2B2B2',
      400: '#999999',
      500: '#7F7F7F',
      600: '#666666',
      700: '#4c4c4c',
      800: '#333333',
      900: '#191919',
    },
  },
  overrides: {
    MuiTabs: {
      indicator: {
        backgroundColor: '#60CCCA',
        height: '3px',
        borderRadius: '15px',
      },
    },
    MuiTab: {
      root: {
        '&$selected': {
          color: '#60CCCA',
        },
        textTransform: 'none',
        fontWeight: 400,
        fontSize: '1.4rem',
        '@media (max-width: 960px)': {
          fontSize: '1.3rem',
        },
        '@media (max-width: 600px)': {
          fontSize: '1.1rem',
        },
      },
      wrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        justifyContent: 'center',
        width: '100%',
        flexDirection: 'row',
      },
      labelContainer: {
        width: '100%', // Fix an IE 11 issue
        margin: '6px 40px',
      },
    },
  },
  custom: {
    headerHeight: 80,
    footerTextSize: '14px',
    footerTextWeight: 500,
    menuBlur: 'blur( 40px )',
    thinBlur: 'blur( 30px )',
    thickBlur: 'blur( 100px )',
    fadingGlassBackground:
      'linear-gradient(180deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0.5) 20%, rgba(250,255,235,0.8) 70%, rgba(245,255,255,1) 100%)',
    glassBackground: 'rgba(250, 255, 255, 0.4)',
    glassBorder: '1px solid rgba( 255, 255, 255, 1)',
    glassShadow: 'rgba(60, 128, 126, 0.3) 4px 6px 32px',
    glassShadowHover: 'rgba(60, 128, 126, 0.5) 0px 0px 32px',
    buttonShadow: 'rgba(60, 128, 126, 0.7) 4px 6px 20px',
    wideShadow: 'rgba(60, 128, 126, 0.7) 4px 6px 48px',
    glassBorderBottom: '1px rgba(60, 128, 126, 0.2) solid',
    glassBorderRight: '1px rgba(60, 128, 126, 0.2) solid',
    warningBackground: 'rgba(255,210,0,0.4)',
    borderRadius: '15px',
  },
});

export default theme;
