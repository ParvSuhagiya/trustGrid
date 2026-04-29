import { Box, Typography } from '@mui/material';
import DownloadIcon from '@mui/icons-material/Download';

const C = { muted: '#CCCCCC', outline: '#333333' };

const MarketplaceStatsCard = ({
  growth = '12%',
  growthLabel = 'Monthly Growth',
  insight = 'The marketplace is currently experiencing an influx of mid-market manufacturing firms.',
}) => (
  <Box
    sx={{
      gridColumn: { xs: 'span 12', md: 'span 4' },
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      borderRadius: '10px',
      p: 4,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      position: 'relative',
      overflow: 'hidden',
    }}
  >
    <Box>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif",
          fontWeight: 900, fontSize: '2.5rem',
          color: '#fff', lineHeight: 1,
        }}
      >
        {growth}
      </Typography>
      <Typography
        sx={{
          color: C.muted, fontSize: '0.8rem',
          fontWeight: 700, textTransform: 'uppercase',
          mt: 0.5, fontFamily: "'Manrope', sans-serif",
          letterSpacing: '0.05em',
        }}
      >
        {growthLabel}
      </Typography>
    </Box>

    <Box sx={{ mt: 'auto' }}>
      <Typography
        sx={{
          color: C.muted, fontSize: '0.75rem',
          lineHeight: 1.7, fontFamily: "'Inter', sans-serif",
          fontWeight: 500,
        }}
      >
        {insight}
      </Typography>
      <Box
        component="a"
        href="#"
        sx={{
          display: 'inline-flex', alignItems: 'center', gap: 0.5,
          mt: 2, color: '#fff',
          border: `1px solid ${C.outline}`,
          px: 2, py: 1, borderRadius: '6px',
          fontSize: '0.7rem', fontWeight: 700,
          fontFamily: "'Manrope', sans-serif",
          textDecoration: 'none', textTransform: 'uppercase',
          transition: 'all 0.2s',
          '&:hover': { backgroundColor: '#fff', color: '#000' },
        }}
      >
        Download Report
        <DownloadIcon sx={{ fontSize: '0.85rem' }} />
      </Box>
    </Box>
  </Box>
);

export default MarketplaceStatsCard;
