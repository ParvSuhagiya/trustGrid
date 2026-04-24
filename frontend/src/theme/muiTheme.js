import { createTheme } from '@mui/material/styles';

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#22c55e',
      contrastText: '#000000',
    },
    background: {
      default: '#000000',
      paper: '#0e0e0e',
    },
    text: {
      primary: '#e5e2e1',
      secondary: '#bdc9ca',
    },
    divider: '#444444',
    action: {
      hover: 'rgba(255,255,255,0.05)',
    },
  },
  typography: {
    fontFamily: "'Inter', sans-serif",
    h1: { fontFamily: "'Manrope', sans-serif" },
    h2: { fontFamily: "'Manrope', sans-serif" },
    h3: { fontFamily: "'Manrope', sans-serif" },
    h4: { fontFamily: "'Manrope', sans-serif" },
    h5: { fontFamily: "'Manrope', sans-serif" },
    h6: { fontFamily: "'Manrope', sans-serif" },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    // ── TextField ──
    MuiTextField: {
      defaultProps: { variant: 'outlined', fullWidth: true },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          backgroundColor: '#1c1b1b',
          color: '#e5e2e1',
          '& .MuiOutlinedInput-notchedOutline': {
            borderColor: '#444444',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: '#666666',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#22c55e',
            borderWidth: '1px',
            boxShadow: '0 0 0 1px #22c55e',
          },
          '&.Mui-focused': {
            outline: 'none',
          },
        },
        input: {
          outline: 'none',
          '&:focus': {
            outline: 'none',
          },
          '&::placeholder': {
            color: 'rgba(189,201,202,0.3)',
            opacity: 1,
          },
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          color: '#bdc9ca',
          '&.Mui-focused': {
            color: '#22c55e',
          },
        },
      },
    },
    // ── Button ──
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          letterSpacing: '0.1em',
          fontWeight: 800,
          borderRadius: 8,
        },
        contained: {
          backgroundColor: '#e5e2e1',
          color: '#000000',
          '&:hover': {
            backgroundColor: '#ffffff',
          },
        },
        outlined: {
          borderColor: '#444444',
          color: '#e5e2e1',
          '&:hover': {
            backgroundColor: '#2a2a2a',
            borderColor: '#666666',
          },
        },
      },
    },
    // ── Divider ──
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: 'rgba(255,255,255,0.05)',
          '&::before, &::after': {
            borderColor: 'rgba(255,255,255,0.05)',
          },
        },
      },
    },
    // ── Paper / Card ──
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: 'none',
          backgroundColor: '#0e0e0e',
          border: '1px solid #444444',
        },
      },
    },
    // ── IconButton ──
    MuiIconButton: {
      styleOverrides: {
        root: {
          color: 'rgba(189,201,202,0.5)',
          '&:hover': { color: '#e5e2e1', backgroundColor: 'transparent' },
        },
      },
    },
    // ── Link ──
    MuiLink: {
      styleOverrides: {
        root: {
          color: '#22c55e',
          '&:hover': { opacity: 0.8 },
        },
      },
    },
  },
});

export default muiTheme;
