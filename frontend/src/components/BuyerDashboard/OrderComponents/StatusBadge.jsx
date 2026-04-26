import { Box } from '@mui/material';
import C from './colors';

/**
 * StatusBadge
 * Renders a pill showing: Pending | Accepted | Rejected
 */
const StatusBadge = ({ status }) => {
  const isAccepted = status === 'Accepted';
  const isRejected = status === 'Rejected';

  return (
    <Box
      sx={{
        display: 'inline-flex', alignItems: 'center', gap: 0.75,
        px: 1.5, py: 0.5, borderRadius: '9999px',
        border: `1px solid ${isAccepted ? C.primary : C.outline}`,
        fontSize: '0.625rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.07em',
        color: isAccepted ? C.primary : C.muted,
      }}
    >
      <Box
        sx={{
          width: 6, height: 6, borderRadius: '50%',
          backgroundColor: isAccepted ? C.primary : isRejected ? '#fff' : C.muted,
        }}
      />
      {status}
    </Box>
  );
};

export default StatusBadge;
