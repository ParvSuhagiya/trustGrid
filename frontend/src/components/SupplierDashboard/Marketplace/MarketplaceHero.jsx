import { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';

const C = { accent: '#22C55E', muted: '#CCCCCC', outline: '#333333' };
const TABS = ['Active', 'Pending', 'Archived'];

const MarketplaceHero = () => {
  const [active, setActive] = useState(0);

  return (
    <Box
      sx={{
        mb: 6,
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        justifyContent: 'space-between',
        alignItems: { xs: 'flex-start', md: 'flex-end' },
        gap: 3,
      }}
    >
      {/* Title block */}
      <Box sx={{ maxWidth: '42rem' }}>
        <Typography
          sx={{
            fontFamily: "'Inter', sans-serif",
            color: C.accent,
            fontSize: '0.625rem',
            textTransform: 'uppercase',
            letterSpacing: '0.2em',
            fontWeight: 700,
            mb: 1,
          }}
        >
          Registry Hub
        </Typography>
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '2.25rem',
            fontWeight: 900,
            letterSpacing: '-0.03em',
            color: '#fff',
            textTransform: 'uppercase',
            lineHeight: 1.1,
          }}
        >
          Active Buyers{' '}
          <Box
            component="span"
            sx={{ color: C.muted, fontSize: '1.5rem', fontWeight: 300, ml: 1 }}
          >
            248 Total
          </Box>
        </Typography>
        <Typography
          sx={{
            color: C.muted,
            fontFamily: "'Inter', sans-serif",
            mt: 2,
            maxWidth: '32rem',
            lineHeight: 1.7,
            fontSize: '0.875rem',
          }}
        >
          Access the verified list of procurement officers and verified corporate entities
          currently engaging within the ecosystem.
        </Typography>
      </Box>

      {/* Filter tabs */}
      <Box
        sx={{
          display: 'flex',
          gap: 0.5,
          backgroundColor: '#000',
          border: `1px solid ${C.outline}`,
          p: 0.5,
          borderRadius: '8px',
        }}
      >
        {TABS.map((tab, i) => (
          <Button
            key={tab}
            onClick={() => setActive(i)}
            sx={{
              px: 2, py: 1,
              borderRadius: '6px',
              fontSize: '0.7rem',
              fontWeight: 700,
              fontFamily: "'Manrope', sans-serif",
              textTransform: 'none',
              minWidth: 0,
              backgroundColor: active === i ? '#fff' : 'transparent',
              color: active === i ? '#000' : C.muted,
              '&:hover': {
                backgroundColor: active === i ? '#e5e5e5' : 'transparent',
                color: active === i ? '#000' : '#fff',
              },
            }}
          >
            {tab}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default MarketplaceHero;
