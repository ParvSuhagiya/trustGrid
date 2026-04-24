import { Box, Typography } from '@mui/material';

const C = { outline: '#333333', muted: '#CCCCCC' };

const DashboardHeader = () => (
  <Box sx={{ display: 'flex', flexDirection: 'column', mb: 5 }}>
    <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mb: 1 }}>
      <Typography
        component="h1"
        sx={{
          fontFamily: "'Manrope',sans-serif",
          fontSize: '2.25rem',
          fontWeight: 800,
          letterSpacing: '-0.04em',
          color: '#fff',
          lineHeight: 1,
        }}
      >
        Overview
      </Typography>
      <Box
        component="span"
        sx={{
          fontFamily: "'Manrope',sans-serif",
          fontSize: '0.625rem', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.15em',
          color: '#fff', px: 1.5, py: 0.5,
          border: `1px solid ${C.outline}`, borderRadius: '9999px',
          whiteSpace: 'nowrap',
        }}
      >
        Fiscal Q3 2024
      </Box>
    </Box>
    <Typography sx={{ color: C.muted, fontSize: '0.875rem', fontWeight: 700 }}>
      Real-time procurement performance and budget utilization.
    </Typography>
  </Box>
);

export default DashboardHeader;
