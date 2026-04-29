import { Box, Typography, IconButton } from '@mui/material';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const C = { muted: '#CCCCCC', outline: '#333333' };

const archivedItems = [
  {
    id: 1,
    icon: 'inventory',
    company: 'North Star Retail',
    description: 'Custom Fabric Batch Order',
    orderId: '#44920',
    expectedNet: '$12,400',
    status: 'Hold',
  },
  {
    id: 2,
    icon: 'rocket_launch',
    company: 'Orbital Core',
    description: 'Titanium Alloys',
    orderId: '#44921',
    expectedNet: '$440,000',
    status: 'Reviewing',
  },
];

const ListItem = ({ icon, company, description, orderId, expectedNet, status }) => (
  <Box
    sx={{
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      p: 3, borderRadius: '10px',
      display: 'flex', alignItems: 'center', justifyContent: 'space-between',
      transition: 'border-color 0.2s',
      '&:hover': { borderColor: '#fff' },
    }}
  >
    {/* Left: icon + info */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 3 }}>
      <Box
        sx={{
          width: 48, height: 48,
          border: `1px solid ${C.outline}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
        }}
      >
        <span className="material-symbols-outlined">{icon}</span>
      </Box>
      <Box>
        <Typography sx={{ fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif" }}>
          {company}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.7rem', color: C.muted, fontWeight: 700,
            textTransform: 'uppercase', fontFamily: "'Inter', sans-serif",
          }}
        >
          {description} • ID {orderId}
        </Typography>
      </Box>
    </Box>

    {/* Right: value + status + open */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 6 }}>
      <Box sx={{ textAlign: 'right' }}>
        <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif" }}>
          {expectedNet}
        </Typography>
        <Typography
          sx={{
            fontSize: '0.625rem', textTransform: 'uppercase',
            color: C.muted, fontWeight: 700, fontFamily: "'Inter', sans-serif",
          }}
        >
          Expected Net
        </Typography>
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
        <Box
          sx={{
            border: `1px solid ${C.outline}`, color: C.muted,
            fontSize: '0.625rem', px: 1.5, py: 0.5, borderRadius: '4px',
            textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.1em',
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          {status}
        </Box>
        <IconButton
          size="small"
          sx={{
            width: 32, height: 32, borderRadius: '50%',
            border: `1px solid ${C.outline}`, color: '#fff',
            '&:hover': { borderColor: '#fff' },
          }}
        >
          <OpenInNewIcon sx={{ fontSize: '0.875rem' }} />
        </IconButton>
      </Box>
    </Box>
  </Box>
);

const ArchivedRequestsList = () => (
  <Box sx={{ gridColumn: 'span 12', mt: 6 }}>
    {/* Section header */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
          fontSize: '1.5rem', letterSpacing: '-0.02em',
          color: '#fff', textTransform: 'uppercase',
        }}
      >
        Archived &amp; Pending Review
      </Typography>
      <Box
        component="button"
        sx={{
          display: 'flex', alignItems: 'center', gap: 1,
          background: 'none', border: 'none', cursor: 'pointer',
          color: '#fff', fontWeight: 700, fontSize: '0.7rem',
          textTransform: 'uppercase', letterSpacing: '0.1em',
          fontFamily: "'Manrope', sans-serif",
          '&:hover': { gap: 1.5 },
          transition: 'gap 0.2s',
        }}
      >
        View Audit Log <ArrowForwardIcon sx={{ fontSize: '0.875rem' }} />
      </Box>
    </Box>

    {/* List */}
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      {archivedItems.map((item) => (
        <ListItem key={item.id} {...item} />
      ))}
    </Box>
  </Box>
);

export default ArchivedRequestsList;
