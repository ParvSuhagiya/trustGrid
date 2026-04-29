import { Box } from '@mui/material';
import DashboardHeader from '../components/BuyerDashboard/DashboardHeader';
import BentoMetrics from '../components/BuyerDashboard/BentoMetrics';
import SpendingChart from '../components/BuyerDashboard/SpendingChart';
import ActiveContracts from '../components/BuyerDashboard/ActiveContracts';
import SmartInsights from '../components/BuyerDashboard/SmartInsights';
import StatusCards from '../components/BuyerDashboard/StatusCards';

/**
 * BuyerDashboardHome — the default (index) route rendered inside BuyerDashboardLayout.
 * This is what the user sees at /buyer-dashboard.
 */
const BuyerDashboardHome = () => (
  <Box sx={{ p: 4, pt: '32px', pb: 6, backgroundColor: '#000', minHeight: '100%' }}>
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
);

export default BuyerDashboardHome;
