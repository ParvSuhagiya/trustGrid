import { Box, Typography, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { C } from './inventoryData';

/**
 * InventoryTablePagination
 * Footer row: item count label + prev / page number buttons / next.
 *
 * Props:
 *   totalShown — number of rows currently displayed
 *   totalCount — total number of supplies (e.g. 24)
 *   page       — current page number (1-indexed)
 *   totalPages — total number of pages
 *   onPageChange(n) — callback with the new page number
 */
const InventoryTablePagination = ({
  totalShown,
  totalCount = 24,
  page,
  totalPages,
  onPageChange,
}) => (
  <Box
    sx={{
      px: 3,
      py: 2,
      borderTop: `1px solid ${C.outline}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: '#000',
    }}
  >
    {/* Count label */}
    <Typography
      sx={{
        fontFamily: "'Inter', sans-serif",
        fontSize: '0.625rem',
        fontWeight: 700,
        textTransform: 'uppercase',
        color: C.muted,
        letterSpacing: '0.1em',
      }}
    >
      Showing {totalShown} of {totalCount} Supplies
    </Typography>

    {/* Page controls */}
    <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center' }}>
      {/* Prev */}
      <IconButton
        size="small"
        disabled={page === 1}
        onClick={() => onPageChange(Math.max(1, page - 1))}
        sx={{
          border: `1px solid ${C.outline}`,
          borderRadius: '4px',
          color: C.muted,
          '&:hover': { borderColor: '#fff' },
          transition: 'all 0.15s',
        }}
      >
        <ChevronLeftIcon sx={{ fontSize: '1rem' }} />
      </IconButton>

      {/* Page number buttons */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
        <Box
          key={n}
          component="button"
          onClick={() => onPageChange(n)}
          sx={{
            px: 1.25,
            py: 0.4,
            borderRadius: '4px',
            fontFamily: "'Inter', sans-serif",
            fontSize: '0.625rem',
            fontWeight: 700,
            cursor: 'pointer',
            border: page === n ? 'none' : `1px solid ${C.outline}`,
            backgroundColor: page === n ? '#fff' : 'transparent',
            color: page === n ? '#000' : C.muted,
            '&:hover': {
              borderColor: '#fff',
              color: page === n ? '#000' : '#fff',
            },
            transition: 'all 0.15s',
          }}
        >
          {n}
        </Box>
      ))}

      {/* Next */}
      <IconButton
        size="small"
        disabled={page === totalPages}
        onClick={() => onPageChange(Math.min(totalPages, page + 1))}
        sx={{
          border: `1px solid ${C.outline}`,
          borderRadius: '4px',
          color: C.muted,
          '&:hover': { borderColor: '#fff' },
          transition: 'all 0.15s',
        }}
      >
        <ChevronRightIcon sx={{ fontSize: '1rem' }} />
      </IconButton>
    </Box>
  </Box>
);

export default InventoryTablePagination;
