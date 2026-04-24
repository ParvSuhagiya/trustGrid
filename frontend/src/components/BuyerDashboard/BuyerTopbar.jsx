import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpIcon from '@mui/icons-material/Help';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };
const topLinks = ['Directory', 'Contracts', 'Supply Chain'];

const BuyerTopbar = () => (
  <Box
    component="header"
    sx={{
      position: 'fixed', top: 0, right: 0,
      width: 'calc(100% - 256px)', height: 64, zIndex: 50,
      backgroundColor: '#000', borderBottom: `1px solid ${C.outline}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4,
    }}
  >
    {/* Search */}
    <Box sx={{ display: 'flex', alignItems: 'center', flex: 1, maxWidth: 560 }}>
      <Box sx={{ position: 'relative', width: '100%' }}>
        <SearchIcon sx={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)', color: 'rgba(204,204,204,0.5)', fontSize: '1rem' }} />
        <InputBase
          placeholder="SEARCH CONTRACTS, VENDORS, ASSETS..."
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
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 4, ml: 4 }}>
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
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
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, borderLeft: `1px solid ${C.outline}`, pl: 4 }}>
        <IconButton sx={{ color: C.muted, '&:hover': { color: '#fff', bgcolor: 'transparent' } }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={{ color: C.muted, '&:hover': { color: '#fff', bgcolor: 'transparent' } }}>
          <HelpIcon />
        </IconButton>
      </Box>
    </Box>
  </Box>
);

export default BuyerTopbar;
