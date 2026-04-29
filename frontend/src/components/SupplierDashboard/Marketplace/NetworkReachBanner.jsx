import { Box, Typography, IconButton } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const C = { accent: '#22C55E', muted: '#CCCCCC', outline: '#333333' };

const stats = [
  { label: 'Global Hubs', value: '12' },
  { label: 'Transit Partners', value: '84' },
  { label: 'Settlement Speed', value: '2.4 days' },
];

const NetworkReachBanner = () => (
  <Box
    sx={{
      gridColumn: 'span 12',
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      borderRadius: '10px',
      p: 4,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      overflow: 'hidden',
      position: 'relative',
    }}
  >
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 6, zIndex: 1 }}>
      {/* Title */}
      <Box sx={{ flexShrink: 0 }}>
        <Typography sx={{ fontSize: '0.625rem', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.2em', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
          Data Summary
        </Typography>
        <Typography sx={{ fontSize: '1.25rem', fontWeight: 700, color: '#fff', textTransform: 'uppercase', fontFamily: "'Manrope', sans-serif" }}>
          Network Reach
        </Typography>
      </Box>

      {/* Stat columns */}
      <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 6 }}>
        {stats.map(({ label, value }) => (
          <Box key={label} sx={{ borderLeft: `1px solid ${C.outline}`, pl: 3 }}>
            <Typography sx={{ fontSize: '0.625rem', color: C.muted, textTransform: 'uppercase', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
              {label}
            </Typography>
            <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', fontFamily: "'Manrope', sans-serif" }}>
              {value}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>

    {/* CTA button */}
    <IconButton
      sx={{
        backgroundColor: '#fff', color: '#000',
        borderRadius: '50%', p: 1.5,
        zIndex: 1,
        '&:hover': { backgroundColor: '#e5e5e5', opacity: 0.9 },
        transition: 'all 0.3s',
      }}
    >
      <ChevronRightIcon />
    </IconButton>
  </Box>
);

export default NetworkReachBanner;
