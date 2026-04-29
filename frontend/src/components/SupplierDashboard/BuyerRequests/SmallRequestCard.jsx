import { Box, Typography, Button } from '@mui/material';

const C = { muted: '#CCCCCC', outline: '#333333' };

const SmallRequestCard = ({
  icon,
  company,
  requestType,
  timeAgo,
  value,
  quantity,
}) => (
  <Box
    sx={{
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      p: 3, borderRadius: '10px',
      transition: 'border-color 0.2s',
      '&:hover': { borderColor: '#fff' },
    }}
  >
    {/* Top: icon + time */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', mb: 3 }}>
      <Box
        sx={{
          width: 40, height: 40, borderRadius: '8px',
          border: `1px solid ${C.outline}`, backgroundColor: '#000',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
        }}
      >
        {icon}
      </Box>
      <Typography
        sx={{
          fontSize: '0.625rem', color: C.muted,
          fontWeight: 700, fontFamily: "'Manrope', sans-serif",
          textTransform: 'uppercase',
        }}
      >
        {timeAgo}
      </Typography>
    </Box>

    {/* Company & type */}
    <Typography
      sx={{
        fontFamily: "'Manrope', sans-serif", fontWeight: 700,
        fontSize: '1.1rem', color: '#fff', mb: 0.5,
      }}
    >
      {company}
    </Typography>
    <Typography
      sx={{
        fontSize: '0.7rem', color: C.muted, fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        mb: 3, fontFamily: "'Inter', sans-serif",
      }}
    >
      {requestType}
    </Typography>

    {/* Details */}
    <Box
      sx={{
        borderTop: `1px solid ${C.outline}`, pt: 2,
        display: 'flex', flexDirection: 'column', gap: 1.5, mb: 3,
      }}
    >
      {[
        { label: 'Value', val: value },
        { label: 'Quantity', val: quantity },
      ].map(({ label, val }) => (
        <Box key={label} sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700, textTransform: 'uppercase', fontFamily: "'Inter', sans-serif" }}>
            {label}
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif" }}>
            {val}
          </Typography>
        </Box>
      ))}
    </Box>

    {/* Action buttons */}
    <Box sx={{ display: 'flex', gap: 1 }}>
      <Button
        sx={{
          flex: 1, py: 1,
          backgroundColor: '#fff', color: '#000',
          fontWeight: 700, borderRadius: '4px',
          fontSize: '0.7rem', textTransform: 'uppercase',
          fontFamily: "'Manrope', sans-serif",
          '&:hover': { backgroundColor: '#CCCCCC' },
        }}
      >
        Accept
      </Button>
      <Button
        variant="outlined"
        sx={{
          flex: 1, py: 1,
          borderColor: C.outline, color: '#fff',
          fontWeight: 700, borderRadius: '4px',
          fontSize: '0.7rem', textTransform: 'uppercase',
          fontFamily: "'Manrope', sans-serif",
          '&:hover': { backgroundColor: '#fff', color: '#000', borderColor: '#fff' },
        }}
      >
        Reject
      </Button>
    </Box>
  </Box>
);

export default SmallRequestCard;
