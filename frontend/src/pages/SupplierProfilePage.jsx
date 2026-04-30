import { useState, useEffect } from 'react';
import { Box, Typography, Button, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, TextField } from '@mui/material';
import { useParams, useNavigate } from 'react-router-dom';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SupplierProfileHero from '../components/BuyerDashboard/SupplierProfile/SupplierProfileHero';
import SupplierStatsRating from '../components/BuyerDashboard/SupplierProfile/SupplierStatsRating';
import SupplierProductTable from '../components/BuyerDashboard/SupplierProfile/SupplierProductTable';
import SupplierReviews from '../components/BuyerDashboard/SupplierProfile/SupplierReviews';
import { apiFetch } from '../utils/api';

/**
 * SupplierProfilePage
 * Child route rendered at /buyer-dashboard/marketplace/:supplierId
 * Uses the :supplierId URL param to look up the correct supplier from the backend.
 */
const SupplierProfilePage = () => {
  const { supplierId } = useParams();
  const navigate = useNavigate();
  
  const [supplier, setSupplier] = useState(null);
  const [inventory, setInventory] = useState([]);
  const [loading, setLoading] = useState(true);

  // Dialog State
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [quantity, setQuantity] = useState('');
  const [description, setDescription] = useState('');
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [supplierData, inventoryData] = await Promise.all([
          apiFetch(`/api/suppliers/${supplierId}`),
          apiFetch(`/api/suppliers/${supplierId}/inventory`),
        ]);
        setSupplier(supplierData);
        setInventory(inventoryData);
      } catch (error) {
        console.error('Failed to fetch supplier details', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [supplierId]);

  const openOrderDialog = (item) => {
    setSelectedItem(item);
    setQuantity('');
    setDescription('');
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedItem(null);
  };

  const handleSubmit = async () => {
    const qty = Number(quantity);
    if (qty > selectedItem.quantity) {
      alert(`Cannot request more than available stock (${selectedItem.quantity})`);
      return;
    }
    
    const budget = qty * selectedItem.price;

    try {
      setSubmitting(true);
      await apiFetch('/api/requests', {
        method: 'POST',
        body: JSON.stringify({
          supplierId: supplier._id,
          supplyId: selectedItem._id,
          productName: selectedItem.productName,
          quantity: qty,
          budget: budget,
          description: description,
        }),
      });
      alert(`Request sent successfully!`);
      closeDialog();
    } catch (error) {
      console.error('Failed to create request', error);
      alert('Failed to create request');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', pt: 10 }}><CircularProgress color="success" /></Box>;
  }

  /* ── 404-style fallback ── */
  if (!supplier) {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '60vh', gap: 3, textAlign: 'center' }}>
        <Typography sx={{ fontFamily: "'Manrope', sans-serif", fontWeight: 800, fontSize: '3rem', color: '#fff', letterSpacing: '-0.04em' }}>
          Supplier Not Found
        </Typography>
        <Typography sx={{ color: '#CCCCCC', fontSize: '1rem', fontWeight: 500 }}>
          The supplier profile does not exist.
        </Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => navigate('/buyer-dashboard/marketplace')} sx={{ color: '#22C55E', fontWeight: 700, textTransform: 'none', fontSize: '0.875rem' }}>
          Back to Marketplace
        </Button>
      </Box>
    );
  }

  // Format supplier for Hero component
  const heroSupplier = {
    ...supplier,
    logoUrl: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80',
    tier: 'Top Supplier',
    supplierId: supplier._id.substring(0, 8),
    tagline: supplier.description || 'Global Manufacturing Partner',
  };

  // Mock stats/reviews since backend doesn't have them yet
  const mockStats = {
    aggregateRating: supplier.rating ? supplier.rating.toFixed(1) : '0.0',
    ratingBasis: 'Based on platform reviews',
    metrics: [
      { label: 'On-Time Delivery', value: '99%', pct: '99%' },
      { label: 'Quality Score',    value: '4.9/5', pct: '98%' },
      { label: 'Response Time',    value: '< 2 hrs', pct: '90%' },
    ],
  };
  const mockInsights = {
    coveragePct: 92,
    reviewFrequency: 'Monthly',
    avgPerMonth: 4,
    reviews: [
      {
        avatar: 'https://i.pravatar.cc/150?img=11',
        name: 'James Harrington',
        role: 'Procurement Officer',
        rating: 5,
        text: 'Exceptional supplier — consistently delivers ahead of schedule with top-tier quality.',
        tags: ['On-Time', 'High Quality', 'Responsive'],
      },
      {
        avatar: 'https://i.pravatar.cc/150?img=22',
        name: 'Leena Patel',
        role: 'Engineering Lead',
        rating: 4,
        text: 'Communication is brief but effective. Materials always match specifications.',
        tags: ['Accurate Specs', 'Reliable'],
      },
    ],
  };

  const maxQty = selectedItem ? selectedItem.quantity : 0;
  const calculatedBudget = selectedItem && quantity ? (selectedItem.price * Number(quantity)).toFixed(2) : '0.00';

  return (
    <Box sx={{ px: { xs: 3, md: 6 }, pt: 4, pb: 8, backgroundColor: '#000', minHeight: '100%', '&::-webkit-scrollbar': { width: 4 }, '&::-webkit-scrollbar-track': { background: '#000' }, '&::-webkit-scrollbar-thumb': { background: '#333', borderRadius: 10 } }}>
      <Button startIcon={<ArrowBackIcon sx={{ fontSize: '1rem !important' }} />} onClick={() => navigate('/buyer-dashboard/marketplace')} sx={{ color: '#CCCCCC', fontWeight: 700, textTransform: 'none', fontSize: '0.875rem', mb: 6, p: 0, minWidth: 0, '&:hover': { color: '#fff' }, transition: 'color 0.2s' }}>
        Back to Marketplace
      </Button>

      <SupplierProfileHero supplier={heroSupplier} supplierSlug={supplier._id} />
      <SupplierStatsRating stats={mockStats} />
      <SupplierProductTable products={inventory} onOrderClick={openOrderDialog} />
      <SupplierReviews insights={mockInsights} />

      {/* Request Dialog */}
      <Dialog open={dialogOpen} onClose={closeDialog} PaperProps={{ sx: { backgroundColor: '#111', color: '#fff', minWidth: '400px' } }}>
        <DialogTitle sx={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
          Order {selectedItem?.productName}
        </DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
            <Typography sx={{ color: '#ccc', fontSize: '0.875rem' }}>
              Available: {maxQty} units @ ${selectedItem?.price}/unit
            </Typography>

            <TextField
              name="quantity"
              label={`Quantity (Max: ${maxQty})`}
              type="number"
              variant="outlined"
              fullWidth
              required
              value={quantity}
              onChange={(e) => {
                const val = Number(e.target.value);
                if (val >= 0 && val <= maxQty) {
                  setQuantity(e.target.value);
                } else if (val > maxQty) {
                  setQuantity(maxQty.toString());
                }
              }}
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#333' }, '&:hover fieldset': { borderColor: '#22C55E' }, '&.Mui-focused fieldset': { borderColor: '#22C55E' } } }}
            />

            <Typography sx={{ color: '#22C55E', fontWeight: 700, fontSize: '1.1rem' }}>
              Total Budget: ${calculatedBudget}
            </Typography>

            <TextField
              name="description"
              label="Message / Requirements (Optional)"
              variant="outlined"
              fullWidth
              multiline
              rows={3}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              InputLabelProps={{ style: { color: '#ccc' } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: '#333' }, '&:hover fieldset': { borderColor: '#22C55E' }, '&.Mui-focused fieldset': { borderColor: '#22C55E' } } }}
            />
          </Box>
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={closeDialog} sx={{ color: '#ccc' }}>Cancel</Button>
          <Button 
            onClick={handleSubmit} 
            disabled={submitting || !quantity || Number(quantity) === 0}
            sx={{ backgroundColor: '#22C55E', color: '#000', '&:hover': { backgroundColor: '#1ea64f' }, fontWeight: 700 }}
          >
            {submitting ? <CircularProgress size={24} color="inherit" /> : 'Place Order'}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default SupplierProfilePage;
