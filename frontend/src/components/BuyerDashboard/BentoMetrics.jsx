import { Box, Typography } from '@mui/material';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useState, useEffect } from 'react';
import { apiFetch } from '../../utils/api';

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

const BentoMetrics = () => {
  const [metrics, setMetrics] = useState({
    totalRequests: 0,
    activeRequests: 0,
    completedRequests: 0,
    totalSpent: 0
  });

  useEffect(() => {
    const fetchMetrics = async () => {
      try {
        const data = await apiFetch('/api/dashboard/metrics');
        setMetrics(data);
      } catch (error) {
        console.error('Failed to fetch metrics:', error);
      }
    };
    fetchMetrics();
  }, []);

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 3, mb: 6 }}>

      {/* ── Large Budget Card (7 cols) ── */}
      <Box sx={{ ...card, gridColumn: { xs: 'span 12', lg: 'span 7' }, p: 4, position: 'relative', overflow: 'hidden' }}>
        <Box sx={{ position: 'relative', zIndex: 1 }}>
          <Typography sx={label}>Total Budget Spent</Typography>

          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 2, mt: 3 }}>
            <Typography
              component="h2"
              sx={{ fontFamily: "'Manrope',sans-serif", fontSize: { xs: '2.5rem', md: '3.75rem' }, fontWeight: 800, letterSpacing: '-0.04em', color: '#fff', lineHeight: 1 }}
            >
              ${metrics.totalSpent.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.25, color: C.primary }}>
              <ArrowUpwardIcon sx={{ fontSize: '0.875rem', fontWeight: 700 }} />
              <Typography sx={{ color: C.primary, fontSize: '0.875rem', fontWeight: 700 }}>Active</Typography>
            </Box>
          </Box>

          {/* Progress bar */}
          <Box sx={{ mt: 4, width: '100%', backgroundColor: C.outline, borderRadius: '9999px', height: 6 }}>
            <Box sx={{ backgroundColor: '#fff', height: 6, borderRadius: '9999px', width: metrics.totalRequests > 0 ? `${(metrics.completedRequests / metrics.totalRequests) * 100}%` : '0%' }} />
          </Box>
          <Box sx={{ mt: 1.5, display: 'flex', justifyContent: 'space-between' }}>
            {[`COMPLETED REQS: ${metrics.completedRequests}`, `TOTAL REQS: ${metrics.totalRequests}`].map((t) => (
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
          <Typography sx={label}>Active Requests</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 1 }}>
            <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontSize: '2.25rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{metrics.activeRequests}</Typography>
            <Box component="span" sx={{ border: `1px solid ${C.outline}`, color: '#fff', fontSize: '0.625rem', px: 1.5, py: 0.5, borderRadius: '9999px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              Pending Action
            </Box>
          </Box>
        </Box>

        {/* Cost Savings */}
        <Box sx={{ ...card, flex: 1, p: 3 }}>
          <Typography sx={label}>Total Requests Created</Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mt: 1 }}>
            <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontSize: '2.25rem', fontWeight: 700, color: '#fff', lineHeight: 1 }}>{metrics.totalRequests}</Typography>
            <Typography sx={{ color: C.primary, fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Lifetime</Typography>
          </Box>
        </Box>
      </Box>

    </Box>
  );
};

export default BentoMetrics;
