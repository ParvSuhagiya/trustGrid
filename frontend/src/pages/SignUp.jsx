import { ThemeProvider, CssBaseline, Box } from '@mui/material';
import muiTheme from '../theme/muiTheme';
import SignUpBrand from '../components/SignUp/SignUpBrand';
import SignUpFormCard from '../components/SignUp/SignUpFormCard';
import SignUpTrustSignals from '../components/SignUp/SignUpTrustSignals';
import useSEO from '../hooks/useSEO';

/**
 * SignUp page — mirrors the full layout from example.html:
 *   • Centered <main> with brand, form-card, trust-signals
 *   • Fixed right-side decorative architectural image (lg+ screens)
 */
const SignUp = () => {
  useSEO({
    title: 'Sign Up',
    description: 'Create your free TrustGrid account. Join as a buyer or supplier and start streamlining your B2B procurement today.',
  });
  return (
    <ThemeProvider theme={muiTheme}>
      <CssBaseline />

      {/*
        Body equivalent:
        font-body text-on-surface antialiased min-h-screen flex items-center justify-center p-6
        background-color: #000000
      */}
      <Box
        sx={{
          minHeight: '100vh',
          backgroundColor: '#000000',
          color: '#e5e2e1',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: { xs: 2, sm: 3 },
          fontFamily: "'Inter', sans-serif",
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
          position: 'relative',
        }}
      >
        {/* ── Main content column (w-full max-w-md) ── */}
        <Box
          component="main"
          sx={{
            width: '100%',
            maxWidth: 448,   // max-w-md ≈ 28rem = 448px
            position: 'relative',
            zIndex: 1,
          }}
        >
          {/* Brand identity */}
          <SignUpBrand />

          {/* Form card */}
          <SignUpFormCard />

          {/* Trust signals */}
          <SignUpTrustSignals />
        </Box>

        {/* ── Fixed right-side decorative image (hidden lg:block) ── */}
        <Box
          aria-hidden="true"
          sx={{
            position: 'fixed',
            right: 0,
            top: 0,
            height: '100%',
            width: '33.333%',   // w-1/3
            display: { xs: 'none', lg: 'block' },
            opacity: 0.2,
            pointerEvents: 'none',
          }}
        >
          {/* Gradient overlay — bg-gradient-to-l from-black via-transparent to-black */}
          <Box
            sx={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to left, #000000, transparent, #000000)',
              zIndex: 1,
            }}
          />
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default SignUp;
