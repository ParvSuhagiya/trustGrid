import { Box, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const WAREHOUSE_IMG =
  'https://lh3.googleusercontent.com/aida-public/AB6AXuAM7SU3zd8qLqcWBzdT7yFrMuBQl70UYoDikEpG2DY66Qt3NOIfudn4zd7KCM55KeAYUMeXNi_nez6ZLeWqIaxHfqwPS7IS3V96NSoX61kmyH7O7XDOwz3MM4tIaR_uNqM0eRjbdTFYAaF4_Qgp6kglXs4Pwv2hOPW3hC6KheZCJOlvEuqD9DCagr7elEZWKxss6lT4k73VY00ktvack9ruvrW2vmOxqLG1QFBkqih2xei4jOmZQVEvx8ky6RUzatnFYfRGajU2k_MQ';

const MarketIntelligence = () => (
  <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 5' } }}>
    {/* Section Header */}
    <Box sx={{ mb: 3 }}>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
          fontSize: '1.25rem', color: '#fff', textTransform: 'uppercase',
        }}
      >
        MARKET INTELLIGENCE
      </Typography>
    </Box>

    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {/* High Demand Alert Card */}
      <Box
        sx={{
          backgroundColor: '#000', p: 3, borderRadius: '10px',
          border: `1px solid ${C.outline}`,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 2 }}>
          {/* Icon Box */}
          <Box
            sx={{
              width: 48, height: 48, borderRadius: '10px',
              border: `1px solid ${C.outline}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', flexShrink: 0,
            }}
          >
            <TrendingUpIcon />
          </Box>
          <Box>
            <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff', textTransform: 'uppercase' }}>
              HIGH DEMAND ALERT
            </Typography>
            <Typography
              sx={{
                fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase',
                letterSpacing: '0.1em', color: C.muted, mt: 0.5,
              }}
            >
              RAW MATERIALS SECTOR
            </Typography>
          </Box>
        </Box>
        <Typography
          sx={{
            fontSize: '0.875rem', color: C.muted, fontWeight: 700,
            lineHeight: 1.7,
          }}
        >
          Demand for Copper Conductors is projected to rise by 22% in Q3. Consider adjusting your
          inventory levels to capitalize on premium pricing tiers.
        </Typography>
      </Box>

      {/* Logistics Image Card */}
      <Box
        sx={{
          position: 'relative', borderRadius: '10px',
          overflow: 'hidden', aspectRatio: '16/7',
          border: `1px solid ${C.outline}`,
        }}
      >
        <Box
          component="img"
          src={WAREHOUSE_IMG}
          alt="Warehouse"
          sx={{
            width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8,
            display: 'block',
          }}
        />
        {/* Gradient overlay */}
        <Box
          sx={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, #000 0%, transparent 60%)',
          }}
        />
        {/* Text overlay */}
        <Box sx={{ position: 'absolute', bottom: 16, left: 24 }}>
          <Typography
            component="span"
            sx={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 700,
              fontSize: '0.5625rem', textTransform: 'uppercase',
              letterSpacing: '0.1em', color: '#fff',
              border: '1px solid #fff', px: 1, py: 0.5, borderRadius: '4px',
            }}
          >
            LOGISTICS UPDATE
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 700,
              fontSize: '1.125rem', color: '#fff', textTransform: 'uppercase', mt: 1,
            }}
          >
            NEW PORT CLEARANCE API
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default MarketIntelligence;
