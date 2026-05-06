import { Box, Typography, Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StorefrontIcon from '@mui/icons-material/Storefront';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import SettingsIcon from '@mui/icons-material/Settings';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import AddIcon from '@mui/icons-material/Add';
import CloseIcon from '@mui/icons-material/Close';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const navItems = [
  { icon: <DashboardIcon sx={{ fontSize: '1.2rem' }} />, label: 'DASHBOARD', to: '/supplier-dashboard' },
  { icon: <StorefrontIcon sx={{ fontSize: '1.2rem' }} />, label: 'MARKETPLACE', to: '/supplier-dashboard/marketplace' },
  { icon: <Inventory2Icon sx={{ fontSize: '1.2rem' }} />, label: 'INVENTORY', to: '/supplier-dashboard/inventory' },
];

const bottomItems = [
  { icon: <SettingsIcon sx={{ fontSize: '1.2rem' }} />, label: 'SETTINGS', to: '' },
  { icon: <ContactSupportIcon sx={{ fontSize: '1.2rem' }} />, label: 'SUPPORT', to: '' },
];

const navItemBaseSx = {
  display: 'flex', alignItems: 'center', gap: 1.5,
  px: 2, py: 1.5, borderRadius: '8px', textDecoration: 'none',
  fontFamily: "'Manrope', sans-serif", fontWeight: 700,
  fontSize: '0.75rem', letterSpacing: '0.05em',
  transition: 'all 0.2s',
  '&:hover': { color: '#fff', backgroundColor: '#111111' },
};

const NavItem = ({ icon, label, to, end, onClick }) => {
  if (!to) {
    return (
      <Box component="a" href="#" sx={{ ...navItemBaseSx, color: C.muted }}>
        {icon}
        {label}
      </Box>
    );
  }
  return (
    <Box
      component={NavLink}
      to={to}
      end={end}
      onClick={onClick}
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
};

/**
 * SupplierSidebar
 * - Desktop (md+): always visible, fixed to the left
 * - Mobile (<md): slides in as an overlay drawer when `open` is true
 */
const SupplierSidebar = ({ open, onClose }) => {
  const { user } = useAuth();

  return (
    <Box
      component="aside"
      sx={{
        position: 'fixed', left: 0, top: 0, height: '100vh', width: 256,
        display: 'flex', flexDirection: 'column',
        backgroundColor: '#000', borderRight: `1px solid ${C.outline}`, zIndex: 60,
        // Mobile: slide in/out; Desktop: always visible
        transform: {
          xs: open ? 'translateX(0)' : 'translateX(-256px)',
          md: 'translateX(0)',
        },
        transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
      }}
    >
      {/* Brand + mobile close button */}
      <Box sx={{ p: 3, pb: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
        <Box>
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
        {/* Close button — only visible on mobile */}
        <Box
          component="button"
          onClick={onClose}
          sx={{
            display: { xs: 'flex', md: 'none' },
            alignItems: 'center', justifyContent: 'center',
            background: 'none', border: 'none', cursor: 'pointer',
            color: C.muted, p: 0.5, borderRadius: '4px',
            '&:hover': { color: '#fff' },
          }}
        >
          <CloseIcon sx={{ fontSize: '1.2rem' }} />
        </Box>
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
          <NavItem key={item.label} {...item} end={item.to === '/supplier-dashboard'} onClick={onClose} />
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
              flexShrink: 0,
            }}
          />
          <Box>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>
              {user?.name?.toUpperCase() || 'ALEX RIVERA'}
            </Typography>
            <Typography sx={{ fontSize: '0.625rem', fontWeight: 700, color: C.muted }}>
              {user?.role?.toUpperCase() || 'FLEET MANAGER'}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default SupplierSidebar;
