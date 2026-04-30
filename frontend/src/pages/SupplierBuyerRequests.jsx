import { Box, CircularProgress, Typography } from '@mui/material';
import BuyerRequestsHeader from '../components/SupplierDashboard/BuyerRequests/BuyerRequestsHeader';
import FeaturedRequestCard from '../components/SupplierDashboard/BuyerRequests/FeaturedRequestCard';
import MarketTrendsPanel from '../components/SupplierDashboard/BuyerRequests/MarketTrendsPanel';
import SmallRequestsGrid from '../components/SupplierDashboard/BuyerRequests/SmallRequestsGrid';
import ArchivedRequestsList from '../components/SupplierDashboard/BuyerRequests/ArchivedRequestsList';
import BuyerRequestsFAB from '../components/SupplierDashboard/BuyerRequests/BuyerRequestsFAB';
import { useState, useEffect } from 'react';
import { apiFetch } from '../utils/api';
import useSEO from '../hooks/useSEO';

/**
 * SupplierBuyerRequests — rendered inside SupplierDashboardLayout <Outlet>.
 * Displays pending marketplace requests and allows the supplier to act on them.
 */
const SupplierBuyerRequests = () => {
  useSEO({
    title: 'Buyer Requests',
    description: 'View and respond to incoming buyer requests on TrustGrid. Accept or decline orders and manage your procurement pipeline.',
  });
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const data = await apiFetch('/api/supplier/requests');
        setRequests(data);
      } catch (error) {
        console.error('Failed to fetch supplier requests:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchRequests();
  }, []);

  const handleAccept = async (id) => {
    try {
      await apiFetch(`/api/supplier/requests/${id}/accept`, { method: 'PATCH' });
      // Remove from pending list optimistically
      setRequests((prev) => prev.filter((r) => r._id !== id));
    } catch (error) {
      console.error('Error accepting request:', error);
      alert('Failed to accept request. Have you completed your profile?');
    }
  };

  const handleReject = async (id) => {
    try {
      await apiFetch(`/api/supplier/requests/${id}/reject`, { method: 'PATCH' });
      // Remove from pending list optimistically
      setRequests((prev) => prev.filter((r) => r._id !== id));
    } catch (error) {
      console.error('Error rejecting request:', error);
    }
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 8, minHeight: '100vh', backgroundColor: '#000' }}><CircularProgress color="success" /></Box>;
  }

  const featuredRequest = requests.length > 0 ? requests[0] : null;
  const smallRequests = requests.length > 1 ? requests.slice(1) : [];

  return (
    <Box sx={{ pt: 3, pb: 6, px: 5, minHeight: '100vh', backgroundColor: '#000' }}>
      {/* Page header + queue stats */}
      <BuyerRequestsHeader />

      {requests.length === 0 ? (
        <Box sx={{ textAlign: 'center', py: 10 }}>
          <Typography sx={{ color: '#ccc', fontSize: '1.2rem', fontFamily: "'Manrope', sans-serif" }}>
            There are currently no new requests in the marketplace.
          </Typography>
        </Box>
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: 'repeat(12, 1fr)',
            gap: 3,
          }}
        >
          {featuredRequest && (
            <FeaturedRequestCard 
              request={featuredRequest} 
              onAccept={() => handleAccept(featuredRequest._id)} 
              onReject={() => handleReject(featuredRequest._id)} 
            />
          )}
          <MarketTrendsPanel />
          {smallRequests.length > 0 && (
            <SmallRequestsGrid 
              requests={smallRequests} 
              onAccept={handleAccept} 
              onReject={handleReject} 
            />
          )}
          <ArchivedRequestsList />
        </Box>
      )}

      {/* Floating action button */}
      <BuyerRequestsFAB />
    </Box>
  );
};

export default SupplierBuyerRequests;
