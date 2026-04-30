import { useState, useEffect } from 'react';
import { Box, Button, Typography, CircularProgress } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { apiFetch } from '../utils/api';
import RateSupplierHeader from '../components/BuyerDashboard/RateSupplier/RateSupplierHeader';
import SupplierContextCard from '../components/BuyerDashboard/RateSupplier/SupplierContextCard';
import RatingForm from '../components/BuyerDashboard/RateSupplier/RatingForm';
import VerifiedTransactionFooter from '../components/BuyerDashboard/RateSupplier/VerifiedTransactionFooter';

/**
 * RateSupplierPage
 * Child route rendered at /buyer-dashboard/marketplace/:supplierId/rate
 * Fetches supplier data dynamically from the backend.
 */
const RateSupplierPage = () => {
  const { supplierId } = useParams();
  const navigate = useNavigate();

  const [supplier, setSupplier] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSupplier = async () => {
      try {
        const data = await apiFetch(`/api/suppliers/${supplierId}`);
        setSupplier(data);
      } catch (error) {
        console.error('Failed to fetch supplier:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSupplier();
  }, [supplierId]);

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', pt: 10 }}>
        <CircularProgress color="success" />
      </Box>
    );
  }

  /* ── 404 fallback ── */
  if (!supplier) {
    return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          minHeight: '60vh',
          gap: 3,
          textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            fontSize: '3rem',
            color: '#fff',
            letterSpacing: '-0.04em',
          }}
        >
          Supplier Not Found
        </Typography>
        <Typography sx={{ color: '#CCCCCC', fontSize: '1rem', fontWeight: 500 }}>
          The supplier profile does not exist.
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/buyer-dashboard/marketplace')}
          sx={{ color: '#22C55E', fontWeight: 700, textTransform: 'none', fontSize: '0.875rem' }}
        >
          Back to Marketplace
        </Button>
      </Box>
    );
  }

  const backToProfile = () =>
    navigate(`/buyer-dashboard/marketplace/${supplierId}`);

  const handleSubmit = ({ rating, review, tags }) => {
    // TODO: wire to real API
    console.log('Review submitted:', { supplierId, rating, review, tags });
    navigate(`/buyer-dashboard/marketplace/${supplierId}`);
  };

  return (
    <Box
      sx={{
        px: { xs: 3, md: 6 },
        pt: 4,
        pb: 8,
        backgroundColor: '#000',
        minHeight: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        '&::-webkit-scrollbar': { width: 4 },
        '&::-webkit-scrollbar-track': { background: '#000' },
        '&::-webkit-scrollbar-thumb': { background: '#333', borderRadius: 10 },
      }}
    >
      {/* ── Back navigation ── */}
      <Box sx={{ width: '100%', maxWidth: 768, mb: 4 }}>
        <Button
          startIcon={<ArrowBackIcon sx={{ fontSize: '1rem !important' }} />}
          onClick={backToProfile}
          sx={{
            color: '#CCCCCC',
            fontWeight: 700,
            textTransform: 'none',
            fontSize: '0.875rem',
            p: 0,
            minWidth: 0,
            '&:hover': { color: '#fff', background: 'none' },
            transition: 'color 0.2s',
          }}
        >
          Back to {supplier.name}
        </Button>
      </Box>

      {/* ── Page heading ── */}
      <RateSupplierHeader />

      {/* ── Two-column form area ── */}
      <Box
        sx={{
          width: '100%',
          maxWidth: 768,
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          alignItems: 'flex-start',
        }}
      >
        {/* Left: supplier context card */}
        <SupplierContextCard supplier={supplier} />

        {/* Right: interactive rating form */}
        <RatingForm onDiscard={backToProfile} onSubmit={handleSubmit} />
      </Box>

      {/* ── Verified transaction footer ── */}
      <VerifiedTransactionFooter />
    </Box>
  );
};

export default RateSupplierPage;


