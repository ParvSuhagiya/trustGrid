import { Box, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import InventoryStatusBadge from './InventoryStatusBadge';
import { C } from './inventoryData';

/**
 * InventoryTableRow
 * A single <tr> in the inventory table.
 *
 * Props:
 *   item     — { id, icon, iconColor, name, sku, qty, stockPct, status }
 *   onEdit(id)
 *   onDelete(id)
 */
const InventoryTableRow = ({ item, onEdit, onDelete }) => (
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
            color: item.iconColor,
            flexShrink: 0,
          }}
        >
          {item.icon}
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
            {item.name}
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
            CAT: {item.sku}
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
          {item.qty}
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
              width: `${item.stockPct}%`,
              backgroundColor: item.stockPct <= 30 ? '#fff' : C.accent,
              borderRadius: '9999px',
              transition: 'width 0.4s',
            }}
          />
        </Box>
      </Box>
    </Box>

    {/* ── Column 3: Status ── */}
    <Box component="td" sx={{ px: 3, py: 2.5 }}>
      <InventoryStatusBadge status={item.status} />
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
          onClick={() => onEdit?.(item.id)}
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
          onClick={() => onDelete?.(item.id)}
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

export default InventoryTableRow;
