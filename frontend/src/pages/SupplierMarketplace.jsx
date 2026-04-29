import { Box } from '@mui/material';
import MarketplaceHero from '../components/SupplierDashboard/Marketplace/MarketplaceHero';
import FeaturedBuyerCard from '../components/SupplierDashboard/Marketplace/FeaturedBuyerCard';
import MarketplaceStatsCard from '../components/SupplierDashboard/Marketplace/MarketplaceStatsCard';
import BuyerListCard from '../components/SupplierDashboard/Marketplace/BuyerListCard';
import NetworkReachBanner from '../components/SupplierDashboard/Marketplace/NetworkReachBanner';
import BuyerImageCard from '../components/SupplierDashboard/Marketplace/BuyerImageCard';
import MarketplacePagination from '../components/SupplierDashboard/Marketplace/MarketplacePagination';
import MarketplaceFAB from '../components/SupplierDashboard/Marketplace/MarketplaceFAB';

/**
 * SupplierMarketplace — rendered inside SupplierDashboardLayout <Outlet>.
 * Sidebar and Topbar are NOT re-rendered when navigating to this page.
 */
const SupplierMarketplace = () => (
  <Box sx={{ pt: 3, pb: 6, px: 4, minHeight: '100vh', backgroundColor: '#000' }}>

    {/* Page hero with title and filter tabs */}
    <MarketplaceHero />

    {/* ── Bento Grid ── */}
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(12, 1fr)',
        gap: 3,
      }}
    >
      {/* Featured buyer (8 cols) */}
      <FeaturedBuyerCard />

      {/* Stats card (4 cols) */}
      <MarketplaceStatsCard />

      {/* 3 small list cards (4 cols each) */}
      <BuyerListCard
        icon="factory"
        id="B-9032"
        company="Nexus Foundry"
        industry="Industrial Components & Raw Materials"
        activeSince="March 2023"
        annualSpend="$1.2M+"
        footerType="avatars"
        avatars={['MK', 'JD']}
      />
      <BuyerListCard
        icon="eco"
        id="B-8811"
        company="Veridian Systems"
        industry="Renewable Energy Infrastructure"
        activeSince="Jan 2024"
        annualSpend="$450K+"
        footerType="badge"
        badgeColor="#22C55E"
        badgeLabel="Vetted Vendor"
      />
      <BuyerListCard
        icon="biotech"
        id="B-7742"
        company="Synthetix Lab"
        industry="Pharmaceutical R&D"
        activeSince="Oct 2022"
        annualSpend="$3.8M+"
        footerType="badge"
        badgeColor="#fff"
        badgeLabel="Renewal Pending"
      />

      {/* Full-width network reach banner */}
      <NetworkReachBanner />

      {/* Two horizontal image cards (6 cols each) */}
      <BuyerImageCard
        company="Apex Structures"
        industry="Civil Engineering & Contracting"
        imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuAYpZdhXjXiVJU7lHAY1G_H_EkVg0UfNHYmNd8cLN8kqgOHimOCDChAon1nKhFYi8XU4w6Lb92Mx1gwwREh2rh0Ld7Rcnntw15QwkoBxqQC8ovb9axc70HhUsn543tWOrBoobOcGFwnabmxxu2qR-FS4W9SciHLCHYq55MS12UGT5jovTedw41Ja-j35E_lY9Qk8uYfi6I0fSySv-q51jc3J7_oGQEOZ8W-TMcYg4jjqOjAXC1_r2anPnaTaQrniimIOkoxSwitSlUZ"
        imgAlt="Heavy machinery construction site"
        contactName="Marcus Thorne"
        location="London, UK"
      />
      <BuyerImageCard
        company="Quantum Dynamics"
        industry="Specialized Lab Equipment"
        imgSrc="https://lh3.googleusercontent.com/aida-public/AB6AXuB3NKYT4QBnlIAL5h938_fLxZZy3DVvZVGVua5e_AjTwkZxlPzQV4CaivQrA9OTrOcQG0lESSKZY7OE6x6AuyeQEiv4aQhYvvbwbzNYZObRDbk_ohp6bBFGNIURWLu40iuuaHURdTWnXD05j9SRm1QCq4MKuMrFwESc7OLp-EuVtLWL0pc3LB1DMfGqyZ0sFURNYVflDodHpPXM2iIAjDW8VGe2U29aVvi8oQpS4UuGLcp1FXqZekGZBh58mQdkRKFpQnO3DMOt-8nh"
        imgAlt="Laboratory equipment"
        contactName="Dr. Elena Rossi"
        location="Milan, Italy"
      />
    </Box>

    {/* Pagination */}
    <MarketplacePagination showing="1-6" total={248} totalPages={42} />

    {/* Floating filter button */}
    <MarketplaceFAB />
  </Box>
);

export default SupplierMarketplace;
