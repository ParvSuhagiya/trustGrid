import { useState } from 'react';
import { Box, Typography, Button, TextField, Select, MenuItem, FormControl } from '@mui/material';
import AddBoxIcon from '@mui/icons-material/AddBox';
import InventoryIcon from '@mui/icons-material/Inventory';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

/** Shared MUI TextField dark styling */
const inputSx = {
  '& .MuiOutlinedInput-root': {
    backgroundColor: '#000',
    borderRadius: '6px',
    fontFamily: "'Inter', sans-serif",
    fontSize: '0.875rem',
    color: '#fff',
    '& fieldset': { borderColor: C.outline },
    '&:hover fieldset': { borderColor: '#555' },
    '&.Mui-focused fieldset': { borderColor: C.accent, borderWidth: 1 },
  },
  '& .MuiOutlinedInput-input::placeholder': { color: 'rgba(204,204,204,0.35)', opacity: 1 },
};

const labelSx = {
  fontFamily: "'Inter', sans-serif",
  fontSize: '0.625rem',
  fontWeight: 700,
  textTransform: 'uppercase',
  letterSpacing: '0.15em',
  color: C.muted,
  mb: 1,
  display: 'block',
};

/**
 * AddSupplyForm
 * Left-panel card: "Register New Supply" form.
 * Props:
 *   onAdd(item) — called when the user submits; receives the new supply object.
 */
const AddSupplyForm = ({ onAdd }) => {
  const [form, setForm] = useState({
    name: '',
    quantity: '',
    category: 'Raw Materials',
    location: '',
  });

  const handleChange = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }));

  const handleSubmit = () => {
    if (!form.name.trim() || !form.quantity) return;
    if (onAdd) onAdd({ ...form });
    setForm({ name: '', quantity: '', category: 'Raw Materials', location: '' });
  };

  return (
    <Box
      component="section"
      sx={{
        backgroundColor: '#000',
        border: `1px solid ${C.outline}`,
        borderRadius: '8px',
        p: 4,
      }}
    >
      {/* Section title */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 4 }}>
        <AddBoxIcon sx={{ color: C.accent, fontSize: '1.4rem' }} />
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '1.125rem',
            textTransform: 'uppercase',
            color: '#fff',
            letterSpacing: '-0.01em',
          }}
        >
          Register New Supply
        </Typography>
      </Box>

      {/* Form fields */}
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {/* Product Name */}
        <Box>
          <Typography component="label" sx={labelSx}>Product Name</Typography>
          <TextField
            fullWidth
            value={form.name}
            onChange={handleChange('name')}
            placeholder="e.g. Industrial Cobalt Refine"
            variant="outlined"
            size="small"
            sx={inputSx}
          />
        </Box>

        {/* Qty + Category */}
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
          {/* Quantity */}
          <Box>
            <Typography component="label" sx={labelSx}>Quantity</Typography>
            <Box sx={{ position: 'relative' }}>
              <TextField
                fullWidth
                type="number"
                value={form.quantity}
                onChange={handleChange('quantity')}
                placeholder="0.00"
                variant="outlined"
                size="small"
                sx={{
                  ...inputSx,
                  '& .MuiOutlinedInput-input': { pr: 5 },
                }}
              />
              <Typography
                sx={{
                  position: 'absolute',
                  right: 12,
                  top: '50%',
                  transform: 'translateY(-50%)',
                  fontSize: '0.625rem',
                  fontWeight: 700,
                  color: C.muted,
                  pointerEvents: 'none',
                }}
              >
                KG
              </Typography>
            </Box>
          </Box>

          {/* Category */}
          <Box>
            <Typography component="label" sx={labelSx}>Category</Typography>
            <FormControl fullWidth size="small">
              <Select
                value={form.category}
                onChange={handleChange('category')}
                sx={{
                  backgroundColor: '#000',
                  borderRadius: '6px',
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.875rem',
                  color: '#fff',
                  '& .MuiOutlinedInput-notchedOutline': { borderColor: C.outline },
                  '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#555' },
                  '&.Mui-focused .MuiOutlinedInput-notchedOutline': { borderColor: C.accent, borderWidth: 1 },
                  '& .MuiSvgIcon-root': { color: C.muted },
                }}
                MenuProps={{
                  PaperProps: {
                    sx: { backgroundColor: '#111', border: `1px solid ${C.outline}`, color: '#fff' },
                  },
                }}
              >
                <MenuItem value="Raw Materials">Raw Materials</MenuItem>
                <MenuItem value="Finished Goods">Finished Goods</MenuItem>
                <MenuItem value="Chemicals">Chemicals</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>

        {/* Warehouse Location */}
        <Box>
          <Typography component="label" sx={labelSx}>Warehouse Location</Typography>
          <TextField
            fullWidth
            value={form.location}
            onChange={handleChange('location')}
            placeholder="Sector 7G - North"
            variant="outlined"
            size="small"
            sx={inputSx}
          />
        </Box>

        {/* Submit */}
        <Button
          onClick={handleSubmit}
          startIcon={<InventoryIcon />}
          sx={{
            width: '100%',
            backgroundColor: '#fff',
            color: '#000',
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 700,
            fontSize: '0.875rem',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            py: 1.75,
            borderRadius: '6px',
            '&:hover': { backgroundColor: C.muted },
            '&:active': { transform: 'scale(0.97)' },
            transition: 'all 0.15s',
          }}
        >
          Add to Stock
        </Button>
      </Box>
    </Box>
  );
};

export default AddSupplyForm;
