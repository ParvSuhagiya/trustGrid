import { Box, Typography } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const C = { outline: '#333333', muted: '#CCCCCC' };

const SmartInsights = () => (
  <Box sx={{ backgroundColor: '#000', border: `1px solid ${C.outline}`, borderRadius: '10px', p: 2.5 }}>
    {/* Header */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 2 }}>
      <AutoAwesomeIcon sx={{ color: '#fff', fontSize: '1.25rem' }} />
      <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>Smart Insights</Typography>
    </Box>

    {/* Body */}
    <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700, lineHeight: 1.6, mb: 2 }}>
      Based on your August spending, we've identified potential 15% savings in{' '}
      <Box component="b" sx={{ color: '#fff' }}>Cloud Assets</Box>
      {' '}by migrating to bundled contracts.
    </Typography>

    {/* Link */}
    <Box
      component="a"
      href="#"
      sx={{
        display: 'inline-flex', alignItems: 'center', gap: 0.5,
        fontSize: '0.75rem', fontWeight: 700, color: '#fff',
        textDecoration: 'none',
        '&:hover .arrow': { transform: 'translateX(4px)' },
      }}
    >
      Explore bundles
      <ArrowForwardIcon className="arrow" sx={{ fontSize: '1rem', transition: 'transform 0.2s' }} />
    </Box>
  </Box>
);

export default SmartInsights;
