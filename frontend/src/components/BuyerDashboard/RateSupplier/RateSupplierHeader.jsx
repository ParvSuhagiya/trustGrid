import { Box, Typography } from '@mui/material';

/**
 * RateSupplierHeader
 * Displays the "Feedback Portal" label, main heading, and sub-description
 * at the top of the Rate Supplier page.
 */
const RateSupplierHeader = () => (
  <Box sx={{ width: '100%', maxWidth: 672, textAlign: 'center', mb: 8, mx: 'auto' }}>
    <Typography
      sx={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 700,
        color: '#22C55E',
        textTransform: 'uppercase',
        letterSpacing: '0.2em',
        fontSize: '0.625rem',
        mb: 2,
        display: 'block',
      }}
    >
      Feedback Portal
    </Typography>

    <Typography
      component="h1"
      sx={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 800,
        fontSize: { xs: '2.25rem', md: '3rem' },
        letterSpacing: '-0.04em',
        color: '#fff',
        textTransform: 'uppercase',
        mb: 3,
        lineHeight: 1.05,
      }}
    >
      Rate your experience.
    </Typography>

    <Typography
      sx={{
        color: '#CCCCCC',
        fontFamily: "'Inter', sans-serif",
        lineHeight: 1.7,
        maxWidth: 512,
        mx: 'auto',
        fontSize: '0.9375rem',
      }}
    >
      Your feedback helps us curate the highest quality supply chain partners in the B2B network.
    </Typography>
  </Box>
);

export default RateSupplierHeader;
