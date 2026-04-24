import { Box, Typography } from '@mui/material';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const contracts = [
  {
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDP14ljaw7RwKkbUSyjRw6SpfjHAd1lPsj10UD2mtqYxu95GQn7vxMT80RJPgotWEaeD2g7IZRUrSViKLXaoCdHn6o1XntELG6Q_OB2lhclKF_8C8DsQgilvm4XeRDyWQuncU9jyvxKM2AX3k1bgrrUDakriAbVKwDh0HsupmpmM0Q-S2D9vxYehVnS24RbtzO2aXmdnDSvqYk9_E8ba5FRz-hFGgLZM1PNP6c7rw8p2o3pMS3VDMysBLivn5Vf8D5azydYfY_4cTpM',
    name: 'Lumina Systems Inc.', category: 'Cloud Infrastructure',
    amount: '$42,000', status: 'Active', statusColor: C.primary,
  },
  {
    logo: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDwLN7lZl32HEJ3KE0k_bVzKikDFNvlFGwVOkoY8BZMMoL_J2wH-nif4z-d7nKrEXyFb6C09ukw9aehYf-dEn5yFid7ie0wYZ1O6HHgCh-r2gFmw4uACBcyXtzHMSEM9Hqer-6r3A5t-SWVKMTP9xmvBBFM2rZwPRRL8jyY-ntW2EnpzrVtXhHwyW3GpWPHT6DSKW_a4XOo15o7aglES6fHz45cH7MHUJs9OD8BShKP21rtpkzwZ2B-8LzqyqH_YjXtQDzyuMbuOWYB',
    name: 'Global Logistics', category: 'Freight & Shipping',
    amount: '$18,400', status: 'Review', statusColor: C.muted,
  },
];

const ActiveContracts = () => (
  <Box sx={{ backgroundColor: '#000', border: `1px solid ${C.outline}`, borderRadius: '10px', p: 3 }}>
    {/* Header */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
      <Typography sx={{ fontSize: '0.625rem', fontFamily: "'Manrope',sans-serif", fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.2em', color: C.muted }}>
        Active Contracts
      </Typography>
      <MoreHorizIcon sx={{ fontSize: '1rem', color: C.muted, cursor: 'pointer', transition: 'color 0.2s', '&:hover': { color: '#fff' } }} />
    </Box>

    {/* List */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
      {contracts.map((c) => (
        <Box key={c.name} sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          <Box sx={{ width: 40, height: 40, borderRadius: '8px', backgroundColor: C.outline, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
            <Box component="img" src={c.logo} alt={c.name} sx={{ width: 24, height: 24, filter: 'grayscale(1) brightness(2)', objectFit: 'contain' }} />
          </Box>
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{c.name}</Typography>
            <Typography sx={{ fontSize: '0.625rem', color: C.muted, fontWeight: 700 }}>{c.category}</Typography>
          </Box>
          <Box sx={{ textAlign: 'right', flexShrink: 0 }}>
            <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>{c.amount}</Typography>
            <Typography sx={{ fontSize: '0.625rem', fontWeight: 700, color: c.statusColor }}>{c.status}</Typography>
          </Box>
        </Box>
      ))}
    </Box>

    {/* View All Button */}
    <Box
      component="button"
      sx={{
        width: '100%', mt: 4, py: 1.5,
        fontFamily: "'Manrope',sans-serif", fontWeight: 700,
        fontSize: '0.625rem', textTransform: 'uppercase', letterSpacing: '0.15em',
        color: C.muted, border: `1px solid ${C.outline}`, borderRadius: '8px',
        backgroundColor: 'transparent', cursor: 'pointer',
        transition: 'color 0.2s',
        '&:hover': { color: '#fff' },
      }}
    >
      View All Contracts
    </Box>
  </Box>
);

export default ActiveContracts;
