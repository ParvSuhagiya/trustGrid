import { Box, Typography } from '@mui/material';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

/**
 * InventoryPageHeader
 * Top section of the Manage Supplies page.
 * Shows the page title/description on the left and two stat cards on the right.
 */
const InventoryPageHeader = () => (
  <Box
    component="header"
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { xs: 'flex-start', md: 'flex-end' },
      justifyContent: 'space-between',
      gap: 4,
      mb: 6,
    }}
  >
    {/* Title block */}
    <Box>
      <Typography
        component="h1"
        sx={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 700,
          fontSize: { xs: '2rem', md: '2.5rem' },
          letterSpacing: '-0.03em',
          color: '#fff',
          textTransform: 'uppercase',
          mb: 1,
          lineHeight: 1.05,
        }}
      >
        Manage Supplies
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif",
          color: C.muted,
          maxWidth: 420,
          fontWeight: 500,
          fontSize: '0.9375rem',
          lineHeight: 1.6,
        }}
      >
        Real-time inventory tracking and resource allocation for global industrial logistics.
      </Typography>
    </Box>

    {/* Stat cards */}
    <Box sx={{ display: 'flex', gap: 2, flexShrink: 0 }}>
      {/* Total Capacity */}
      <Box
        sx={{
          px: 3,
          py: 2.5,
          backgroundColor: '#000',
          border: `1px solid ${C.outline}`,
          borderLeft: `4px solid ${C.accent}`,
          borderRadius: '8px',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.625rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: C.muted,
            mb: 0.75,
          }}
        >
          Total Capacity
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.75 }}>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '1.5rem',
              color: '#fff',
            }}
          >
            42,850
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              fontWeight: 700,
              color: C.accent,
            }}
          >
            KG
          </Typography>
        </Box>
      </Box>

      {/* Pending Orders */}
      <Box
        sx={{
          px: 3,
          py: 2.5,
          backgroundColor: '#000',
          border: `1px solid ${C.outline}`,
          borderLeft: '4px solid #fff',
          borderRadius: '8px',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.625rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.15em',
            color: C.muted,
            mb: 0.75,
          }}
        >
          Pending Orders
        </Typography>
        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '1.5rem',
            color: '#fff',
          }}
        >
          12
        </Typography>
      </Box>
    </Box>
  </Box>
);

export default InventoryPageHeader;
