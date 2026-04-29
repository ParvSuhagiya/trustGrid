import { Box } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';

const MarketplaceFAB = () => (
  <Box
    component="button"
    sx={{
      position: 'fixed', bottom: 32, right: 32, zIndex: 100,
      width: 56, height: 56,
      backgroundColor: '#fff', color: '#000',
      border: '1px solid #333333',
      borderRadius: '10px', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      transition: 'transform 0.2s, background-color 0.2s',
      '&:hover': { transform: 'scale(1.05)', backgroundColor: '#e5e5e5' },
      '&:active': { transform: 'scale(0.95)' },
    }}
  >
    <FilterListIcon />
  </Box>
);

export default MarketplaceFAB;
