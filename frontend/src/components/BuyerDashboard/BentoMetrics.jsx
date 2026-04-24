import { Box, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const card = {
  backgroundColor: '#000',
  border: `1px solid ${C.outline}`,
  borderRadius: '10px',
};

const label = {
  fontFamily: "'Manrope',sans-serif",
  fontWeight: 700,
  fontSize: '0.625rem',
  textTransform: 'uppercase',
  letterSpacing: '0.2em',
  color: C.muted,
  mb: 1,
};

const BentoMetrics = () => (
  <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 3, mb: 6 }}>

    {/* ── Large Budget Card (7 cols) ── */}
    <Box sx={{ ...card, gridColumn: { xs: 'span 12', lg: 'span 7' }, p: 4, position: 'relative', overflow: 'hidden' }}>
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography sx={label}>Total Budget Remaining</Typography>

        <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mt: 3 }}>
          <Typography
            component="h2"
            sx={{ fontFamily: "'Manrope',sans-serif", fontSize: { xs: '2.5rem', md: '3.75rem' }, fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}
          >
            $1,482,900.00
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, color: C.primary }}>
            <ArrowUpwardIcon sx={{ fontSize: '0.875rem', fontWeight: 700 }} />
            <Typography sx={{ color: C.primary, fontSize: '0.875rem', fontWeight: 700 }}>12.4% vs LY</Typography>
          </Box>
        </Box>

        {/* Progress bar */}
        <Box sx={{ mt: 4, width: '100%', backgroundColor: C.outline, borderRadius: '9999px', height: 6 }}>
          <Box sx={{ backgroundColor: '#fff', height: 6, borderRadius: '9999px', width: '68%' }} />
        </Box>
        <Box sx={{ mt: 1.5, display: 'flex', justifyContent: 'space-between' }}>
          {['EXPENDED: $640k', 'COMMITTED: $2.1M'].map((t) => (
            <Typography key={t} sx={{ fontFamily: "'Manrope',sans-serif", fontSize: '0.625rem', color: C.muted, fontWeight: 700, letterSpacing: '0.05em' }}>
              {t}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>

    {/* ── Secondary Metrics (5 cols) ── */}
    <Box sx={{ gridColumn: { xs: 'span 12', md: 'span 6', lg: 'span 5' }, display: 'flex', flexDirection: 'column', gap: 3 }}>

      {/* Pending Orders */}
      <Box sx={{ ...card, flex: 1, p: 3 }}>
        <Typography sx={label}>Pending Orders</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 1 }}>
          <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontSize: '2.25rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>24</Typography>
          <Box component="span" sx={{ border: `1px solid ${C.outline}`, color: '#fff', fontSize: '0.625rem', px: 1.5, py: 0.5, borderRadius: '9999px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
            4 Urgent
          </Box>
        </Box>
      </Box>

      {/* Cost Savings */}
      <Box sx={{ ...card, flex: 1, p: 3 }}>
        <Typography sx={label}>Cost Savings (MTD)</Typography>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 1 }}>
          <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontSize: '2.25rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>$12,450</Typography>
          <Typography sx={{ color: C.primary, fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>+ 8.2%</Typography>
        </Box>
      </Box>
    </Box>

  </Box>
);

export default BentoMetrics;
