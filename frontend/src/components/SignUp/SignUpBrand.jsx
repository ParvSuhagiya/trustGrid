import { Box, Typography } from '@mui/material';

/**
 * Brand Identity Block — "TRUSTGRID" headline + sub-tagline.
 * Mirrors the <div class="mb-12 text-center md:text-left"> block in example.html.
 */
const SignUpBrand = () => (
  <Box sx={{ mb: 6, textAlign: { xs: 'center', md: 'left' } }}>
    <Typography
      component="h1"
      sx={{
        fontFamily: "'Manrope', sans-serif",
        fontSize: '1.5rem',        // text-2xl
        fontWeight: 800,           // font-extrabold
        letterSpacing: '-0.05em', // tracking-tighter
        color: '#e5e2e1',
        lineHeight: 1,
      }}
    >
      TRUSTGRID
    </Typography>

    <Typography
      sx={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.625rem',      // text-xs
        textTransform: 'uppercase',
        letterSpacing: '0.2em',    // tracking-[0.2em]
        color: '#bdc9ca',
        mt: 1,
      }}
    >
      B2B Marketplace Shell
    </Typography>
  </Box>
);

export default SignUpBrand;
