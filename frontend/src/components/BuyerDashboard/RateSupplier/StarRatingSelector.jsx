import { useState } from 'react';
import { Box, Typography } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

/**
 * StarRatingSelector
 * Interactive 5-star rating widget. Tracks hovered and selected (committed) ratings.
 * Calls onRatingChange(value) whenever the user clicks a star.
 *
 * Props:
 *   rating         — current committed rating (number 1-5)
 *   onRatingChange — callback fn(newRating)
 */
const StarRatingSelector = ({ rating, onRatingChange }) => {
  const [hovered, setHovered] = useState(0);

  const displayed = hovered || rating;

  return (
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
        Select Rating
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        {[1, 2, 3, 4, 5].map((star) => (
          <Box
            key={star}
            component="button"
            type="button"
            onClick={() => onRatingChange(star)}
            onMouseEnter={() => setHovered(star)}
            onMouseLeave={() => setHovered(0)}
            sx={{
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              p: 0,
              lineHeight: 0,
              transition: 'transform 0.15s',
              '&:hover': { transform: 'scale(1.15)' },
              '&:active': { transform: 'scale(0.9)' },
            }}
          >
            {star <= displayed ? (
              <StarIcon
                sx={{
                  fontSize: '2.5rem',
                  color: '#fff',
                  transition: 'color 0.15s',
                }}
              />
            ) : (
              <StarBorderIcon
                sx={{
                  fontSize: '2.5rem',
                  color: '#333333',
                  transition: 'color 0.15s',
                }}
              />
            )}
          </Box>
        ))}

        {/* Numeric display */}
        <Typography
          sx={{
            ml: 2,
            fontFamily: "'Manrope', sans-serif",
            fontSize: '1.5rem',
            fontWeight: 700,
            color: '#fff',
          }}
        >
          {rating > 0 ? `${rating}.0` : '—'}
        </Typography>
      </Box>
    </Box>
  );
};

export default StarRatingSelector;
