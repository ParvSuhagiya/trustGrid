import { Box } from '@mui/material';
import BuyerRequestsHeader from '../components/SupplierDashboard/BuyerRequests/BuyerRequestsHeader';
import FeaturedRequestCard from '../components/SupplierDashboard/BuyerRequests/FeaturedRequestCard';
import MarketTrendsPanel from '../components/SupplierDashboard/BuyerRequests/MarketTrendsPanel';
import SmallRequestsGrid from '../components/SupplierDashboard/BuyerRequests/SmallRequestsGrid';
import ArchivedRequestsList from '../components/SupplierDashboard/BuyerRequests/ArchivedRequestsList';
import BuyerRequestsFAB from '../components/SupplierDashboard/BuyerRequests/BuyerRequestsFAB';

/**
 * SupplierBuyerRequests — rendered inside SupplierDashboardLayout <Outlet>.
 * Sidebar and Topbar are NOT re-rendered when navigating to this page.
 */
const SupplierBuyerRequests = () => (
  <Box sx={{ pt: 3, pb: 6, px: 5, minHeight: '100vh', backgroundColor: '#000' }}>
    {/* Page header + queue stats */}
    <BuyerRequestsHeader />

    {/* Bento grid: featured card (8 cols) + trends panel (4 cols) */}
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3,
      }}
    >
      <FeaturedRequestCard />
      <MarketTrendsPanel />
      <SmallRequestsGrid />
      <ArchivedRequestsList />
    </Box>

    {/* Floating action button */}
    <BuyerRequestsFAB />
  </Box>
);

export default SupplierBuyerRequests;
