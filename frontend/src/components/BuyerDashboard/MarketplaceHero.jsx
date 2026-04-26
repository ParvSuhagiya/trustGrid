import { Box, Typography, Button } from '@mui/material';
import GridViewIcon from '@mui/icons-material/GridView';
import ListIcon from '@mui/icons-material/List';
import TuneIcon from '@mui/icons-material/Tune';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const FEATURED_IMG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuAPrMFUqMtCMKHuKR-gffC9HYr_iij52Nvh8dp4S6mNRdP_d53gMnLSd6N1K1akZwKHlpOHh81CeE2-CqBexS_VvGVMeaZHh9dIav7iXI765etO82oiNqk_6pAx_dyO2yePiUOYSX0fqwUiAITFl1rLadQ-GrxFh44Aibm-_qdqH72TKUvs2dmxqvph56FGSySNboZiZpK-yk6DsjZx6xxyM7F2lB6DE2w4hrKGgG6DfhtMHHaDCsDybFksdCb5u_J06DU1eY3-5-uZ';

/** Five filled stars */
const StarRating = () => (
  <Box sx={{ display: 'flex', color: '#fff' }}>
    {[...Array(5)].map((_, i) => (
      <Box key={i} component="span" className="material-symbols-outlined"
        sx={{ fontSize: '0.875rem', fontVariationSettings: "'FILL' 1" }}>
        star
      </Box>
    ))}
  </Box>
);

const MarketplaceHero = () => (
  <Box
    component="header"
    sx={{
      mb: 6, display: 'flex',
      flexDirection: { xs: 'column', md: 'row' },
      alignItems: { md: 'flex-end' },
      justifyContent: 'space-between', gap: 3,
    }}
  >
    {/* Left copy */}
    <Box sx={{ maxWidth: 560 }}>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
          fontSize: '0.875rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: C.accent, mb: 1, display: 'block',
        }}
      >
        Premium Directory
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 800,
          fontSize: { xs: '2.5rem', md: '3.25rem' }, letterSpacing: '-0.03em',
          color: '#fff', lineHeight: 1.1, mb: 2,
        }}
      >
        Verified Suppliers
      </Typography>
      <Typography sx={{ color: C.muted, fontSize: '1.125rem', lineHeight: 1.6, fontWeight: 500 }}>
        Access our globally curated network of Tier-1 manufacturers and logistics partners.
        Precision-vetted for quality and reliability.
      </Typography>
    </Box>

    {/* Right controls */}
    <Box sx={{ display: 'flex', gap: 2, flexShrink: 0 }}>
      <Button
        startIcon={<TuneIcon sx={{ fontSize: '1.25rem !important' }} />}
        sx={{
          px: 3, py: 1.5, backgroundColor: '#000',
          border: `1px solid ${C.outline}`, color: '#fff',
          fontWeight: 700, borderRadius: '8px', textTransform: 'none',
          fontSize: '0.875rem',
          '&:hover': { borderColor: '#fff' },
        }}
      >
        Advanced Filters
      </Button>

      {/* Grid / List toggle */}
      <Box
        sx={{
          display: 'flex', p: 0.5, backgroundColor: '#000',
          border: `1px solid ${C.outline}`, borderRadius: '8px',
        }}
      >
        <Box
          sx={{
            p: 1, backgroundColor: '#fff', color: '#000',
            borderRadius: '6px', display: 'flex', alignItems: 'center', cursor: 'pointer',
          }}
        >
          <GridViewIcon sx={{ fontSize: '1.25rem' }} />
        </Box>
        <Box
          sx={{
            p: 1, color: C.muted, borderRadius: '6px',
            display: 'flex', alignItems: 'center', cursor: 'pointer',
            '&:hover': { color: '#fff' },
          }}
        >
          <ListIcon sx={{ fontSize: '1.25rem' }} />
        </Box>
      </Box>
    </Box>
  </Box>
);

