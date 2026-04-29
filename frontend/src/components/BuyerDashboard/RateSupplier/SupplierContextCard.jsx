import { Box, Typography } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';

/**
 * SupplierContextCard
 * Left panel on the Rate Supplier page — shows the supplier's cover image,
 * name, contract ID, and completion date. Data comes from the supplier profile.
 *
 * Props:
 *   supplier  — full supplier object from supplierData.js
 */
const SupplierContextCard = ({ supplier }) => {
  const { name, supplierId, logoUrl } = supplier;

  return (
    <Box
      sx={{
        width: { xs: '100%', md: '33.333%' },
        flexShrink: 0,
      }}
    >
      <Box
        sx={{
          backgroundColor: '#000',
          border: '1px solid #333333',
          borderRadius: '8px',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          gap: 2.5,
        }}
      >
        {/* Cover image */}
        <Box
          sx={{
            aspectRatio: '16/9',
            width: '100%',
            borderRadius: '6px',
            overflow: 'hidden',
            border: '1px solid #222222',
          }}
        >
          <Box
            component="img"
            src={logoUrl}
            alt={`${name} cover`}
            sx={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              filter: 'grayscale(0.4)',
              transition: 'filter 0.4s',
              '&:hover': { filter: 'grayscale(0)' },
            }}
          />
        </Box>

        {/* Supplier name & contract info */}
        <Box>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '0.625rem',
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: '#CCCCCC',
              mb: 0.5,
            }}
          >
            Service Provider
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '1.125rem',
              color: '#fff',
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.75rem',
              color: '#CCCCCC',
              mt: 1,
            }}
          >
            Contract ID: #{supplierId}
          </Typography>
        </Box>

        {/* Completion date */}
        <Box
          sx={{
            pt: 2,
            borderTop: '1px solid #333333',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            color: '#CCCCCC',
          }}
        >
          <CalendarTodayIcon sx={{ fontSize: '0.875rem' }} />
          <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '0.75rem' }}>
            Completed Oct 24, 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default SupplierContextCard;
