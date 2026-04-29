import { Box, Typography, IconButton } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import DownloadIcon from '@mui/icons-material/Download';
import { C } from './inventoryData';

const iconBtnSx = {
  border: `1px solid ${C.outline}`,
  borderRadius: '6px',
  color: C.muted,
  '&:hover': { borderColor: '#fff', color: '#fff' },
  transition: 'all 0.15s',
};

/**
 * InventoryTableToolbar
 * Section heading + filter / download action buttons.
 *
 * Props:
 *   onFilter   — optional callback for filter button click
 *   onDownload — optional callback for download button click
 */
const InventoryTableToolbar = ({ onFilter, onDownload }) => (
  <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
    <Typography
      component="h2"
      sx={{
        fontFamily: "'Manrope', sans-serif",
        fontWeight: 700,
        fontSize: '1.125rem',
        textTransform: 'uppercase',
        color: '#fff',
      }}
    >
      Active Inventory
    </Typography>

    <Box sx={{ display: 'flex', gap: 1 }}>
      <IconButton size="small" onClick={onFilter} sx={iconBtnSx}>
        <FilterListIcon sx={{ fontSize: '1rem' }} />
      </IconButton>
      <IconButton size="small" onClick={onDownload} sx={iconBtnSx}>
        <DownloadIcon sx={{ fontSize: '1rem' }} />
      </IconButton>
    </Box>
  </Box>
);

export default InventoryTableToolbar;
