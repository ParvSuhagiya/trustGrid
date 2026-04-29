import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ChatIcon from '@mui/icons-material/Chat';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AddIcon from '@mui/icons-material/Add';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const navItems = [
  { icon: <DashboardIcon sx={{ fontSize: '1.2rem' }} />, label: 'DASHBOARD', to: '/supplier-dashboard' },
  { icon: <StorefrontIcon sx={{ fontSize: '1.2rem' }} />, label: 'MARKETPLACE', to: '/supplier-dashboard/marketplace' },
  { icon: <ShoppingCartIcon sx={{ fontSize: '1.2rem' }} />, label: 'ORDERS', to: '/supplier-dashboard/orders' },
  { icon: <Inventory2Icon sx={{ fontSize: '1.2rem' }} />, label: 'INVENTORY', to: '/supplier-dashboard/inventory' }
];

const bottomItems = [
  { icon: <SettingsIcon sx={{ fontSize: '1.2rem' }} />, label: 'SETTINGS', to: '' },
  { icon: <ContactSupportIcon sx={{ fontSize: '1.2rem' }} />, label: 'SUPPORT', to: '' },
];

// Static layout styles shared by all nav items
const navItemBaseSx = {
  display: 'flex', alignItems: 'center', gap: 1.5,
  px: 2, py: 1.5, borderRadius: '8px', textDecoration: 'none',
  fontFamily: "'Manrope', sans-serif", fontWeight: 700,
  fontSize: '0.75rem', letterSpacing: '0.05em',
  transition: 'all 0.2s',
  // hover: always brighten text + subtle bg
  '&:hover': { color: '#fff', backgroundColor: '#111111' },
};

// NavLink's `style` callback is the correct place for isActive-dependent styles
const NavItem = ({ icon, label, to, end }) => (
  <Box
    component={NavLink}
    to={to}
    end={end}
    sx={navItemBaseSx}
    style={({ isActive }) => ({
      color: isActive ? C.primary : C.muted,
      backgroundColor: isActive ? '#111111' : 'transparent',
      borderRight: isActive ? `2px solid ${C.primary}` : '2px solid transparent',
    })}
  >
    {icon}
    {label}
  </Box>
);

const SupplierSidebar = () => (
  <Box
    component="aside"
    sx={{
      position: 'fixed', left: 0, top: 0, height: '100vh', width: 256,
      display: 'flex', flexDirection: 'column',
      backgroundColor: '#000', borderRight: `1px solid ${C.outline}`, zIndex: 60,
    }}
  >
    {/* Brand */}
    <Box sx={{ p: 3, pb: 1 }}>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
          fontSize: '1.125rem', letterSpacing: '-0.03em', color: '#fff',
          textTransform: 'uppercase',
        }}
      >
        B2B Marketplace
      </Typography>
      <Typography
        sx={{
          fontFamily: "'Inter', sans-serif", fontSize: '0.625rem',
          textTransform: 'uppercase', letterSpacing: '0.15em', color: C.muted, fontWeight: 700,
        }}
      >
        Premium Portal
      </Typography>
    </Box>

    {/* New Request Button */}
    <Box sx={{ px: 2, mt: 2 }}>
      <Button
        startIcon={<AddIcon sx={{ fontSize: '1rem !important' }} />}
        sx={{
          width: '100%', backgroundColor: '#fff', color: '#000',
          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
          fontSize: '0.75rem', py: 1.25, borderRadius: '8px',
          textTransform: 'uppercase', letterSpacing: '0.05em',
          '&:hover': { backgroundColor: '#e5e5e5', opacity: 0.9 },
          '&:active': { transform: 'scale(0.95)' },
        }}
      >
        NEW REQUEST
      </Button>
    </Box>

    {/* Nav Items */}
    <Box component="nav" sx={{ flex: 1, px: 1.5, mt: 3, display: 'flex', flexDirection: 'column', gap: 0.25 }}>
      {navItems.map((item) => (
        <NavItem key={item.label} {...item} end={item.to === '/supplier-dashboard'} />
      ))}
    </Box>

    {/* Bottom: Settings + Support + User Profile */}
    <Box sx={{ p: 2, borderTop: `1px solid ${C.outline}` }}>
      {bottomItems.map((item) => (
        <NavItem key={item.label} {...item} />
      ))}
      <Box sx={{ mt: 2, pt: 2, borderTop: `1px solid ${C.outline}`, display: 'flex', alignItems: 'center', gap: 1.5, px: 1 }}>
        <Box
          component="img"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCj2vfUR3uP8doa5HRkMh7dwdO2JazIPBxPH3wUG7fWEn7IGZeJ5kI_RxAPqkTASP46vzI-oyNQglSG3IWJbI0kuFJINpdWriENTtBWWsR4iyTcxGjwyQnFQbMnbMHVCh4Dyai1C9mXOx704CGn97AbpVozsOnrahgfQ7H8uO3eLfl3Ynn1OSu_wKiEKbM1OfpN0n2gpdnJADLtn51hYnluY7k3nc3JPkMh60zlK6jBP90IjsgC4fW0Va3uLmT4BRrUwh9Mm3Ezw58r"
          alt="Profile"
          sx={{
            width: 32, height: 32, borderRadius: '50%',
            objectFit: 'cover', border: `1px solid ${C.outline}`,
          }}
        />
        <Box>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>
            ALEX RIVERA
          </Typography>
          <Typography sx={{ fontSize: '0.625rem', fontWeight: 700, color: C.muted }}>
            FLEET MANAGER
          </Typography>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default SupplierSidebar;
