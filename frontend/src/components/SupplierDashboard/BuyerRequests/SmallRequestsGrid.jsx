import { Box } from '@mui/material';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import NatureIcon from '@mui/icons-material/Nature';
import StorageIcon from '@mui/icons-material/Storage';
import SmallRequestCard from './SmallRequestCard';

const smallRequests = [
  {
    id: 1,
    icon: <PrecisionManufacturingIcon sx={{ fontSize: '1.2rem' }} />,
    company: 'AeroTech Systems',
    requestType: 'Precision Component Batch',
    timeAgo: '2H AGO',
    value: '$245,000',
    quantity: '1,200 Units',
  },
  {
    id: 2,
    icon: <NatureIcon sx={{ fontSize: '1.2rem' }} />,
    company: 'GreenGrid Energy',
    requestType: 'Renewable Storage Solutions',
    timeAgo: '4H AGO',
    value: '$890,000',
    quantity: 'Various',
  },
  {
    id: 3,
    icon: <StorageIcon sx={{ fontSize: '1.2rem' }} />,
    company: 'DataStream Int.',
    requestType: 'Infrastructure Upgrade',
    timeAgo: '6H AGO',
    value: '$125,000',
    quantity: 'Service Fee',
  },
];

const SmallRequestsGrid = () => (
  <Box
    sx={{
      gridColumn: 'span 12',
      display: 'grid',
      gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' },
      gap: 3,
      mt: 3,
    }}
  >
    {smallRequests.map((req) => (
      <SmallRequestCard key={req.id} {...req} />
    ))}
  </Box>
);

export default SmallRequestsGrid;
