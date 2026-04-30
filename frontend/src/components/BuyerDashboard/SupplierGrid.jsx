import { Box, Typography, Button, CircularProgress, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Select, MenuItem, FormControl, InputLabel } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import VerifiedIcon from '@mui/icons-material/Verified';
import StarIcon from '@mui/icons-material/Star';
import AddCircleOutlinedIcon from '@mui/icons-material/AddCircleOutlined';
import RefreshIcon from '@mui/icons-material/Refresh';
import SendIcon from '@mui/icons-material/Send';
import { nameToSlug } from '../../data/supplierData';
import { useState, useEffect } from 'react';
import { apiFetch } from '../../utils/api';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC', primary: '#22C55E' };

/** Individual supplier card */
const SupplierCard = ({ id, img, alt, badge, category, name, rating, description, footer, onRequestClick }) => {
  const navigate = useNavigate();
  const slug = nameToSlug(name);
  const handleClick = () => navigate(`/buyer-dashboard/marketplace/${slug}`);

  return (
  <Box
    onClick={handleClick}
    sx={{
      backgroundColor: '#000', border: `1px solid ${C.outline}`,
      borderRadius: '10px', overflow: 'hidden',
      display: 'flex', flexDirection: 'column',
      cursor: 'pointer',
      transition: 'border-color 0.25s',
      '&:hover': { borderColor: '#666' },
      '&:hover .card-img': { transform: 'scale(1.1)' },
    }}
  >
    {/* Image */}
    <Box sx={{ position: 'relative', height: 192, borderBottom: `1px solid ${C.outline}`, overflow: 'hidden' }}>
      <Box
        component="img"
        src={img}
        alt={alt}
        className="card-img"
        sx={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease', display: 'block' }}
      />
      {badge?.type === 'verified' && (
        <Box
          sx={{
            position: 'absolute', top: 12, right: 12,
            backgroundColor: 'rgba(0,0,0,0.8)', backdropFilter: 'blur(8px)',
            p: 1, borderRadius: '8px', color: C.accent,
          }}
        >
          <VerifiedIcon sx={{ fontSize: '1.25rem', display: 'block' }} />
        </Box>
      )}
      {badge?.type === 'toprated' && (
        <Box
          sx={{
            position: 'absolute', top: 12, right: 12,
            backgroundColor: '#fff', color: '#000',
            px: 1, py: 0.5, borderRadius: '4px',
            fontSize: '0.625rem', fontWeight: 700,
          }}
        >
          TOP RATED
        </Box>
      )}
    </Box>

    {/* Body */}
    <Box sx={{ p: 4, flex: 1, display: 'flex', flexDirection: 'column' }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Box>
          <Typography
            sx={{
              fontFamily: "'Manrope',sans-serif", fontWeight: 700,
              fontSize: '0.625rem', textTransform: 'uppercase',
              letterSpacing: '0.1em', color: '#fff', mb: 0.5,
            }}
          >
            {category}
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Manrope',sans-serif", fontWeight: 700,
              fontSize: '1.25rem', color: '#fff',
            }}
          >
            {name}
          </Typography>
        </Box>
        {/* Rating pill */}
        <Box
          sx={{
            display: 'flex', alignItems: 'center', gap: 0.5,
            border: `1px solid ${C.outline}`, px: 1, py: 0.5, borderRadius: '6px',
          }}
        >
          <StarIcon sx={{ fontSize: '0.875rem', color: '#fff' }} />
          <Typography sx={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>{rating}</Typography>
        </Box>
      </Box>

      <Typography sx={{ color: C.muted, fontSize: '0.875rem', mb: 3, lineHeight: 1.6, fontWeight: 500 }}>
        {description}
      </Typography>

      <Box sx={{ mt: 'auto', display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Button
          startIcon={<SendIcon />}
          onClick={(e) => { e.stopPropagation(); onRequestClick({ id, name }); }}
          sx={{
            width: '100%', py: 1, backgroundColor: '#fff', color: '#000', 
            fontWeight: 700, fontSize: '0.75rem', borderRadius: '6px',
            '&:hover': { backgroundColor: '#ccc' }
          }}
        >
          Request Material
        </Button>

        {/* Footer */}
        <Box
          sx={{
            display: 'flex', alignItems: 'center',
            justifyContent: 'space-between', borderTop: `1px solid ${C.outline}`, pt: 2,
          }}
        >
          {footer?.type === 'available' && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Box sx={{ width: 8, height: 8, borderRadius: '50%', backgroundColor: C.accent }} />
              <Typography sx={{ fontSize: '0.625rem', color: C.muted, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                Available Now
              </Typography>
            </Box>
          )}

          {/* View Profile button */}
          <Button
            endIcon={<ArrowForwardIcon sx={{ fontSize: '0.875rem !important', transition: 'transform 0.2s' }} />}
            onClick={(e) => { e.stopPropagation(); handleClick(); }}
            sx={{
              color: '#fff', fontWeight: 700, fontSize: '0.875rem',
              textTransform: 'none', p: 0, minWidth: 0,
              '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
            }}
          >
            View Profile
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
  );
};

/** Ghost "Can't find a supplier?" card */
const GhostCard = () => (
  <Box
    sx={{
      backgroundColor: '#000', border: `1px dashed ${C.outline}`,
      borderRadius: '10px', display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center',
      p: 4, textAlign: 'center', opacity: 0.8,
      transition: 'opacity 0.2s', '&:hover': { opacity: 1 },
    }}
  >
    <Box
      sx={{
        width: 64, height: 64, borderRadius: '50%',
        border: `1px solid ${C.outline}`,
        display: 'flex', alignItems: 'center', justifyContent: 'center', mb: 3,
      }}
    >
      <AddCircleOutlinedIcon sx={{ fontSize: '2rem', color: '#fff' }} />
    </Box>
    <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: '#fff', mb: 1 }}>
      Can't find a supplier?
    </Typography>
    <Typography sx={{ color: C.muted, fontSize: '0.875rem', maxWidth: 200, mb: 4, fontWeight: 700 }}>
      Let our procurement team source specific partners for your unique needs.
    </Typography>
    <Button
      sx={{
        px: 3, py: 1, border: `1px solid ${C.outline}`, borderRadius: '6px',
        color: '#fff', fontWeight: 700, textTransform: 'none', fontSize: '0.875rem',
        '&:hover': { borderColor: '#fff' },
      }}
    >
      Post Custom RFP
    </Button>
  </Box>
);

/** Supplier grid + load more */
const SupplierGrid = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Dialog State
  const [dialogOpen, setDialogOpen] = useState(false);
  const [selectedSupplier, setSelectedSupplier] = useState(null);
  const [submitting, setSubmitting] = useState(false);
  const [supplierInventory, setSupplierInventory] = useState([]);
  const [fetchingInventory, setFetchingInventory] = useState(false);
  
  const [formData, setFormData] = useState({
    supplyId: '', quantity: '', description: ''
  });

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const data = await apiFetch('/api/suppliers');
        setSuppliers(data);
      } catch (error) {
        console.error('Failed to fetch suppliers', error);
      } finally {
        setLoading(false);
      }
    };
    fetchSuppliers();
  }, []);

  const openRequestDialog = async (supplier) => {
    setSelectedSupplier(supplier);
    setDialogOpen(true);
    setFetchingInventory(true);
    try {
      const data = await apiFetch(`/api/suppliers/${supplier.id}/inventory`);
      setSupplierInventory(data);
    } catch (error) {
      console.error('Failed to fetch inventory:', error);
    } finally {
      setFetchingInventory(false);
    }
  };

  const closeDialog = () => {
    setDialogOpen(false);
    setSelectedSupplier(null);
    setSupplierInventory([]);
    setFormData({ supplyId: '', quantity: '', description: '' });
  };

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const selectedItem = supplierInventory.find(item => item._id === formData.supplyId);
  const maxQty = selectedItem ? selectedItem.quantity : 0;
  const calculatedBudget = selectedItem && formData.quantity ? (selectedItem.price * Number(formData.quantity)).toFixed(2) : '0.00';

  const handleSubmit = async () => {
    if (Number(formData.quantity) > maxQty) {
      alert(`Cannot request more than available stock (${maxQty})`);
      return;
    }
    try {
      setSubmitting(true);
      await apiFetch('/api/requests', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          supplierId: selectedSupplier.id,
          productName: selectedItem.productName,
          quantity: Number(formData.quantity),
          budget: Number(calculatedBudget)
        }),
      });
      alert(`Request sent to ${selectedSupplier.name} successfully!`);
      closeDialog();
    } catch (error) {
      console.error('Failed to create request', error);
      alert('Failed to create request');
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}><CircularProgress color="success" /></Box>;
  }

  return (
    <>
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', md: 'repeat(2, 1fr)', xl: 'repeat(3, 1fr)' },
          gap: 4,
        }}
      >
        {suppliers.map((supplier) => (
          <SupplierCard 
            key={supplier._id} 
            id={supplier._id}
            name={supplier.name}
            category={supplier.category}
            rating={supplier.rating?.toFixed(1) || '0.0'}
            description={supplier.description}
            img={'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&q=80'} 
            badge={supplier.rating > 4.5 ? { type: 'toprated' } : null}
            footer={{ type: 'available' }}
            onRequestClick={openRequestDialog}
          />
        ))}
        <GhostCard />
      </Box>

      {/* Load more */}
      <Box sx={{ mt: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3 }}>
        <Button
          endIcon={<RefreshIcon sx={{ fontSize: '0.875rem !important', transition: 'transform 0.3s' }} />}
          sx={{
            px: 6, py: 2, border: `1px solid ${C.outline}`, borderRadius: '8px',
            color: '#fff', fontWeight: 700, fontSize: '0.875rem', textTransform: 'none',
            '&:hover': {
              backgroundColor: '#fff', color: '#000',
              '& .MuiButton-endIcon': { transform: 'rotate(90deg)' },
            },
            transition: 'all 0.2s',
          }}
        >
          Load More Suppliers
        </Button>
        <Typography sx={{ color: C.muted, fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
          Showing {suppliers.length} of 2,840 partners
        </Typography>
      </Box>

      {/* Request Dialog */}
      <Dialog open={dialogOpen} onClose={closeDialog} PaperProps={{ sx: { backgroundColor: '#111', color: '#fff', minWidth: '400px' } }}>
        <DialogTitle sx={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>
          Request Material from {selectedSupplier?.name}
        </DialogTitle>
        <DialogContent>
          {fetchingInventory ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', p: 4 }}><CircularProgress color="success" /></Box>
          ) : supplierInventory.length === 0 ? (
            <Typography sx={{ color: C.muted, p: 2 }}>This supplier currently has no inventory available.</Typography>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 1 }}>
              <FormControl fullWidth variant="outlined">
                <InputLabel sx={{ color: C.muted }}>Select Material</InputLabel>
                <Select
                  name="supplyId"
                  value={formData.supplyId}
                  onChange={handleChange}
                  label="Select Material"
                  sx={{
                    color: '#fff',
                    '& .MuiOutlinedInput-notchedOutline': { borderColor: C.outline },
                    '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: C.primary },
                    '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: C.primary },
                    '& .MuiSvgIcon-root': { color: C.muted },
                  }}
                  MenuProps={{ PaperProps: { sx: { backgroundColor: '#111', border: `1px solid ${C.outline}`, color: '#fff' } } }}
                >
                  {supplierInventory.map((item) => (
                    <MenuItem key={item._id} value={item._id} disabled={item.quantity === 0}>
                      {item.productName} ({item.quantity > 0 ? `${item.quantity} available @ $${item.price}` : 'Out of Stock'})
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>

              {selectedItem && (
                <TextField
                  name="quantity"
                  label={`Quantity (Max: ${maxQty})`}
                  type="number"
                  variant="outlined"
                  fullWidth
                  required
                  value={formData.quantity}
                  onChange={(e) => {
                    const val = Number(e.target.value);
                    if (val >= 0 && val <= maxQty) {
                      handleChange(e);
                    } else if (val > maxQty) {
                      handleChange({ target: { name: 'quantity', value: maxQty } });
                    }
                  }}
                  InputLabelProps={{ style: { color: C.muted } }}
                  InputProps={{ style: { color: '#fff' } }}
                  sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: C.outline }, '&:hover fieldset': { borderColor: C.primary } } }}
                />
              )}

              {selectedItem && (
                <Typography sx={{ color: C.primary, fontWeight: 700, fontSize: '1.1rem' }}>
                  Total Budget: ${calculatedBudget}
                </Typography>
              )}

              <TextField
                name="description"
                label="Message / Requirements (Optional)"
                variant="outlined"
                fullWidth
                multiline
                rows={3}
                value={formData.description}
                onChange={handleChange}
                InputLabelProps={{ style: { color: C.muted } }}
                InputProps={{ style: { color: '#fff' } }}
                sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: C.outline }, '&:hover fieldset': { borderColor: C.primary } } }}
              />
            </Box>
          )}
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={closeDialog} sx={{ color: C.muted }}>Cancel</Button>
          <Button 
            onClick={handleSubmit} 
            disabled={submitting || !formData.supplyId || !formData.quantity || supplierInventory.length === 0}
            sx={{ backgroundColor: C.primary, color: '#000', '&:hover': { backgroundColor: '#1ea64f' }, fontWeight: 700 }}
          >
            {submitting ? <CircularProgress size={24} color="inherit" /> : 'Send Request'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export { SupplierGrid };
