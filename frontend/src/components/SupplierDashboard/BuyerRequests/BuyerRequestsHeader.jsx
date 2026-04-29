import { Box, Typography } from '@mui/material';

const C = { accent: '#22C55E', muted: '#CCCCCC', outline: '#333333' };

const StatBox = ({ label, value }) => (
  <Box
    sx={{
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      p: 2,
      borderRadius: '10px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-end',
    }}
  >
    <Typography
      sx={{
        fontSize: '0.625rem',
        textTransform: 'uppercase',
        letterSpacing: '0.15em',
        color: C.muted,
        fontWeight: 700,
        mb: 0.5,
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {label}
    </Typography>
    <Typography
      sx={{
        fontSize: '1.875rem',
        fontWeight: 700,
        color: '#fff',
        fontFamily: "'Manrope', sans-serif",
        lineHeight: 1,
      }}
    >
      {value}
    </Typography>
  </Box>
);

const BuyerRequestsHeader = () => (
  <Box
    sx={{
      mb: 6,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    }}
  >
    {/* Left: Title block */}
    <Box sx={{ maxWidth: '42rem' }}>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif",
          color: C.accent,
          textTransform: 'uppercase',
          letterSpacing: '0.2em',
          fontSize: '0.75rem',
          fontWeight: 700,
          mb: 1,
        }}
      >
        Inbound Pipeline
      </Typography>
      <Typography
        variant="h2"
        sx={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: '3rem',
          fontWeight: 700,
          color: '#fff',
          letterSpacing: '-0.02em',
          lineHeight: 1.1,
        }}
      >
        Buyer Requests
      </Typography>
      <Typography
        sx={{
          mt: 2,
          color: C.muted,
          fontFamily: "'Inter', sans-serif",
          lineHeight: 1.6,
          maxWidth: '36rem',
          fontSize: '0.9rem',
        }}
      >
        Review and manage incoming high-volume procurement requests. Accept to begin
        negotiation or reject to clear your current capacity.
      </Typography>
    </Box>

    {/* Right: Stat boxes */}
    <Box sx={{ display: 'flex', gap: 2 }}>
      <StatBox label="Active Queue" value="12" />
      <StatBox label="Est. Revenue" value="$1.2M" />
    </Box>
  </Box>
);

export default BuyerRequestsHeader;
