import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

/** Renders filled/empty star icons based on rating value (out of 5) */
const StarRating = ({ rating }) => (
  <Box sx={{ display: 'flex', color: C.accent, gap: 0.25 }}>
    {Array.from({ length: 5 }).map((_, i) =>
      i < Math.floor(rating)
        ? <StarIcon key={i} sx={{ fontSize: '0.875rem' }} />
        : <StarBorderIcon key={i} sx={{ fontSize: '0.875rem' }} />
    )}
  </Box>
);

/** Single review article card */
const ReviewCard = ({ review }) => {
  const { avatar, name, role, rating, text, tags } = review;
  return (
    <Box
      component="article"
      sx={{
        border: `1px solid ${C.outline}`, borderRadius: '10px', p: 4,
        '&:hover': { borderColor: '#fff' },
        transition: 'border-color 0.3s',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box
            sx={{
              width: 40, height: 40, borderRadius: '50%',
              overflow: 'hidden', border: `1px solid ${C.outline}`,
              flexShrink: 0,
            }}
          >
            <Box component="img" src={avatar} alt={name} sx={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box>
            <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>{name}</Typography>
            <Typography
              sx={{
                fontSize: '0.625rem', color: C.muted,
                textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700,
              }}
            >
              {role}
            </Typography>
          </Box>
        </Box>
        <StarRating rating={rating} />
      </Box>

      <Typography sx={{ color: '#fff', fontSize: '0.875rem', lineHeight: 1.7, fontStyle: 'italic', fontWeight: 500 }}>
        "{text}"
      </Typography>

      <Box sx={{ mt: 3, pt: 3, borderTop: `1px solid ${C.outline}`, display: 'flex', gap: 1.5, flexWrap: 'wrap' }}>
        {tags.map((tag) => (
          <Box
            key={tag}
            component="span"
            sx={{
              fontSize: '0.625rem', border: `1px solid ${C.outline}`,
              px: 1.5, py: 0.5, borderRadius: '9999px',
              color: C.muted, fontWeight: 700,
            }}
          >
            {tag}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

/**
 * SupplierReviews
 * Displays the "Customer Insights" section with coverage stats on the left
 * and review articles on the right.
 */
const SupplierReviews = ({ insights }) => {
  const { coveragePct, reviewFrequency, avgPerMonth, reviews } = insights;

  return (
    <Box
      component="section"
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', lg: '4fr 8fr' },
        gap: 8,
      }}
    >
      {/* ── Left: insight stats ── */}
      <Box>
        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 800,
            fontSize: '1.5rem', color: '#fff', textTransform: 'uppercase', mb: 2,
          }}
        >
          Customer Insights
        </Typography>
        <Typography sx={{ color: C.muted, fontSize: '0.875rem', mb: 4, lineHeight: 1.7, fontWeight: 700 }}>
          Direct feedback from procurement officers and engineering leads from our global partner network.
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {/* Verified Review Coverage */}
          <Box
            sx={{
              p: 2, borderRadius: '10px',
              border: `1px solid ${C.outline}`,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.75rem', color: C.muted,
                fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1,
              }}
            >
              Verified Review Coverage
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 800,
                fontSize: '1.5rem', color: '#fff',
              }}
            >
              {coveragePct}%
            </Typography>
            <Box sx={{ mt: 1, height: 6, backgroundColor: C.outline, borderRadius: '9999px', overflow: 'hidden' }}>
              <Box sx={{ height: '100%', backgroundColor: C.accent, width: `${coveragePct}%` }} />
            </Box>
          </Box>

          {/* Review Frequency */}
          <Box
            sx={{
              p: 2, borderRadius: '10px',
              border: `1px solid ${C.outline}`,
            }}
          >
            <Typography
              sx={{
                fontSize: '0.75rem', color: C.muted,
                fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', mb: 1,
              }}
            >
              Review Frequency
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 800,
                fontSize: '1.5rem', color: '#fff', textTransform: 'uppercase', letterSpacing: '-0.04em',
              }}
            >
              {reviewFrequency}
            </Typography>
            <Typography
              sx={{
                fontSize: '0.625rem', color: C.muted, mt: 0.5,
                textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700,
              }}
            >
              Avg {avgPerMonth} reviews / month
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Right: review cards ── */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {reviews.map((review) => (
          <ReviewCard key={review.name} review={review} />
        ))}
      </Box>
    </Box>
  );
};

export default SupplierReviews;
