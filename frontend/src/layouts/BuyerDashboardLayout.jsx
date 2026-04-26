import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import BuyerSidebar from '../components/BuyerDashboard/BuyerSidebar';
import BuyerTopbar from '../components/BuyerDashboard/BuyerTopbar';

/**
 * BuyerDashboardLayout — persistent shell that wraps all buyer-dashboard sub-routes.
 * The sidebar and topbar are FIXED and never re-render on navigation.
 * The <Outlet> renders the active child route in the scrollable main area.
 */
const BuyerDashboardLayout = () => (
  <>
    <CssBaseline />
    <Box
      sx={{
        minHeight: '100vh',
        backgroundColor: '#000',
        color: '#fff',
        fontFamily: "'Inter', sans-serif",
        WebkitFontSmoothing: 'antialiased',
      }}
    >
      {/* ── Fixed Sidebar ── */}
      <BuyerSidebar />

      {/* ── Fixed Topbar ── */}
      <BuyerTopbar />

      {/* ── Scrollable Main Area — child route renders here ── */}
      <Box
        component="main"
        sx={{
          ml: '256px',
          pt: '64px', // height of the topbar
          minHeight: '100vh',
          backgroundColor: '#000',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  </>
);

export default BuyerDashboardLayout;
