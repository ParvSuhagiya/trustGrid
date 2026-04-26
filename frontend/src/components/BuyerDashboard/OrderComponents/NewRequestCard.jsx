import { Box, Typography, Button } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import C from './colors';

/**
 * NewRequestCard
 * Dashed-border CTA card that prompts the user to submit a new supply request.
 * Always appears as the last card in the requests grid.
 */
const NewRequestCard = () => (
  <Box
    sx={{
      backgroundColor: '#000',
      border: `2px dashed ${C.outline}`,
      borderRadius: '8px',
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      gap: 2,
      minHeight: 250,
      transition: 'border-color 0.3s',
      '&:hover': { borderColor: C.primary },
    }}
  >
    {/* Icon circle */}
    <Box
      sx={{
        width: 64, height: 64, borderRadius: '50%',
        border: `1px solid ${C.outline}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        mb: 1,
      }}
    >
      <AddBoxIcon sx={{ fontSize: '1.875rem', color: C.muted }} />
    </Box>

    {/* Text */}
    <Box>
      <Typography sx={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>
        NEW SUPPLY REQUEST
      </Typography>
      <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700, mt: 0.5 }}>
        Submit a new requisition for quote
      </Typography>
    </Box>

    {/* CTA */}
    <Button
      variant="contained"
      sx={{
        mt: 2, px: 4, py: 1,
        fontSize: '0.75rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em',
        backgroundColor: '#fff', color: '#000', borderRadius: '8px',
        '&:hover': { backgroundColor: C.muted },
      }}
    >
      INITIATE
    </Button>
  </Box>
);

export default NewRequestCard;
