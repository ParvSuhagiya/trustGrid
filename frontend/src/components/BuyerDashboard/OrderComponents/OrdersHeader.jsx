import { Box, Typography, Button } from '@mui/material';
import C from './colors';

/**
 * OrdersHeader
 * Page-level header with title, subtitle, and action buttons.
 */
const OrdersHeader = () => (
  <Box
    component="header"
    sx={{
      mb: 6,
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { md: 'flex-end' },
      justifyContent: 'space-between',
      gap: 3,
    }}
  >
    {/* Title + subtitle */}
    <Box>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif",
          fontSize: 'clamp(1.75rem, 3vw, 2.25rem)',
          fontWeight: 800,
          letterSpacing: '-0.03em',
          color: '#fff',
          mb: 1,
        }}
      >
        Buyer Requests
      </Typography>
      <Typography sx={{ color: C.muted, maxWidth: 480, fontWeight: 500 }}>
        Monitor and manage your active supply chain requisitions across global markets.
      </Typography>
    </Box>

    {/* Action buttons */}
    <Box sx={{ display: 'flex', gap: 1.5 }}>
      {['FILTER BY STATUS', 'EXPORT LOGS'].map((label) => (
        <Button
          key={label}
          variant="outlined"
          sx={{
            px: 3, py: 1.25,
            fontSize: '0.75rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.05em',
            border: `1px solid ${C.outline}`, color: '#fff', borderRadius: '8px',
            '&:hover': { backgroundColor: '#fff', color: '#000', borderColor: '#fff' },
          }}
        >
          {label}
        </Button>
      ))}
    </Box>
  </Box>
);

export default OrdersHeader;
