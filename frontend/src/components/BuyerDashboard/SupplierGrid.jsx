import { Box, Typography, Button, CircularProgress } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import { nameToSlug } from '../../data/supplierData';
import { useState, useEffect } from 'react';
import { apiFetch } from '../../utils/api';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

/** Individual supplier card */
const SupplierCard = ({ img, alt, badge, category, name, rating, description, footer }) => {
  const navigate = useNavigate();
  const slug = nameToSlug(name);
  const handleClick = () => navigate(`/buyer-dashboard/marketplace/${slug}`);

  return (
  <Box
    onClick={handleClick}
    sx={{
      backgroundColor: '#000', border: `1px solid ${C.outline}`,
      borderRadius: '10px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      cursor: 'pointer',
      transition: 'border-color 0.25s',
      '&:hover': { borderColor: '#666' },
      '&:hover .card-img': { transform: 'scale(1.1)' },
    }}
  >
    {/* Image */}
    <Box sx={{ position: 'relative', height: 192, borderBottom: `1px solid ${C.outline}`, overflow: 'hidden' }}>
      <Box
        component="img"
        src={img}
        alt={alt}
        className="card-img"
        sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
      />
      {badge?.type === 'verified' && (
        <Box
          sx={{
            position: 'absolute', top: 12, right: 12,
            backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
            p: 1, borderRadius: '8px', color: C.accent,
          }}
        >
          <VerifiedIcon sx={{ fontSize: '1.25rem', display: 'block' }} />
        </Box>
      )}
      {badge?.type === 'toprated' && (
        <Box
          sx={{
            position: 'absolute', top: 12, right: 12,
            backgroundColor: '#fff', color: '#000',
            px: 1, py: 0.5, borderRadius: '4px',
            fontSize: '0.625rem', fontWeight: 700,
          }}
        >
          TOP RATED
        </Box>
      )}
    </Box>

    {/* Body */}
    <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "'Manrope',sans-serif", fontWeight: 700,
              fontSize: '0.625rem', textTransform: 'uppercase',
              letterSpacing: '0.1em', color: '#fff', mb: 0.5,
            }}
          >
            {category}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Manrope',sans-serif", fontWeight: 700,
              fontSize: '1.25rem', color: '#fff',
            }}
          >
            {name}
          </Typography>
        </Box>
        {/* Rating pill */}
        <Box
          sx={{
            display: 'flex', alignItems: 'center', gap: 0.5,
            border: `1px solid ${C.outline}`, px: 1, py: 0.5, borderRadius: '6px',
          }}
        >
          <StarIcon sx={{ fontSize: '0.875rem', color: '#fff' }} />
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>{rating}</Typography>
        </Box>
      </Box>

      <Typography sx={{ color: C.muted, fontSize: '0.875rem', mb: 3, lineHeight: 1.6, fontWeight: 500 }}>
        {description}
      </Typography>

      {/* Footer */}
      <Box
        sx={{
          mt: 'auto', display: 'flex', alignItems: 'center',
          justifyContent: 'space-between', borderTop: `1px solid ${C.outline}`, pt: 3,
        }}
      >
        {/* Left side of footer */}
        {footer?.type === 'avatars' && (
          <Box sx={{ display: 'flex', ml: '-4px' }}>
            {footer.labels.map((label) => (
              <Box
                key={label}
                sx={{
                  width: 32, height: 32, borderRadius: '50%',
                  border: '2px solid #000', backgroundColor: '#fff',
                  color: '#000', display: 'flex', alignItems: 'center',
                  justifyContent: 'center', fontSize: '0.625rem', fontWeight: 700,
                  ml: '-8px', '&:first-of-type': { ml: 0 },
                }}
              >
                {label}
              </Box>
            ))}
          </Box>
        )}
        {footer?.type === 'text' && (
          <Typography sx={{ fontSize: '0.625rem', color: C.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {footer.label}
          </Typography>
        )}
        {footer?.type === 'available' && (
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.accent }} />
            <Typography sx={{ fontSize: '0.625rem', color: C.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
              Available Now
            </Typography>
          </Box>
        )}

        {/* View Profile button */}
        <Button
          endIcon={<ArrowForwardIcon sx={{ fontSize: '0.875rem !important', transition: 'transform 0.2s' }} />}
          onClick={(e) => { e.stopPropagation(); handleClick(); }}
          sx={{
            color: '#fff', fontWeight: 700, fontSize: '0.875rem',
            textTransform: 'none', p: 0, minWidth: 0,
            '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
          }}
        >
          View Profile
        </Button>
      </Box>
    </Box>
  </Box>
  );
};

/** Ghost "Can't find a supplier?" card */
const GhostCard = () => (
  <Box
    sx={{
      backgroundColor: '#000', border: `1px dashed ${C.outline}`,
      borderRadius: '10px', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      p: 4, textAlign: 'center', opacity: 0.8,
      transition: 'opacity 0.2s', '&:hover': { opacity: 1 },
    }}
  >
    <Box
      sx={{
        width: 64, height: 64, borderRadius: '50%',
        border: `1px solid ${C.outline}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3,
      }}
    >
      <AddCircleOutlinedIcon sx={{ fontSize: '2rem', color: '#fff' }} />
    </Box>
    <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#fff', mb: 1 }}>
      Can't find a supplier?
    </Typography>
    <Typography sx={{ color: C.muted, fontSize: '0.875rem', maxWidth: 200, mb: 4, fontWeight: 700 }}>
      Let our procurement team source specific partners for your unique needs.
    </Typography>
    <Button
      sx={{
        px: 3, py: 1, border: `1px solid ${C.outline}`, borderRadius: '6px',
        color: '#fff', fontWeight: 700, textTransform: 'none', fontSize: '0.875rem',
        '&:hover': { borderColor: '#fff' },
      }}
    >
      Post Custom RFP
    </Button>
  </Box>
);

/** Supplier grid + load more */
const SupplierGrid = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const data = await apiFetch('/api/suppliers');
        setSuppliers(data);
      } catch (error) {
        console.error('Failed to fetch suppliers', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSuppliers();
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}><CircularProgress color="success" /></Box>;
  }

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' },
          gap: 4,
        }}
      >
        {suppliers.map((supplier) => (
          <SupplierCard 
            key={supplier._id} 
            name={supplier.name}
            category={supplier.category}
            rating={supplier.rating?.toFixed(1) || '0.0'}
            description={supplier.description}
            img={'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'} // Default image placeholder
            badge={supplier.rating > 4.5 ? { type: 'toprated' } : null}
            footer={{ type: 'available' }}
          />
        ))}
        <GhostCard />
      </Box>

      {/* Load more */}
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Button
          endIcon={<RefreshIcon sx={{ fontSize: '0.875rem !important', transition: 'transform 0.3s' }} />}
          sx={{
            px: 6, py: 2, border: `1px solid ${C.outline}`, borderRadius: '8px',
            color: '#fff', fontWeight: 700, fontSize: '0.875rem', textTransform: 'none',
            '&:hover': {
              backgroundColor: '#fff', color: '#000',
              '& .MuiButton-endIcon': { transform: 'rotate(90deg)' },
            },
            transition: 'all 0.2s',
          }}
        >
          Load More Suppliers
        </Button>
        <Typography sx={{ color: C.muted, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
          Showing {suppliers.length} of 2,840 partners
        </Typography>
      </Box>
    </>
  );
};

export { SupplierGrid };
