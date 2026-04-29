import { Box, Typography, Button } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SupplierProfileHero from '../components/BuyerDashboard/SupplierProfile/SupplierProfileHero';
import SupplierStatsRating from '../components/BuyerDashboard/SupplierProfile/SupplierStatsRating';
import SupplierProductTable from '../components/BuyerDashboard/SupplierProfile/SupplierProductTable';
import SupplierReviews from '../components/BuyerDashboard/SupplierProfile/SupplierReviews';
import { supplierProfiles } from '../data/supplierData';

/**
 * SupplierProfilePage
 * Child route rendered at /buyer-dashboard/marketplace/:supplierId
 * Uses the :supplierId URL param to look up the correct supplier from supplierData.
 * Sidebar and Topbar are NOT rendered here — they come from BuyerDashboardLayout.
 */
const SupplierProfilePage = () => {
  const { supplierId } = useParams();
  const navigate = useNavigate();
  const supplier = supplierProfiles[supplierId];

  /* ── 404-style fallback ── */
  if (!supplier) {
    return (
      <Box
        sx={{
          display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center',
          minHeight: '60vh', gap: 3, textAlign: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 800,
            fontSize: '3rem', color: '#fff', letterSpacing: '-0.04em',
          }}
        >
          Supplier Not Found
        </Typography>
        <Typography sx={{ color: '#CCCCCC', fontSize: '1rem', fontWeight: 500 }}>
          The supplier profile for <strong style={{ color: '#fff' }}>"{supplierId}"</strong> does not exist.
        </Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => navigate('/buyer-dashboard/marketplace')}
          sx={{
            color: '#22C55E', fontWeight: 700, textTransform: 'none',
            fontSize: '0.875rem',
          }}
        >
          Back to Marketplace
        </Button>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        px: { xs: 3, md: 6 }, pt: 4, pb: 8,
        backgroundColor: '#000', minHeight: '100%',
        /* Thin scrollbar */
        '&::-webkit-scrollbar': { width: 4 },
        '&::-webkit-scrollbar-track': { background: '#000' },
        '&::-webkit-scrollbar-thumb': { background: '#333', borderRadius: 10 },
      }}
    >
      {/* ── Back navigation ── */}
      <Button
        startIcon={<ArrowBackIcon sx={{ fontSize: '1rem !important' }} />}
        onClick={() => navigate('/buyer-dashboard/marketplace')}
        sx={{
          color: '#CCCCCC', fontWeight: 700, textTransform: 'none',
          fontSize: '0.875rem', mb: 6, p: 0, minWidth: 0,
          '&:hover': { color: '#fff' },
          transition: 'color 0.2s',
        }}
      >
        Back to Marketplace
      </Button>

      {/* ── Hero: logo, name, tagline, CTA buttons ── */}
      <SupplierProfileHero supplier={supplier} supplierSlug={supplierId} />

      {/* ── Stats & Performance Metrics ── */}
      <SupplierStatsRating stats={supplier.stats} />

      {/* ── Product / Inventory Table ── */}
      <SupplierProductTable products={supplier.products} />

      {/* ── Customer Reviews & Insights ── */}
      <SupplierReviews insights={supplier.insights} />
    </Box>
  );
};

export default SupplierProfilePage;
