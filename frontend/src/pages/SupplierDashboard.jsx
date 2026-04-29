import { Box, CssBaseline } from '@mui/material';
import SupplierSidebar from '../components/SupplierDashboard/SupplierSidebar';
import SupplierTopbar from '../components/SupplierDashboard/SupplierTopbar';
import HeroSummary from '../components/SupplierDashboard/HeroSummary';
import RecentBuyers from '../components/SupplierDashboard/RecentBuyers';
import MarketIntelligence from '../components/SupplierDashboard/MarketIntelligence';

/**
 * SupplierDashboard page — mirrors the full layout from example.html:
 *   • Fixed 256px sidebar (left)
 *   • Fixed 64px topbar (right of sidebar)
 *   • Scrollable main content with ml-64 pt-24 px-8 pb-12
 */
const SupplierDashboard = () => (
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

      {/* ── Scrollable Main Content ── */}
      <Box
        component="main"
        sx={{
          ml: '256px',
          pt: '96px',   // 64px topbar + 32px breathing room
          pb: 6,
          px: 4,
          minHeight: '100vh',
          backgroundColor: '#000',
        }}
      >
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
    </Box>
  </>
);

export default SupplierDashboard;
