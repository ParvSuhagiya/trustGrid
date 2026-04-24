import { Box, Typography } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';
import PendingActionsIcon from '@mui/icons-material/PendingActions';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };
const card = { backgroundColor: '#000', border: `1px solid ${C.outline}`, borderRadius: '10px', p: 3 };

const StatusCards = () => (
  <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3, mt: 6 }}>

    {/* Unsigned Contracts */}
    <Box sx={card}>
      <DescriptionIcon sx={{ color: '#fff', mb: 2, display: 'block' }} />
      <Typography component="h5" sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', mb: 0.5 }}>Unsigned Contracts</Typography>
      <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700, mb: 2 }}>3 contracts await legal approval.</Typography>
      <Box sx={{ display: 'flex', ml: '-8px' }}>
        {[null, null, '+1'].map((label, i) => (
          <Box
            key={i}
            sx={{
              width: 24, height: 24, borderRadius: '50%',
              border: `1px solid ${C.outline}`, backgroundColor: C.outline,
              ml: '-8px', display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}
          >
            {label && <Typography sx={{ fontSize: '8px', fontWeight: 700, color: '#fff' }}>{label}</Typography>}
          </Box>
        ))}
      </Box>
    </Box>

    {/* Vendor Compliance */}
    <Box sx={card}>
      <PendingActionsIcon sx={{ color: '#fff', mb: 2, display: 'block' }} />
      <Typography component="h5" sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', mb: 0.5 }}>Vendor Compliance</Typography>
      <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700, mb: 2 }}>All core vendors are compliant.</Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
        <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.primary }} />
        <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em', color: C.primary }}>
          Healthy Status
        </Typography>
      </Box>
    </Box>

    {/* Security Score */}
    <Box sx={card}>
      <VerifiedUserIcon sx={{ color: '#fff', mb: 2, display: 'block' }} />
      <Typography component="h5" sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', mb: 0.5 }}>Security Score</Typography>
      <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700, mb: 2 }}>Infrastructure audit passed.</Typography>
      <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontSize: '1.25rem', fontWeight: 800, color: '#fff' }}>98/100</Typography>
    </Box>

  </Box>
);

export default StatusCards;
