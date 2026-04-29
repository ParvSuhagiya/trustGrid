import { Box, Typography, Button } from '@mui/material';
import { NavLink, useNavigate } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import InventoryIcon from '@mui/icons-material/Inventory';
import ChatIcon from '@mui/icons-material/Chat';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AddIcon from '@mui/icons-material/Add';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const navItems = [
  { icon: <DashboardIcon sx={{ fontSize: '1.2rem' }} />, label: 'Dashboard', to: '/buyer-dashboard', end: true },
  { icon: <StorefrontIcon sx={{ fontSize: '1.2rem' }} />, label: 'Marketplace', to: '/buyer-dashboard/marketplace' },
  { icon: <ShoppingCartIcon sx={{ fontSize: '1.2rem' }} />, label: 'Orders', to: '/buyer-dashboard/orders' },
  { icon: <InventoryIcon sx={{ fontSize: '1.2rem' }} />, label: 'Inventory', to: null },
  { icon: <ChatIcon sx={{ fontSize: '1.2rem' }} />, label: 'Messages', to: null },
  { icon: <AnalyticsIcon sx={{ fontSize: '1.2rem' }} />, label: 'Analytics', to: null },
];

const bottomItems = [
  { icon: <SettingsIcon sx={{ fontSize: '1.2rem' }} />, label: 'Settings', to: null },
  { icon: <ContactSupportIcon sx={{ fontSize: '1.2rem' }} />, label: 'Support', to: null },
];

/** Styles shared by all inactive / plain nav items */
const inactiveItemSx = {
  display: 'flex', alignItems: 'center', gap: 1.5,
  px: 2, py: 1.5, borderRadius: '8px',
  fontFamily: "'Manrope', sans-serif", fontWeight: 700,
  fontSize: '0.875rem', letterSpacing: '0.03em',
  color: C.muted,
  backgroundColor: 'transparent',
  borderRight: '2px solid transparent',
  transition: 'all 0.2s',
  cursor: 'pointer',
  textDecoration: 'none',
  '&:hover': { color: '#fff', backgroundColor: '#111111' },
};

/** Styles for the currently-active route item */
const activeItemSx = {
  ...inactiveItemSx,
  color: C.primary,
  backgroundColor: 'rgba(34,197,94,0.05)',
  borderRight: `2px solid ${C.primary}`,
  '&:hover': { color: C.primary, backgroundColor: 'rgba(34,197,94,0.05)' },
};

const NavItem = ({ icon, label, to, end }) => {
  // Real route → NavLink so active state follows the URL
  if (to) {
    return (
      <NavLink to={to} end={end} style={{ textDecoration: 'none' }}>
        {({ isActive }) => (
          <Box sx={isActive ? activeItemSx : inactiveItemSx}>
            {icon}{label}
          </Box>
        )}
      </NavLink>
    );
  }

  // No route yet → plain anchor, NEVER styled as active
  return (
    <Box component="a" href="#" sx={inactiveItemSx}>
      {icon}{label}
    </Box>
  );
};

const BuyerSidebar = () => {
  const navigate = useNavigate();

  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed', left: 0, top: 0, height: '100vh', width: 256,
        display: 'flex', flexDirection: 'column',
        backgroundColor: '#000', borderRight: `1px solid ${C.outline}`, zIndex: 60,
      }}
    >
      {/* Brand */}
      <Box sx={{ p: 3 }}>
        <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: '1.125rem', letterSpacing: '-0.03em', color: '#fff', mb: 0.5 }}>
          B2B Marketplace
        </Typography>
        <Typography sx={{ fontFamily: "'Inter',sans-serif", fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em', color: C.muted, fontWeight: 700 }}>
          Premium Portal
        </Typography>
      </Box>

      {/* Nav */}
      <Box component="nav" sx={{ flex: 1, px: 2, display: 'flex', flexDirection: 'column', gap: 0.25 }}>
        <Box sx={{ pb: 2 }}>
          <Button
            startIcon={<AddIcon sx={{ fontSize: '1rem !important' }} />}
            onClick={() => navigate('/buyer-dashboard')}
            sx={{
              width: '100%', backgroundColor: '#fff', color: '#000',
              fontFamily: "'Manrope',sans-serif", fontWeight: 700,
              fontSize: '0.8125rem', py: 1.25, borderRadius: '8px',
              textTransform: 'none',
              '&:hover': { backgroundColor: C.muted },
            }}
          >
            New Request
          </Button>
        </Box>
        {navItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
      </Box>

      {/* Bottom */}
      <Box sx={{ p: 2, mt: 'auto', borderTop: `1px solid ${C.outline}` }}>
        {bottomItems.map((item) => (
          <NavItem key={item.label} {...item} />
        ))}
        <Box sx={{ mt: 2, display: 'flex', alignItems: 'center', gap: 1.5, px: 2 }}>
          <Box
            component="img"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDH566ydZDyoTGgIpDG7G8VZbAL89V3obDH3-r0S3CgUs1tpvPJof0l81SF2qa4ZOfbTvm7HAkvizjP147xvRsPeaaVHkfAHoSfdRhIGGwlnxlzzDyZ2GpIRcB6Q3SDdpQhPPbz92a0rsBsz97rG52YPtaOzf5eIg4ZsQVn5P5GEtgulI9Nbh__zvICCH63t4ZCjyuDqI-aYdwmY_vxmyCgUB6ytRR801rqAjp-NiGsiQ84fzgopw1HHc1g3Lul9G3DjPsBjDKDb2qc"
            alt="User profile"
            sx={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', backgroundColor: C.outline }}
          />
          <Box sx={{ overflow: 'hidden' }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>Alex Sterling</Typography>
            <Typography sx={{ fontSize: '0.625rem', color: C.muted, fontWeight: 700 }}>Procurement Lead</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default BuyerSidebar;
