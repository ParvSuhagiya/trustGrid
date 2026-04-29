import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import { nameToSlug } from '../../data/supplierData';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const supplierCards = [
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuClBZMvXFdaxilVcviB8u8Va2oa55gTkEG_A7R2SaPuUZ68nB8_Eb_HaJbp7A5HYJl0kQdMU32hz6T0vcfiqDuLX4JLIuGxkD4oyknhIkfnE8bRm6IhVsJTm9GpRJv0JnK2G3zuFrlmfrtVtfCA3IoLgr1H8e0dI3OxfVoBT8sisJMcJHoUc-wXfg2DVwT2rAJ44KjT1n_iibxhiDti7kf-qz9rUPRcODEkoXLD2q283zJ6beEL8NKppju12AX8IrEFEGNM7IvA-Oz6',
    alt: 'Supplier facility',
    badge: { type: 'verified' },
    category: 'Logistics & Freight',
    name: 'Nexus Global Core',
    rating: '4.9',
    description: 'End-to-end supply chain optimization focusing on the EMEA region and high-value cargo.',
    footer: { type: 'avatars', labels: ['CN', 'DE', 'US'] },
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDskVn4eaCOKXm6WHeaO890RkDpxH1xmRsNiWg3M9zG2wNUjiGO7fTDNuf7g8ZPCx0JKwrVewmB_4DIfUEu8cjmi6u1Efnl-gb_qdJzZi5UN7F-jt9w3gt2bfU2ExPNxqGCZE8CNSUgyDyBIY4TYYHgr30KRYs8Y7YrEtymQRFWvHDt7SJefxnlJB2Q1E52jalWozH-OhS98najh1a-5QiSSLaL75Wri3y0DEr2WTWFvIKGQYYj_1FEJxUzZGhm_t3h3557QNBKs0ov',
    alt: 'Electronics lab',
    category: 'Precision Electronics',
    name: 'Silicon Path Systems',
    rating: '4.7',
    description: 'Specialized micro-processor fabrication and custom PCB assembly for medical diagnostics.',
    footer: { type: 'text', label: 'ISO 9001 Certified' },
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCuhMoigl6WAWA6ePFAZUhhk7QevOYc_bqbdk4j0zD0lzTDcYBn6bCu_2DkCpV5-NEElxrpfppk44Ykc27sgbUFn1IEt3gPbpURSn8Ks9sgrbzZKtScna0BqfMW_JY3HOW2mYEf50Zj2abj6rTWbaIVqHpqDZNBnpsgHH2l968uJeXhX7py700aY1oFfMEsbzBNpZ6PJw8GEWKt_wM26qfWJDZR3Gn0-vIuYht82sIjDCXoe2nfdgYKaQYvLWP4JZotJ-_iVH8pwKjJ',
    alt: 'Steel Mill',
    badge: { type: 'toprated' },
    category: 'Raw Materials',
    name: 'Titan Forge Metals',
    rating: '5.0',
    description: 'Advanced alloy manufacturing and sustainable recycling processes for heavy industry.',
    footer: { type: 'available' },
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAokcgOBtlB0s-kOt83WuEd6H4mZy7NGGEstzalNuSrku8l3xv_8oJbNz2wXdKeEFNfeI2M1avE_rv5zJoPxLowxGT5GSS1xJltAXSjRL4qIImeS7GSn6A94SrMoaE6K6cicR9w6wwxxqdR_Dn8HMVynPsICD5NhLZv45pxXJhwkxmOOS3Nn0PE43tlojWcfxNT2mu5WzgcHtEKRxYIEjcrKrPE6_5ig7G2d4s9E-9emX2roDgctxd3wyiq611BLsTsq2xBJH8K7H00',
    alt: 'Chemical Lab',
    category: 'Bio-Chemicals',
    name: 'GreenBond Catalysts',
    rating: '4.5',
    description: 'Specialty polymer production and catalytic converters for sustainable automotive solutions.',
    footer: { type: 'text', label: 'ESG Compliant' },
  },
  {
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCwUxPLRNxGVxHWiTshwbuHdQnODTvwgUp02yAx5L926uKlv1WoAHv_hdB5NH-wtbgbeW5itoH4AAxyQmXeMRMUKFTj_qIZBbnHYSCZsPxRMBZsx0Uy651KymGqdY3iAuu5wbLZk9tkU5O5kLxRZmy0KZRKHtopLRcyxuf0XVMVvv40dfxzliOkPq7FjL46DHscUD9vSpDysx2UfWdVjVJKTqKvX_O7VSpq-FLL6peznTPTkT2C1vteQyWK0TTtsCE6Lhvzn_jeTN_U',
    alt: 'Office interior',
    category: 'Professional Services',
    name: 'Apex Strategic Sourcing',
    rating: '4.8',
    description: 'Strategic procurement consultancy for Fortune 500 tech firms specializing in hardware.',
    footer: { type: 'text', label: 'New Partner' },
  },
];

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
        {footer.type === 'avatars' && (
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
        {footer.type === 'text' && (
          <Typography sx={{ fontSize: '0.625rem', color: C.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
            {footer.label}
          </Typography>
        )}
        {footer.type === 'available' && (
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
const SupplierGrid = () => (
  <>
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' },
        gap: 4,
      }}
    >
      {supplierCards.map((card) => (
        <SupplierCard key={card.name} {...card} />
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
        Showing 24 of 2,840 partners
      </Typography>
    </Box>
  </>
);

export { SupplierGrid };
