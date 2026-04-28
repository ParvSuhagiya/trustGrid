import { Box, Typography, Button } from '@mui/material';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

/**
 * SupplierProfileHero
 * Renders the top hero section: supplier logo image, name, ID, description,
 * and the CTA action buttons (Request Supply / Rate Supplier).
 */
const SupplierProfileHero = ({ supplier }) => {
  const {
    logoUrl,
    name,
    tier,
    supplierId,
    tagline,
  } = supplier;

  return (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '8fr 4fr' },
        gap: 8,
        mb: 16,
        alignItems: 'flex-end',
      }}
    >
      {/* ── Left: logo + meta ── */}
      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, gap: 5, alignItems: { xs: 'flex-start', md: 'flex-end' } }}>
        {/* Logo with verified badge */}
        <Box sx={{ position: 'relative', flexShrink: 0 }}>
          <Box
            sx={{
              width: 192, height: 192, borderRadius: '10px',
              overflow: 'hidden', border: `1px solid ${C.outline}`,
            }}
          >
            <Box
              component="img"
              src={logoUrl}
              alt={`${name} logo`}
              sx={{
                width: '100%', height: '100%', objectFit: 'cover',
                filter: 'grayscale(1)',
                transition: 'filter 0.7s',
                '&:hover': { filter: 'grayscale(0)' },
              }}
            />
          </Box>
          <Box
            sx={{
              position: 'absolute', bottom: -16, right: -16,
              backgroundColor: C.accent, px: 1.5, py: 0.5,
              borderRadius: '9999px', color: '#000',
              fontWeight: 700, fontSize: '0.625rem',
              letterSpacing: '0.1em', textTransform: 'uppercase',
            }}
          >
            Verified
          </Box>
        </Box>

        {/* Name & meta */}
        <Box sx={{ flex: 1 }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1 }}>
            <Box
              sx={{
                px: 1, py: 0.25, borderRadius: '9999px',
                border: `1px solid ${C.outline}`,
                color: C.muted, fontSize: '0.625rem',
                fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em',
              }}
            >
              {tier}
            </Box>
            <Typography sx={{ color: C.muted, fontSize: '0.75rem', fontWeight: 700 }}>
              ID: {supplierId}
            </Typography>
          </Box>

          <Typography
            variant="h2"
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: { xs: '2.5rem', md: '3rem' },
              letterSpacing: '-0.04em',
              color: '#fff',
              textTransform: 'uppercase',
              mb: 2,
              lineHeight: 1,
            }}
          >
            {name}
          </Typography>

          <Typography
            sx={{
              color: C.muted, fontSize: '1.125rem',
              lineHeight: 1.6, maxWidth: 560, fontWeight: 500,
            }}
          >
            {tagline}
          </Typography>
        </Box>
      </Box>

      {/* ── Right: CTA buttons ── */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          fullWidth
          sx={{
            py: 2, backgroundColor: '#fff', color: '#000',
            fontFamily: "'Manrope', sans-serif", fontWeight: 800,
            fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            borderRadius: '8px',
            '&:hover': { backgroundColor: '#e5e5e5' },
            '&:active': { transform: 'scale(0.95)' },
            transition: 'all 0.15s',
          }}
        >
          Request Supply
        </Button>
        <Button
          fullWidth
          variant="outlined"
          sx={{
            py: 2, border: `1px solid ${C.outline}`,
            color: '#fff', fontFamily: "'Manrope', sans-serif",
            fontWeight: 800, fontSize: '0.875rem',
            textTransform: 'uppercase', letterSpacing: '0.1em',
            borderRadius: '8px',
            '&:hover': { backgroundColor: 'rgba(255,255,255,0.05)', borderColor: '#555' },
            transition: 'all 0.15s',
          }}
        >
          Rate Supplier
        </Button>
      </Box>
    </Box>
  );
};

export default SupplierProfileHero;
