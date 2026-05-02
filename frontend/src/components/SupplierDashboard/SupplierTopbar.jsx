import { Box, IconButton, InputBase } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HelpOutlinedIcon from '@mui/icons-material/HelpOutlined';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };
const topLinks = ['DIRECTORY', 'CONTRACTS', 'SUPPLY CHAIN'];

const SupplierTopbar = () => (
  <Box
    component="header"
    sx={{
      position: 'fixed', top: 0, right: 0,
      width: 'calc(100% - 256px)', height: 64, zIndex: 50,
      backgroundColor: '#000', borderBottom: `1px solid ${C.outline}`,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center', px: 4,
    }}
  >
    {/* Left: Search + Nav Links */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
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
            pl: '2.5rem', pr: 2, py: 0.75, width: 256,
            fontFamily: "'Manrope', sans-serif", fontSize: '0.625rem',
            fontWeight: 700, letterSpacing: '0.1em', color: '#fff',
            textTransform: 'uppercase',
            '& input::placeholder': { color: C.muted, opacity: 1 },
            '&.Mui-focused': { borderColor: C.primary },
            '&.Mui-focused fieldset': { borderColor: C.primary },
          }}
        />
      </Box>

      {/* Nav Links */}
      <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 3 }}>
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

    {/* Right: Icons + Brand */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
        <IconButton sx={{ color: C.muted, '&:hover': { color: '#fff', bgcolor: 'transparent' } }}>
          <NotificationsIcon />
        </IconButton>
        <IconButton sx={{ color: C.muted, '&:hover': { color: '#fff', bgcolor: 'transparent' } }}>
          <HelpOutlinedIcon />
        </IconButton>
      </Box>

    </Box>
  </Box>
);

export default SupplierTopbar;
