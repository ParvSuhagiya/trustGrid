import { Box } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const BuyerRequestsFAB = () => (
  <Box
    component="button"
    sx={{
      position: 'fixed', bottom: 40, right: 40,
      width: 64, height: 64,
      backgroundColor: '#fff', color: '#000',
      border: '1px solid #333333',
      borderRadius: '50%', cursor: 'pointer',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      zIndex: 50,
      transition: 'background-color 0.2s, transform 0.2s',
      '&:hover': {
        backgroundColor: '#CCCCCC',
        '& .fab-icon': { transform: 'rotate(90deg)' },
      },
    }}
  >
    <AddIcon
      className="fab-icon"
      sx={{ fontSize: '1.75rem', transition: 'transform 0.2s' }}
    />
  </Box>
);

export default BuyerRequestsFAB;
