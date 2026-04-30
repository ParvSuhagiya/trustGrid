import { Box } from '@mui/material';
import useSEO from '../hooks/useSEO';
import HeroSummary from '../components/SupplierDashboard/HeroSummary';
import RecentBuyers from '../components/SupplierDashboard/RecentBuyers';
import MarketIntelligence from '../components/SupplierDashboard/MarketIntelligence';

/**
 * SupplierDashboardHome — default index route of the supplier dashboard.
 * Rendered inside SupplierDashboardLayout <Outlet>.
 */
const SupplierDashboardHome = () => {
  useSEO({
    title: 'Supplier Dashboard',
    description: 'Manage your supplier business on TrustGrid. View performance metrics, buyer activity, market intelligence, and incoming requests.',
  });
  return (
    <Box sx={{ pt: '32px', pb: 6, px: 4, minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Hero: performance heading + metric cards + incoming requests */}
      <HeroSummary />

      {/* Bottom asymmetric section: recent buyers (7 cols) + market intelligence (5 cols) */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(12, 1fr)',
          gap: 4,
          alignItems: 'start',
        }}
      >
        <RecentBuyers />
        <MarketIntelligence />
      </Box>
    </Box>
  );
};

export default SupplierDashboardHome;
