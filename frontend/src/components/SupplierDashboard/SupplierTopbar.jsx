import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };
const topLinks = ['DIRECTORY', 'CONTRACTS', 'SUPPLY CHAIN'];

/**
 * SupplierTopbar
 * - Desktop (md+): fixed right side with 256px left offset
 * - Mobile (<md): full-width with a hamburger button to open the sidebar
 */
const SupplierTopbar = ({ onMenuClick }) => (
  <Box
    component="header"
    sx={{
      position: 'fixed', top: 0, right: 0,
      left: { xs: 0, md: '256px' },
      height: 64, zIndex: 50,
      backgroundColor: '#000', borderBottom: `1px solid ${C.outline}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      px: { xs: 2, sm: 3, md: 4 },
    }}
  >
    {/* Left: Hamburger (mobile) + Search */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 3 } }}>
      {/* Hamburger — only on mobile */}
      <IconButton
        onClick={onMenuClick}
        sx={{
          display: { xs: 'flex', md: 'none' },
          color: C.muted,
          '&:hover': { color: '#fff', bgcolor: 'transparent' },
          flexShrink: 0,
        }}
        aria-label="Open navigation menu"
      >
        <MenuIcon />
      </IconButton>

      {/* Search */}
      <Box sx={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        <SearchIcon
          sx={{
            position: 'absolute', left: 10, top: '50%', transform: 'translateY(-50%)',
            color: C.muted, fontSize: '1rem',
          }}
        />
        <InputBase
          placeholder="SEARCH CONTRACTS..."
          sx={{
            border: `1px solid ${C.outline}`, borderRadius: '8px',
            pl: '2.5rem', pr: 2, py: 0.75,
            width: { xs: 160, sm: 220, md: 256 },
            fontFamily: "'Manrope', sans-serif", fontSize: '0.625rem',
            fontWeight: 700, letterSpacing: '0.1em', color: '#fff',
            textTransform: 'uppercase',
            '& input::placeholder': { color: C.muted, opacity: 1 },
            '&.Mui-focused': { borderColor: C.primary },
          }}
        />
      </Box>

      {/* Nav Links — hidden on mobile/tablet */}
      <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3 }}>
        {topLinks.map((label) => (
          <Box
            key={label}
            component="a"
            href="#"
            sx={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 700,
              fontSize: '0.625rem', textTransform: 'uppercase',
              letterSpacing: '0.15em', color: C.muted, textDecoration: 'none',
              transition: 'color 0.2s', '&:hover': { color: '#fff' },
            }}
          >
            {label}
          </Box>
        ))}
      </Box>
    </Box>

    {/* Right: Icons */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
      <IconButton sx={{ color: C.muted, '&:hover': { color: '#fff', bgcolor: 'transparent' } }}>
        <NotificationsIcon />
      </IconButton>
      <IconButton sx={{ color: C.muted, '&:hover': { color: '#fff', bgcolor: 'transparent' }, display: { xs: 'none', sm: 'flex' } }}>
        <HelpOutlinedIcon />
      </IconButton>
    </Box>
  </Box>
);

export default SupplierTopbar;
