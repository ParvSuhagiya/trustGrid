import { Box, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import InsightsIcon from '@mui/icons-material/Insights';

const C = { accent: '#22C55E', muted: '#CCCCCC', outline: '#333333' };

const TrendRow = ({ icon, label, value, valueColor = '#fff' }) => (
  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
      <Box sx={{ color: '#fff', display: 'flex' }}>{icon}</Box>
      <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif" }}>
        {label}
      </Typography>
    </Box>
    <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: valueColor, fontFamily: "'Manrope', sans-serif" }}>
      {value}
    </Typography>
  </Box>
);

const MarketTrendsPanel = () => (
  <Box
    sx={{
      gridColumn: { xs: 'span 12', lg: 'span 4' },
      display: 'flex', flexDirection: 'column', gap: 3,
    }}
  >
    {/* Market Trends card */}
    <Box
      sx={{
        backgroundColor: '#000',
        border: `1px solid ${C.outline}`,
        p: 3, borderRadius: '10px',
      }}
    >
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
          fontSize: '0.75rem', textTransform: 'uppercase',
          letterSpacing: '0.1em', color: '#fff', mb: 3,
        }}
      >
        Market Trends
      </Typography>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <TrendRow
          icon={<TrendingUpIcon sx={{ fontSize: '1.2rem' }} />}
          label="Demand Peak"
          value="+12.5%"
          valueColor={C.accent}
        />
        <TrendRow
          icon={<CurrencyExchangeIcon sx={{ fontSize: '1.2rem' }} />}
          label="Avg Bid Price"
          value="$4,250"
        />
      </Box>
    </Box>

    {/* Premium Insight card */}
    <Box
      sx={{
        backgroundColor: '#000',
        border: `1px solid ${C.outline}`,
        p: 3, borderRadius: '10px',
        position: 'relative', overflow: 'hidden',
      }}
    >
      <Box sx={{ position: 'relative', zIndex: 1 }}>
        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 700,
            fontSize: '0.75rem', textTransform: 'uppercase',
            letterSpacing: '0.1em', color: C.accent, mb: 1,
          }}
        >
          Premium Insight
        </Typography>
        <Typography sx={{ fontSize: '0.75rem', color: C.muted, lineHeight: 1.7, fontFamily: "'Inter', sans-serif" }}>
          Your response time is 15% faster than competitors in this category. Use this as
          leverage during negotiations.
        </Typography>
      </Box>
      {/* Decorative watermark icon */}
      <InsightsIcon
        sx={{
          position: 'absolute', bottom: -12, right: -12,
          fontSize: '7rem', color: 'rgba(255,255,255,0.04)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  </Box>
);

export default MarketTrendsPanel;
