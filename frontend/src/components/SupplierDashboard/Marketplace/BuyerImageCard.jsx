import { Box, Typography } from '@mui/material';

const C = { muted: '#CCCCCC', outline: '#333333' };

/**
 * Horizontal buyer card with a thumbnail image (col-span-6).
 */
const BuyerImageCard = ({ company, industry, imgSrc, imgAlt, contactName, location }) => (
  <Box
    sx={{
      gridColumn: { xs: 'span 12', md: 'span 6' },
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      borderRadius: '10px',
      p: 3,
      transition: 'border-color 0.2s',
      '&:hover': { borderColor: C.muted },
    }}
  >
    <Box sx={{ display: 'flex', gap: 3 }}>
      {/* Thumbnail */}
      <Box
        sx={{
          width: 80, height: 80, borderRadius: '8px',
          overflow: 'hidden', flexShrink: 0,
          border: `1px solid ${C.outline}`,
        }}
      >
        <Box
          component="img"
          src={imgSrc}
          alt={imgAlt}
          sx={{
            width: '100%', height: '100%', objectFit: 'cover',
            filter: 'grayscale(1)', opacity: 0.5,
            transition: 'all 0.3s',
            '&:hover': { opacity: 0.8 },
          }}
        />
      </Box>

      {/* Info */}
      <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 700,
              fontSize: '1.1rem', color: '#fff',
              textTransform: 'uppercase', lineHeight: 1,
            }}
          >
            {company}
          </Typography>
          <Typography sx={{ fontSize: '0.7rem', color: C.muted, fontWeight: 700, mt: 1, fontFamily: "'Inter', sans-serif" }}>
            {industry}
          </Typography>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Typography sx={{ fontSize: '0.7rem', color: C.muted, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
            <Box component="span" sx={{ color: '#fff' }}>Contact:</Box> {contactName}
          </Typography>
          <Box sx={{ width: 4, height: 4, borderRadius: '50%', backgroundColor: C.outline }} />
          <Typography sx={{ fontSize: '0.7rem', color: C.muted, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
            {location}
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default BuyerImageCard;
