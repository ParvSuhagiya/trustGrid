import { Box, Typography } from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import NatureIcon from '@mui/icons-material/Nature';
import StorageIcon from '@mui/icons-material/Storage';
import SmallRequestCard from './SmallRequestCard';

const getIconForProduct = (productName) => {
  const name = (productName || '').toLowerCase();
  if (name.includes('energy') || name.includes('eco') || name.includes('green')) return <NatureIcon sx={{ fontSize: '1.2rem' }} />;
  if (name.includes('data') || name.includes('server')) return <StorageIcon sx={{ fontSize: '1.2rem' }} />;
  return <PrecisionManufacturingIcon sx={{ fontSize: '1.2rem' }} />;
};

const SmallRequestsGrid = ({ requests, onAccept, onReject }) => (
  <Box
    sx={{
      gridColumn: 'span 12',
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
      gap: 3,
      mt: 3,
    }}
  >
    {requests.map((req) => (
      <SmallRequestCard 
        key={req._id} 
        icon={getIconForProduct(req.productName)}
        company={req.buyerId?.name || 'Anonymous Buyer'}
        requestType={req.productName}
        timeAgo={new Date(req.createdAt).toLocaleDateString()}
        value={`$${req.budget?.toLocaleString()}`}
        quantity={`${req.quantity} Units`}
        onAccept={() => onAccept(req._id)}
        onReject={() => onReject(req._id)}
      />
    ))}
  </Box>
);

export default SmallRequestsGrid;
