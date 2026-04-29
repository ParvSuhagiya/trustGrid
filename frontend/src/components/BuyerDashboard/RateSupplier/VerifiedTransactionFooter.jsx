import { Box, Typography } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

/**
 * VerifiedTransactionFooter
 * Footer banner at the bottom of the Rate Supplier page.
 * Shows "Verified Transaction" trust badge + progress dots.
 */
const VerifiedTransactionFooter = () => (
  <Box
    sx={{
      mt: 12,
      width: '100%',
      maxWidth: 768,
      borderTop: '1px solid #333333',
      pt: 6,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 4,
      opacity: 0.6,
    }}
  >
    {/* Verified badge */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <VerifiedUserIcon sx={{ color: '#22C55E', fontSize: '1.875rem' }} />
      <Box>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.75rem',
            fontWeight: 700,
            color: '#fff',
            textTransform: 'uppercase',
            letterSpacing: '0.1em',
            mb: 0.25,
          }}
        >
          Verified Transaction
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.625rem',
            fontWeight: 700,
            color: '#CCCCCC',
          }}
        >
          Your review will be marked as a verified trade partner.
        </Typography>
      </Box>
    </Box>

    {/* Step dots */}
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#22C55E' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#333333' }} />
      <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: '#333333' }} />
    </Box>
  </Box>
);

export default VerifiedTransactionFooter;
