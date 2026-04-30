import { Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InventoryStatusBadge from './InventoryStatusBadge';
import LayersIcon from '@mui/icons-material/Layers';
import { C } from './inventoryData';

/**
 * InventoryTableRow
 * A single <tr> in the inventory table.
 */
const InventoryTableRow = ({ item, onEdit, onDelete }) => {
  // calculate a dummy stock percentage if needed or just use 100
  const stockPct = item.quantity > 50 ? 100 : (item.quantity / 50) * 100;
  const status = item.quantity > 0 ? 'instock' : 'lowstock';

  return (
    <Box
      component="tr"
      sx={{
        borderBottom: `1px solid ${C.outline}`,
        '&:last-of-type': { borderBottom: 'none' },
        '&:hover': { backgroundColor: '#0d0d0d' },
        /* Reveal action buttons on row hover via CSS class */
        '&:hover .row-actions': { opacity: 1 },
        transition: 'background-color 0.15s',
      }}
    >
      {/* ── Column 1: Item & Grade ── */}
      <Box component="td" sx={{ px: 3, py: 2.5 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Icon tile */}
          <Box
            sx={{
              width: 40,
              height: 40,
              borderRadius: '6px',
              border: `1px solid ${C.outline}`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#ccc',
              flexShrink: 0,
            }}
          >
            <LayersIcon />
          </Box>

          {/* Name + SKU */}
          <Box>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: '0.875rem',
                color: '#fff',
              }}
            >
              {item.productName}
            </Typography>
            <Typography
              sx={{
                fontFamily: "'Inter', sans-serif",
                fontSize: '0.625rem',
                fontWeight: 700,
                color: C.muted,
                mt: 0.25,
              }}
            >
              CAT: {item.category}
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* ── Column 2: Stock Level ── */}
      <Box component="td" sx={{ px: 3, py: 2.5 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
          {/* Quantity label */}
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: '0.875rem',
              color: '#fff',
            }}
          >
            {item.quantity} units (${item.price}/unit)
          </Typography>

          {/* Progress bar */}
          <Box
            sx={{
              width: 120,
              height: 4,
              backgroundColor: C.outline,
              borderRadius: '9999px',
              overflow: 'hidden',
            }}
          >
            <Box
              sx={{
                height: '100%',
                width: `${stockPct}%`,
                backgroundColor: stockPct <= 30 ? '#fff' : C.accent,
                borderRadius: '9999px',
                transition: 'width 0.4s',
              }}
            />
          </Box>
        </Box>
      </Box>

      {/* ── Column 3: Status ── */}
      <Box component="td" sx={{ px: 3, py: 2.5 }}>
        <InventoryStatusBadge status={status} />
      </Box>

      {/* ── Column 4: Actions (hover-reveal) ── */}
      <Box component="td" sx={{ px: 3, py: 2.5, textAlign: 'right' }}>
        <Box
          className="row-actions"
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: 0.75,
            opacity: 0,
            transition: 'opacity 0.15s',
          }}
        >
          <IconButton
            size="small"
            onClick={() => onEdit?.(item._id)}
            sx={{
              color: C.muted,
              borderRadius: '4px',
              '&:hover': { backgroundColor: '#fff', color: '#000' },
              transition: 'all 0.15s',
            }}
          >
            <EditIcon sx={{ fontSize: '1rem' }} />
          </IconButton>

          <IconButton
            size="small"
            onClick={() => onDelete?.(item._id)}
            sx={{
              color: C.muted,
              borderRadius: '4px',
              '&:hover': { backgroundColor: C.error, color: '#fff' },
              transition: 'all 0.15s',
            }}
          >
            <DeleteIcon sx={{ fontSize: '1rem' }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default InventoryTableRow;