const FeaturedBentoSection = () => (
  <Box
    sx={{
      display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)',
      gap: 4, mb: 6,
    }}
  >
    {/* Featured Supplier Spotlight — 8 cols */}
    <Box
      sx={{
        gridColumn: { xs: 'span 12', lg: 'span 8' },
        position: 'relative', borderRadius: '10px', overflow: 'hidden',
        minHeight: 340, border: `1px solid ${C.outline}`,
        '&:hover img': { transform: 'scale(1.05)' },
      }}
    >
      <Box
        component="img"
        src={FEATURED_IMG}
        alt="Industrial manufacturing facility"
        sx={{
          position: 'absolute', inset: 0, width: '100%', height: '100%',
          objectFit: 'cover', transition: 'transform 0.7s ease',
        }}
      />
      {/* Gradient */}
      <Box
        sx={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.4) 50%, transparent 100%)',
        }}
      />
      {/* Content */}
      <Box
        sx={{
          position: 'absolute', bottom: 0, left: 0, p: 4,
          width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
        }}
      >
        <Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 1.5 }}>
            <Typography
              component="span"
              sx={{
                backgroundColor: C.accent, color: '#000',
                px: 1.5, py: 0.5, borderRadius: '9999px',
                fontSize: '0.625rem', fontWeight: 700,
                textTransform: 'uppercase', letterSpacing: '0.1em',
              }}
            >
              Featured Partner
            </Typography>
            <StarRating />
          </Box>
          <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: '1.875rem', color: '#fff', mb: 1 }}>
            Omni-Tech Manufacturing
          </Typography>
          <Typography sx={{ color: C.muted, fontWeight: 700, maxWidth: 400 }}>
            Leading the shift to sustainable electronics production with zero-waste facilities.
          </Typography>
        </Box>
        <Button
          sx={{
            px: 3, py: 1.5, backgroundColor: '#fff', color: '#000',
            fontWeight: 700, borderRadius: '6px', textTransform: 'none',
            flexShrink: 0,
            '&:hover': { backgroundColor: C.accent },
          }}
        >
          View Portfolio
        </Button>
      </Box>
    </Box>

    {/* Stats + Categories — 4 cols */}
    <Box
      sx={{
        gridColumn: { xs: 'span 12', lg: 'span 4' },
        display: 'grid', gridTemplateRows: '1fr 1fr', gap: 4,
      }}
    >
      {/* Active Network stat */}
      <Box
        sx={{
          backgroundColor: '#000', borderRadius: '10px', p: 3,
          border: `1px solid ${C.outline}`, borderLeft: `4px solid ${C.accent}`,
          display: 'flex', flexDirection: 'column', justifyContent: 'center',
        }}
      >
        <Typography sx={{ color: C.muted, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, mb: 0.5 }}>
          Active Network
        </Typography>
        <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontWeight: 900, fontSize: '2.5rem', color: '#fff' }}>
          2,840+
        </Typography>
        <Typography sx={{ color: C.muted, fontSize: '0.875rem', mt: 1, fontWeight: 700 }}>
          Verified global suppliers active today.
        </Typography>
      </Box>

      {/* Trending Categories */}
      <Box
        sx={{
          backgroundColor: '#000', border: `1px solid ${C.outline}`,
          borderRadius: '10px', p: 3,
          display: 'flex', flexDirection: 'column', gap: 2,
        }}
      >
        <Typography sx={{ color: C.muted, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
          Trending Categories
        </Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
          {['Aerospace', 'Renewables', 'Bio-Tech', 'AI Hardware'].map((cat) => (
            <Typography
              key={cat}
              component="span"
              sx={{
                border: `1px solid ${C.outline}`, color: '#fff',
                px: 1.5, py: 0.75, borderRadius: '9999px',
                fontSize: '0.75rem', fontWeight: 700,
                cursor: 'pointer', transition: 'border-color 0.2s',
                '&:hover': { borderColor: '#fff' },
              }}
            >
              {cat}
            </Typography>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

export { MarketplaceHero, FeaturedBentoSection };
