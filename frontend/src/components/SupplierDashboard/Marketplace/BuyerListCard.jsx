import { Box, Typography, IconButton } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const C = { accent: '#22C55E', muted: '#CCCCCC', outline: '#333333' };

/**
 * Reusable small buyer card (col-span-4 in the bento grid).
 * footerType: 'avatars' | 'badge'
 */
const BuyerListCard = ({
  icon,            // Material Symbols icon name string e.g. 'factory'
  id,              // e.g. 'B-9032'
  company,
  industry,
  activeSince,
  annualSpend,
  footerType = 'badge',  // 'avatars' | 'badge'
  badgeColor = '#22C55E',
  badgeLabel = '',
  avatars = [],    // array of initials strings e.g. ['MK','JD']
}) => (
  <Box
    sx={{
      gridColumn: { xs: 'span 12', md: 'span 4' },
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      borderRadius: '10px',
      p: 3,
      transition: 'border-color 0.2s',
      '&:hover': { borderColor: C.muted },
    }}
  >
    {/* Top row: icon + ID */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
      <Box
        sx={{
          width: 48, height: 48, border: `1px solid ${C.outline}`,
          borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >
        <span className="material-symbols-outlined" style={{ color: '#fff' }}>{icon}</span>
      </Box>
      <Typography sx={{ fontSize: '0.625rem', fontWeight: 700, color: C.muted, letterSpacing: '0.1em', fontFamily: "'Manrope', sans-serif" }}>
        ID: {id}
      </Typography>
    </Box>

    {/* Company & industry */}
    <Typography
      sx={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', textTransform: 'uppercase' }}
    >
      {company}
    </Typography>
    <Typography sx={{ fontSize: '0.7rem', color: C.muted, fontWeight: 700, mt: 0.5, fontFamily: "'Inter', sans-serif" }}>
      {industry}
    </Typography>

    {/* Stats */}
    <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {[
        { label: 'Active Since', value: activeSince },
        { label: 'Annual Spend', value: annualSpend },
      ].map(({ label, value }) => (
        <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '0.7rem', color: C.muted, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>{label}</Typography>
          <Typography sx={{ fontSize: '0.7rem', fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif" }}>{value}</Typography>
        </Box>
      ))}
    </Box>

    <Box sx={{ height: '1px', backgroundColor: C.outline, my: 3 }} />

    {/* Footer */}
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      {footerType === 'avatars' ? (
        <Box sx={{ display: 'flex', ml: '-4px' }}>
          {avatars.map((init, i) => (
            <Box
              key={i}
              sx={{
                width: 24, height: 24, borderRadius: '50%',
                backgroundColor: i % 2 === 0 ? '#000' : '#fff',
                color: i % 2 === 0 ? '#fff' : '#000',
                border: i % 2 === 0 ? `1px solid ${C.outline}` : '1px solid #000',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '0.5rem', fontWeight: 700,
                ml: i > 0 ? '-6px' : 0, zIndex: avatars.length - i,
              }}
            >
              {init}
            </Box>
          ))}
        </Box>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: badgeColor }} />
          <Typography sx={{ fontSize: '0.625rem', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 700, fontFamily: "'Manrope', sans-serif" }}>
            {badgeLabel}
          </Typography>
        </Box>
      )}
      <IconButton
        size="small"
        sx={{ color: C.muted, p: 0.5, '&:hover': { color: '#fff' } }}
      >
        <MoreVertIcon sx={{ fontSize: '1.1rem' }} />
      </IconButton>
    </Box>
  </Box>
);

export default BuyerListCard;
