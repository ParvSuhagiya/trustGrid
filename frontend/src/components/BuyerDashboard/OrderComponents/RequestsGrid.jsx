import { Grid, CircularProgress, Box, Typography } from '@mui/material';
import OrderCard from './OrderCard';
import NewRequestCard from './NewRequestCard';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PublicIcon from '@mui/icons-material/Public';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useState, useEffect } from 'react';
import { apiFetch } from '../../../utils/api';

/**
 * RequestsGrid
 * Renders the responsive card grid fetching real data from API.
 */
const RequestsGrid = () => {
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRequests = async () => {
    try {
      const data = await apiFetch('/api/requests');
      setRequests(data);
    } catch (error) {
      console.error('Failed to fetch requests', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}><CircularProgress color="success" /></Box>;
  }

  return (
    <Grid container spacing={3}>
      {requests.length === 0 ? (
        <Grid item xs={12}>
          <Typography sx={{ color: '#ccc', textAlign: 'center', py: 4 }}>
            No requests found. Create a new request to get started.
          </Typography>
        </Grid>
      ) : (
        requests.map((order) => (
          <Grid item xs={12} md={6} xl={4} key={order._id}>
            <OrderCard 
              icon={<PrecisionManufacturingIcon />}
              status={order.status.charAt(0).toUpperCase() + order.status.slice(1)} // e.g. Pending
              title={order.productName}
              quantity={order.quantity.toString()}
              date={new Date(order.createdAt).toLocaleDateString()}
              locationIcon={<PublicIcon sx={{ fontSize: '0.875rem' }} />}
              locationLabel={order.supplierId ? order.supplierId.name : 'Global Search'}
              primaryAction="View Details"
              secondaryIcon={<ArrowForwardIcon sx={{ fontSize: '1.25rem' }} />}
            />
          </Grid>
        ))
      )}

      {/* CTA card always last */}
      <Grid item xs={12} md={6} xl={4}>
        <NewRequestCard onSuccess={fetchRequests} />
      </Grid>
    </Grid>
  );
};

export default RequestsGrid;
