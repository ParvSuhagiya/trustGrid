import { Box } from '@mui/material';
import { C } from './inventoryData';

/**
 * InventoryStatusBadge
 * Coloured pill showing "In Stock" (green) or "Low Stock" (red).
 *
 * Props:
 *   status — 'In Stock' | 'Low Stock'
 */
const InventoryStatusBadge = ({ status }) => {
  const isLow = status === 'Low Stock';
  return (
    <Box
      component="span"
      sx={{
        display: 'inline-block',
        px: 1.5,
        py: 0.4,
        border: `1px solid ${isLow ? C.error : C.accent}`,
        color: isLow ? C.error : C.accent,
        fontSize: '0.625rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        letterSpacing: '0.1em',
        borderRadius: '4px',
        fontFamily: "'Inter', sans-serif",
      }}
    >
      {status}
    </Box>
  );
};

export default InventoryStatusBadge;
