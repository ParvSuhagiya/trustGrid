import { useState } from 'react';
import { Box, Typography, Button, Dialog, DialogTitle, DialogContent, DialogActions, TextField, CircularProgress } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import { apiFetch } from '../../../utils/api';
import C from './colors';

/**
 * NewRequestCard
 * Dashed-border CTA card that prompts the user to submit a new supply request.
 * Contains a dialog modal with a form to submit to the backend API.
 */
const NewRequestCard = ({ onSuccess }) => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    productName: '',
    quantity: '',
    budget: '',
    description: ''
  });

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setFormData({ productName: '', quantity: '', budget: '', description: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      setLoading(true);
      await apiFetch('/api/requests', {
        method: 'POST',
        body: JSON.stringify({
          ...formData,
          quantity: Number(formData.quantity),
          budget: Number(formData.budget)
        }),
      });
      handleClose();
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error('Failed to create request', error);
      alert('Failed to create request');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Box
        sx={{
          backgroundColor: '#000',
          border: `2px dashed ${C.outline}`,
          borderRadius: '8px',
          p: 3,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          gap: 2,
          minHeight: 250,
          transition: 'border-color 0.3s',
          '&:hover': { borderColor: C.primary },
        }}
      >
        <Box
          sx={{
            width: 64, height: 64, borderRadius: '50%',
            border: `1px solid ${C.outline}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            mb: 1,
          }}
        >
          <AddBoxIcon sx={{ fontSize: '1.875rem', color: C.muted }} />
        </Box>

        <Box>
          <Typography sx={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff' }}>
            NEW SUPPLY REQUEST
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700, mt: 0.5 }}>
            Submit a new requisition for quote
          </Typography>
        </Box>

        <Button
          onClick={handleOpen}
          variant="contained"
          sx={{
            mt: 2, px: 4, py: 1,
            fontSize: '0.75rem', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.1em',
            backgroundColor: '#fff', color: '#000', borderRadius: '8px',
            '&:hover': { backgroundColor: C.muted },
          }}
        >
          INITIATE
        </Button>
      </Box>

      {/* Modal Dialog */}
      <Dialog open={open} onClose={handleClose} PaperProps={{ sx: { backgroundColor: '#111', color: '#fff', minWidth: '400px' } }}>
        <DialogTitle sx={{ fontFamily: "'Manrope', sans-serif", fontWeight: 700 }}>Create Supply Request</DialogTitle>
        <DialogContent>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 1 }}>
            <TextField
              name="productName"
              label="Product Name"
              variant="outlined"
              fullWidth
              required
              value={formData.productName}
              onChange={handleChange}
              InputLabelProps={{ style: { color: C.muted } }}
              InputProps={{ style: { color: '#fff', borderColor: C.outline } }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: C.outline }, '&:hover fieldset': { borderColor: C.primary } } }}
            />
            <TextField
              name="quantity"
              label="Quantity"
              type="number"
              variant="outlined"
              fullWidth
              required
              value={formData.quantity}
              onChange={handleChange}
              InputLabelProps={{ style: { color: C.muted } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: C.outline }, '&:hover fieldset': { borderColor: C.primary } } }}
            />
            <TextField
              name="budget"
              label="Total Budget ($)"
              type="number"
              variant="outlined"
              fullWidth
              required
              value={formData.budget}
              onChange={handleChange}
              InputLabelProps={{ style: { color: C.muted } }}
              InputProps={{ style: { color: '#fff' } }}
              sx={{ '& .MuiOutlinedInput-root': { '& fieldset': { borderColor: C.outline }, '&:hover fieldset': { borderColor: C.primary } } }}
            />
            <TextField
              name="description"
              label="Description (Optional)"
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
        </DialogContent>
        <DialogActions sx={{ p: 3 }}>
          <Button onClick={handleClose} sx={{ color: C.muted }}>Cancel</Button>
          <Button 
            onClick={handleSubmit} 
            disabled={loading || !formData.productName || !formData.quantity || !formData.budget}
            sx={{ backgroundColor: C.primary, color: '#000', '&:hover': { backgroundColor: '#1ea64f' }, fontWeight: 700 }}
          >
            {loading ? <CircularProgress size={24} color="inherit" /> : 'Submit Request'}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default NewRequestCard;
