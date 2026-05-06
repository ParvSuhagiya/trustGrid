import { useState } from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import SupplierSidebar from '../components/SupplierDashboard/SupplierSidebar';
import SupplierTopbar from '../components/SupplierDashboard/SupplierTopbar';

/**
 * SupplierDashboardLayout — persistent shell for all supplier-dashboard sub-routes.
 * On desktop (≥900px): sidebar always visible, topbar offset by 256px.
 * On mobile/tablet: sidebar slides in as an overlay drawer toggled by hamburger.
 */
const SIDEBAR_WIDTH = 256;

const SupplierDashboardLayout = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
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
        {/* ── Sidebar ── */}
        <SupplierSidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        {/* ── Mobile backdrop overlay ── */}
        {sidebarOpen && (
          <Box
            onClick={() => setSidebarOpen(false)}
            sx={{
              display: { xs: 'block', md: 'none' },
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0,0,0,0.7)',
              zIndex: 55,
            }}
          />
        )}

        {/* ── Topbar ── */}
        <SupplierTopbar onMenuClick={() => setSidebarOpen((prev) => !prev)} />

        {/* ── Scrollable Main Area ── */}
        <Box
          component="main"
          sx={{
            ml: { xs: 0, md: `${SIDEBAR_WIDTH}px` },
            pt: '64px',
            minHeight: '100vh',
            backgroundColor: '#000',
          }}
        >
          <Outlet />
        </Box>
      </Box>
    </>
  );
};

export default SupplierDashboardLayout;
