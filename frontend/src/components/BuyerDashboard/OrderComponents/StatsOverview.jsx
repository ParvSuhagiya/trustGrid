import { Box, Typography, Button, Grid } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import C from './colors';

/**
 * StatsOverview
 * Two stat cards displayed as a 12-column grid row:
 *  - Inventory Flow Analysis (7 cols on lg)
 *  - Priority Support (5 cols on lg)
 */
const StatsOverview = () => (
  <Grid container spacing={3} sx={{ mb: 6 }}>

    {/* ── Inventory Flow Analysis ── */}
    <Grid item xs={12} lg={7}>
      <Box
        sx={{
          backgroundColor: '#000',
          border: `1px solid ${C.outline}`,
          borderRadius: '8px',
          p: 4,
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontSize: '0.625rem', textTransform: 'uppercase',
              letterSpacing: '0.15em', color: C.primary, fontWeight: 700,
            }}
          >
            Active Demand
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '1.5rem', fontWeight: 700, color: '#fff', mt: 1,
            }}
          >
            Inventory Flow Analysis
          </Typography>
        </Box>

        <Box sx={{ mt: 4, display: 'flex', alignItems: 'flex-end', gap: 6 }}>
          {/* Stat: Pending */}
          <Box>
            <Typography sx={{ fontSize: '1.875rem', fontWeight: 900, color: '#fff' }}>
              24
            </Typography>
            <Typography
              sx={{
                fontSize: '0.75rem', textTransform: 'uppercase',
                letterSpacing: '0.08em', color: C.muted, fontWeight: 700, mt: 0.5,
              }}
            >
              Pending Validation
            </Typography>
          </Box>

          {/* Stat: Fulfilled */}
          <Box>
            <Typography sx={{ fontSize: '1.875rem', fontWeight: 900, color: '#fff' }}>
              142
            </Typography>
            <Typography
              sx={{
                fontSize: '0.75rem', textTransform: 'uppercase',
                letterSpacing: '0.08em', color: C.muted, fontWeight: 700, mt: 0.5,
              }}
            >
              Total Fulfilled
            </Typography>
          </Box>

          {/* Progress bar */}
          <Box sx={{ flex: 1 }}>
            <Box
              sx={{
                height: 6, width: '100%',
                backgroundColor: C.outline, borderRadius: '9999px', overflow: 'hidden',
              }}
            >
              <Box sx={{ height: '100%', width: '65%', backgroundColor: C.primary }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Grid>

    {/* ── Priority Support ── */}
    <Grid item xs={12} lg={5}>
      <Box
        sx={{
          backgroundColor: '#000',
          border: `1px solid ${C.outline}`,
          borderRadius: '8px',
          p: 4,
          height: '100%',
        }}
      >
        <Typography
          sx={{
            fontSize: '0.625rem', textTransform: 'uppercase',
            letterSpacing: '0.15em', color: C.muted, fontWeight: 700,
          }}
        >
          Priority Support
        </Typography>
        <Typography
          sx={{ mt: 2, color: C.muted, fontSize: '0.875rem', lineHeight: 1.7, fontWeight: 500 }}
        >
          Requests tagged as{' '}
          <Box
            component="span"
            sx={{
              color: '#fff', fontWeight: 700,
              textDecoration: 'underline', textDecorationColor: C.primary,
            }}
          >
            Critical Path
          </Box>{' '}
          are currently receiving prioritized vendor routing.
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon sx={{ fontSize: '0.875rem !important' }} />}
          sx={{
            mt: 3, p: 0,
            fontSize: '0.75rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            color: C.primary,
            transition: 'gap 0.2s',
            '&:hover': { backgroundColor: 'transparent', gap: 2 },
          }}
        >
          VIEW PRIORITY QUEUE
        </Button>
      </Box>
    </Grid>

  </Grid>
);

export default StatsOverview;
