import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SupplierSidebar from '../components/SupplierDashboard/SupplierSidebar';
import SupplierTopbar from '../components/SupplierDashboard/SupplierTopbar';

/**
 * SupplierDashboardLayout — persistent shell for all supplier-dashboard sub-routes.
 * Sidebar and Topbar are FIXED and never re-render on navigation.
 * The <Outlet> renders the active child route in the scrollable main area.
 */
const SupplierDashboardLayout = () => (
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
      <SupplierSidebar />

      {/* ── Fixed Topbar ── */}
      <SupplierTopbar />

      {/* ── Scrollable Main Area — child route renders here ── */}
      <Box
        component="main"
        sx={{
          ml: '256px',
          pt: '64px', // height of topbar
          minHeight: '100vh',
          backgroundColor: '#000',
        }}
      >
        <Outlet />
      </Box>
    </Box>
  </>
);

export default SupplierDashboardLayout;
