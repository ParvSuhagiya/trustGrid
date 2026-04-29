import { useState } from 'react';
import { Box, Typography, Button, TextField } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import StarRatingSelector from './StarRatingSelector';

const TAGS = ['On-Time Delivery', 'Quality Packaging', 'Clear Comms', 'Accurate Billing'];

/**
 * RatingForm
 * The main interactive form on the right side of the Rate Supplier page.
 * Contains: star selector, review textarea, tag chips, and CTA buttons.
 *
 * Props:
 *   onDiscard — callback to navigate away / discard
 *   onSubmit  — callback called with { rating, review, tags }
 */
const RatingForm = ({ onDiscard, onSubmit }) => {
  const [rating, setRating] = useState(4);
  const [review, setReview] = useState('');
  const [selectedTags, setSelectedTags] = useState(['On-Time Delivery', 'Clear Comms']);

  const toggleTag = (tag) =>
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSubmit) onSubmit({ rating, review, tags: selectedTags });
  };

  return (
    <Box
      sx={{
        flex: 1,
        backgroundColor: '#000',
        border: '1px solid #333333',
        borderRadius: '8px',
        p: { xs: 4, md: 6 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Subtle background gradient accent */}
      <Box
        sx={{
          position: 'absolute',
          top: -80,
          right: -80,
          width: 280,
          height: 280,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(34,197,94,0.04) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 5, position: 'relative', zIndex: 1 }}
      >
        {/* ── Star Rating ── */}
        <StarRatingSelector rating={rating} onRatingChange={setRating} />

        {/* ── Detailed Review textarea ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: '0.625rem',
                textTransform: 'uppercase',
                letterSpacing: '0.15em',
                color: '#CCCCCC',
              }}
            >
              Detailed Review
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.625rem',
                fontWeight: 700,
                color: 'rgba(204,204,204,0.5)',
              }}
            >
              Minimum 50 characters
            </Typography>
          </Box>

          <TextField
            multiline
            rows={6}
            value={review}
            onChange={(e) => setReview(e.target.value)}
            placeholder="Share your thoughts..."
            variant="outlined"
            sx={{
              '& .MuiOutlinedInput-root': {
                backgroundColor: '#000',
                borderRadius: '8px',
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.9375rem',
                lineHeight: 1.7,
                color: '#fff',
                '& fieldset': { borderColor: '#333333' },
                '&:hover fieldset': { borderColor: '#555555' },
                '&.Mui-focused fieldset': { borderColor: '#22C55E', borderWidth: 1 },
              },
              '& .MuiOutlinedInput-input::placeholder': {
                color: 'rgba(204,204,204,0.3)',
                opacity: 1,
              },
            }}
          />
        </Box>

        {/* ── Tag Chips ── */}
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '0.625rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#CCCCCC',
            }}
          >
            Tag Key Highlights
          </Typography>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
            {TAGS.map((tag) => {
              const active = selectedTags.includes(tag);
              return (
                <Box
                  key={tag}
                  component="span"
                  onClick={() => toggleTag(tag)}
                  sx={{
                    px: 2,
                    py: 0.75,
                    borderRadius: '9999px',
                    border: active ? '1px solid #22C55E' : '1px solid #333333',
                    color: active ? '#22C55E' : '#CCCCCC',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    fontFamily: "'Inter', sans-serif",
                    cursor: 'pointer',
                    userSelect: 'none',
                    transition: 'all 0.15s',
                    '&:hover': {
                      borderColor: active ? '#22C55E' : '#fff',
                      color: active ? '#22C55E' : '#fff',
                    },
                  }}
                >
                  {tag}
                </Box>
              );
            })}
          </Box>
        </Box>

        {/* ── CTA ── */}
        <Box
          sx={{
            pt: 2,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderTop: '1px solid #1a1a1a',
          }}
        >
          <Button
            type="button"
            onClick={onDiscard}
            startIcon={<CloseIcon sx={{ fontSize: '1rem !important' }} />}
            sx={{
              color: '#CCCCCC',
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'none',
              p: 0,
              minWidth: 0,
              '&:hover': { color: '#fff', background: 'none' },
              transition: 'color 0.15s',
            }}
          >
            Discard Draft
          </Button>

          <Button
            type="submit"
            sx={{
              backgroundColor: '#fff',
              color: '#000',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 800,
              fontSize: '0.875rem',
              textTransform: 'none',
              letterSpacing: '-0.01em',
              px: 5,
              py: 1.75,
              borderRadius: '8px',
              '&:hover': { backgroundColor: '#CCCCCC' },
              '&:active': { transform: 'scale(0.97)' },
              transition: 'all 0.15s',
            }}
          >
            Submit Professional Review
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default RatingForm;
