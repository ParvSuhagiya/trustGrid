import { Box, Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

import OrdersHeader    from '../components/BuyerDashboard/OrderComponents/OrdersHeader';
import StatsOverview   from '../components/BuyerDashboard/OrderComponents/StatsOverview';
import RequestsGrid    from '../components/BuyerDashboard/OrderComponents/RequestsGrid';
import PaginationFooter from '../components/BuyerDashboard/OrderComponents/PaginationFooter';

/**
 * BuyerOrders — page route: /buyer-dashboard/orders
 *
 * Acts purely as a layout composer. All visual logic lives inside
 * the OrderComponents sub-folder. Sidebar and topbar are provided
 * by BuyerDashboardLayout via React Router's <Outlet>.
 */
const BuyerOrders = () => (
  <Box sx={{ px: 4, pt: 4, pb: 8, minHeight: '100vh', position: 'relative' }}>

    {/* ── Page title + action buttons ── */}
    <OrdersHeader />

    {/* ── Inventory flow stats + priority support ── */}
    <StatsOverview />

    {/* ── Order cards grid + new-request CTA ── */}
    <RequestsGrid />

    {/* ── Pagination ── */}
    <PaginationFooter showing={5} total={42} current={1} />

    {/* ── Floating action button (fixed, always visible) ── */}
    <Button
      aria-label="New request"
      sx={{
        position: 'fixed', bottom: 32, right: 32,
        minWidth: 56, width: 56, height: 56, borderRadius: '50%',
        backgroundColor: '#fff', color: '#000',
        boxShadow: '0 10px 40px rgba(0,0,0,0.5)',
        border: '2px solid #000', zIndex: 100,
        transition: 'transform 0.15s',
        '&:hover':  { backgroundColor: '#fff', transform: 'scale(1.05)' },
        '&:active': { transform: 'scale(0.95)' },
      }}
    >
      <AddIcon sx={{ fontSize: '1.5rem' }} />
    </Button>

  </Box>
);

export default BuyerOrders;
