import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';
import MenuIcon from '@mui/icons-material/Menu';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };
const topLinks = ['Directory', 'Contracts', 'Supply Chain'];

/**
 * BuyerTopbar
 * - Desktop (md+): fixed right side with 256px left offset
 * - Mobile (<md): full-width with a hamburger button to open the sidebar
 */
const BuyerTopbar = ({ onMenuClick }) => (
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
    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 2 }, flex: 1, maxWidth: 560 }}>
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

      {/* Search bar */}
      <Box sx={{ position: 'relative', width: '100%' }}>
        <SearchIcon sx={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'rgba(204,204,204,0.5)', fontSize: '1rem' }} />
        <InputBase
          placeholder="SEARCH CONTRACTS, VENDORS..."
          sx={{
            width: '100%', border: `1px solid ${C.outline}`, borderRadius: '8px',
            pl: 5, pr: 2, py: 1,
            fontFamily: "'Manrope',sans-serif", fontSize: '0.625rem',
            letterSpacing: '0.1em', color: '#fff',
            '& input::placeholder': { color: 'rgba(204,204,204,0.4)', opacity: 1 },
            '&.Mui-focused': { borderColor: C.primary },
          }}
        />
      </Box>
    </Box>

    {/* Right */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: { xs: 1, md: 4 }, ml: { xs: 1, md: 2 } }}>
      {/* Nav links — hidden on mobile */}
      <Box sx={{ display: { xs: 'none', lg: 'flex' }, alignItems: 'center', gap: 3 }}>
        {topLinks.map((label) => (
          <Box
            key={label} component="a" href="#"
            sx={{
              fontFamily: "'Manrope',sans-serif", fontWeight: 700,
              fontSize: '0.625rem', textTransform: 'uppercase',
              letterSpacing: '0.15em', color: C.muted, textDecoration: 'none',
              transition: 'color 0.2s', '&:hover': { color: '#fff' },
            }}
          >
            {label}
          </Box>
        ))}
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, borderLeft: { xs: 'none', lg: `1px solid ${C.outline}` }, pl: { xs: 0, lg: 3 } }}>
        <IconButton sx={{ color: C.muted, '&:hover': { color: '#fff', bgcolor: 'transparent' } }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={{ color: C.muted, '&:hover': { color: '#fff', bgcolor: 'transparent' }, display: { xs: 'none', sm: 'flex' } }}>
          <HelpIcon />
        </IconButton>
      </Box>
    </Box>
  </Box>
);

export default BuyerTopbar;
