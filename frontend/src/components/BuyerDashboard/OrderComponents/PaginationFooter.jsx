import { Box, Typography, Button } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import C from './colors';

const PAGES = [1, 2, 3];

/**
 * PaginationFooter
 * Shows "Showing X of Y active requests" on the left and
 * prev / page-number / next buttons on the right.
 *
 * Props:
 *   showing  – number of items currently visible (default 5)
 *   total    – total number of items (default 42)
 *   current  – currently active page (default 1)
 */
const PaginationFooter = ({ showing = 5, total = 42, current = 1 }) => (
  <Box
    component="footer"
    sx={{
      mt: 8,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
    }}
  >
    {/* Result count */}
    <Typography
      sx={{
        fontSize: '0.75rem', color: C.muted,
        fontWeight: 700, textTransform: 'uppercase',
      }}
    >
      Showing{' '}
      <Box component="span" sx={{ color: '#fff' }}>{showing}</Box>
      {' '}of{' '}
      <Box component="span" sx={{ color: '#fff' }}>{total}</Box>
      {' '}active requests
    </Typography>

    {/* Pagination controls */}
    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>

      {/* Previous */}
      <Button
        variant="outlined"
        aria-label="Previous page"
        sx={{
          minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '8px',
          border: `1px solid ${C.outline}`, color: '#fff',
          '&:hover': { backgroundColor: '#fff', color: '#000', borderColor: '#fff' },
        }}
      >
        <ChevronLeftIcon />
      </Button>

      {/* Page numbers */}
      <Box sx={{ display: 'flex', gap: 0.5 }}>
        {PAGES.map((page) => {
          const isActive = page === current;
          return (
            <Button
              key={page}
              aria-label={`Page ${page}`}
              aria-current={isActive ? 'page' : undefined}
              sx={
                isActive
                  ? {
                      minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '8px',
                      backgroundColor: '#fff', color: '#000', fontWeight: 700,
                      '&:hover': { backgroundColor: C.muted },
                    }
                  : {
                      minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '8px',
                      border: `1px solid ${C.outline}`, color: '#fff', fontWeight: 700,
                      '&:hover': { backgroundColor: '#fff', color: '#000', borderColor: '#fff' },
                    }
              }
            >
              {page}
            </Button>
          );
        })}
      </Box>

      {/* Next */}
      <Button
        variant="outlined"
        aria-label="Next page"
        sx={{
          minWidth: 40, width: 40, height: 40, p: 0, borderRadius: '8px',
          border: `1px solid ${C.outline}`, color: '#fff',
          '&:hover': { backgroundColor: '#fff', color: '#000', borderColor: '#fff' },
        }}
      >
        <ChevronRightIcon />
      </Button>

    </Box>
  </Box>
);

export default PaginationFooter;
