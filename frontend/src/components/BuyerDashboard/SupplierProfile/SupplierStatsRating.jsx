import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

/** A single progress-bar metric row */
const MetricBar = ({ label, value, pct }) => (
  <Box>
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 0.75 }}>
      <Typography sx={{ fontSize: '0.75rem', color: '#fff', fontWeight: 700 }}>{label}</Typography>
      <Typography sx={{ fontSize: '0.75rem', color: C.accent, fontWeight: 700 }}>{value}</Typography>
    </Box>
    <Box sx={{ height: 4, backgroundColor: C.outline, borderRadius: '9999px', overflow: 'hidden' }}>
      <Box sx={{ height: '100%', backgroundColor: C.accent, width: pct, borderRadius: '9999px' }} />
    </Box>
  </Box>
);

/**
 * SupplierStatsRating
 * Displays the aggregate rating card and the performance metrics panel side by side.
 */
const SupplierStatsRating = ({ stats }) => {
  const { aggregateRating, ratingBasis, metrics } = stats;

  return (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: '4fr 8fr' },
        gap: 3,
        mb: 16,
      }}
    >
      {/* ── Aggregate Rating Card ── */}
      <Box
        sx={{
          border: `1px solid ${C.outline}`,
          borderRadius: '10px',
          p: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography
            sx={{
              fontSize: '0.625rem', fontFamily: "'Manrope', sans-serif",
              fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: C.muted,
            }}
          >
            Aggregate Rating
          </Typography>
          <StarIcon sx={{ color: C.accent, fontSize: '1.25rem' }} />
        </Box>

        <Box sx={{ mt: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 900,
              fontSize: '4.5rem', color: '#fff', letterSpacing: '-0.04em',
              lineHeight: 1,
            }}
          >
            {aggregateRating}
          </Typography>
          <Typography sx={{ color: C.muted, fontSize: '0.875rem', mt: 1, fontWeight: 700 }}>
            {ratingBasis}
          </Typography>
        </Box>
      </Box>

      {/* ── Performance Metrics Card ── */}
      <Box
        sx={{
          border: `1px solid ${C.outline}`,
          borderRadius: '10px',
          p: 4,
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 5 }}>
          <Typography
            sx={{
              fontSize: '0.625rem', fontFamily: "'Manrope', sans-serif",
              fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: C.muted,
            }}
          >
            Performance Metrics
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.75 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.accent }} />
            <Typography
              sx={{ fontSize: '0.625rem', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}
            >
              Industry Avg
            </Typography>
          </Box>
        </Box>

        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' },
            gap: 4,
          }}
        >
          {metrics.map((m) => (
            <MetricBar key={m.label} label={m.label} value={m.value} pct={m.pct} />
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default SupplierStatsRating;
