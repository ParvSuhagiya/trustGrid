import { Box, CssBaseline } from '@mui/material';
import BuyerSidebar from '../components/BuyerDashboard/BuyerSidebar';
import BuyerTopbar from '../components/BuyerDashboard/BuyerTopbar';
import DashboardHeader from '../components/BuyerDashboard/DashboardHeader';
import BentoMetrics from '../components/BuyerDashboard/BentoMetrics';
import SpendingChart from '../components/BuyerDashboard/SpendingChart';
import ActiveContracts from '../components/BuyerDashboard/ActiveContracts';
import SmartInsights from '../components/BuyerDashboard/SmartInsights';
import StatusCards from '../components/BuyerDashboard/StatusCards';

/**
 * BuyerDashboard page — mirrors the full layout from example.html:
 *   • Fixed 256px sidebar (left)
 *   • Fixed 64px topbar (right of sidebar)
 *   • Scrollable main content with ml-64 pt-24 p-8
 */
const BuyerDashboard = () => (
  <>
    <CssBaseline />

    {/* Global page styles */}
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

      {/* ── Scrollable Main Content ── */}
      <Box
        component="main"
        sx={{
          ml: '256px',        // ml-64
          p: 4,
          pt: '96px',         // pt-24 (64px topbar + 32px extra)
          minHeight: '100vh',
          backgroundColor: '#000',
        }}
      >
        {/* Dashboard title */}
        <DashboardHeader />

        {/* Top metrics bento grid */}
        <BentoMetrics />

        {/* Chart + side cards — 12-col grid */}
        <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 3, alignItems: 'start' }}>

          {/* Spending chart — 8 cols */}
          <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 8' } }}>
            <SpendingChart />
          </Box>

          {/* Right side cards — 4 cols */}
          <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 4' }, display: 'flex', flexDirection: 'column', gap: 3 }}>
            <ActiveContracts />
            <SmartInsights />
          </Box>
        </Box>

        {/* Bottom status cards */}
        <StatusCards />
      </Box>
    </Box>
  </>
);

export default BuyerDashboard;
