import { Box } from '@mui/material';
import PostAddIcon from '@mui/icons-material/PostAdd';
import { MarketplaceHero, FeaturedBentoSection } from '../components/BuyerDashboard/MarketplaceHero';
import { SupplierGrid } from '../components/BuyerDashboard/SupplierGrid';

/**
 * BuyerMarketplace — child route rendered at /buyer-dashboard/marketplace
 * inside BuyerDashboardLayout. Only this content swaps; the sidebar and topbar
 * remain fixed from the parent layout.
 */
const BuyerMarketplace = () => (
  <Box
    sx={{
      px: 6, pt: 4, pb: 6,
      backgroundColor: '#000', minHeight: '100%',
      /* Custom thin scrollbar to match example.html */
      '&::-webkit-scrollbar': { width: 4 },
      '&::-webkit-scrollbar-track': { background: '#000' },
      '&::-webkit-scrollbar-thumb': { background: '#333', borderRadius: 10 },
    }}
  >
    {/* Hero heading + controls */}
    <MarketplaceHero />

    {/* Featured spotlight bento + stats */}
    <FeaturedBentoSection />

    {/* Supplier card grid + load more */}
    <SupplierGrid />

    {/* FAB — post_add action */}
    <Box
      component="button"
      sx={{
        position: 'fixed', bottom: 32, right: 32,
        width: 64, height: 64, backgroundColor: '#fff', color: '#000',
        borderRadius: '10px', border: `1px solid #333`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        cursor: 'pointer', zIndex: 70,
        transition: 'transform 0.2s',
        '&:hover': { transform: 'scale(1.05)' },
        '&:hover .fab-icon': { transform: 'rotate(12deg)' },
        '&:active': { transform: 'scale(0.95)' },
      }}
    >
      <PostAddIcon
        className="fab-icon"
        sx={{ fontSize: '1.875rem', transition: 'transform 0.2s' }}
      />
    </Box>
  </Box>
);

export default BuyerMarketplace;
