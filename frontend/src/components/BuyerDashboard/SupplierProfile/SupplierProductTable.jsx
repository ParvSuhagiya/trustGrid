import { Box, Typography, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MemoryIcon from '@mui/icons-material/Memory';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

/** Stock status pill */
const StockBadge = ({ status }) => {
  const inStock = status === 'In Stock';
  return (
    <Box
      component="span"
      sx={{
        px: 1.5, py: 0.5, borderRadius: '9999px',
        border: `1px solid ${inStock ? C.accent + '4D' : '#f44336' + '4D'}`,
        color: inStock ? C.accent : '#f44336',
        fontSize: '0.625rem', fontWeight: 700,
        textTransform: 'uppercase', letterSpacing: '0.1em',
      }}
    >
      {status}
    </Box>
  );
};

/**
 * SupplierProductTable
 * Renders the "Available Supplies" inventory table.
 * Accepts `products` array from the parent supplier data and an `onOrderClick` handler.
 */
const SupplierProductTable = ({ products, onOrderClick }) => (
  <Box component="section" sx={{ mb: 16 }}>
    {/* Header row */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 4 }}>
      <Box>
        <Typography
          sx={{
            fontFamily: "'Manrope', sans-serif", fontWeight: 800,
            fontSize: '1.5rem', color: '#fff', textTransform: 'uppercase',
          }}
        >
          Available Supplies
        </Typography>
        <Typography sx={{ color: C.muted, fontSize: '0.875rem', mt: 0.5, fontWeight: 700 }}>
          Real-time inventory from regional warehouses
        </Typography>
      </Box>
      <Button
        endIcon={<ArrowForwardIcon sx={{ fontSize: '0.875rem !important', transition: 'transform 0.2s' }} />}
        sx={{
          color: C.accent, fontWeight: 700, fontSize: '0.75rem',
          textTransform: 'uppercase', letterSpacing: '0.1em',
          p: 0, minWidth: 0,
          '&:hover .MuiButton-endIcon': { transform: 'translateX(4px)' },
        }}
      >
        View Catalog
      </Button>
    </Box>

    {/* Table */}
    <Box sx={{ overflow: 'hidden', borderRadius: '10px', border: `1px solid ${C.outline}` }}>
      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
        {/* Head */}
        <Box component="thead">
          <Box
            component="tr"
            sx={{
              borderBottom: `1px solid ${C.outline}`,
              backgroundColor: 'rgba(255,255,255,0.03)',
            }}
          >
            {['Product Details', 'Category', 'Unit Price', 'Available Stock', 'Status', ''].map((h) => (
              <Box
                key={h}
                component="th"
                sx={{
                  px: 4, py: 2.5,
                  fontSize: '0.625rem', fontWeight: 700,
                  textTransform: 'uppercase', letterSpacing: '0.1em',
                  color: C.muted, textAlign: 'left',
                }}
              >
                {h}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Body */}
        <Box component="tbody">
          {products.map((product) => {
            const stockStatus = product.quantity > 0 ? 'In Stock' : 'Out of Stock';
            return (
              <Box
                component="tr"
                key={product._id}
                sx={{
                  borderBottom: `1px solid ${C.outline}`,
                  '&:last-child': { borderBottom: 'none' },
                  '&:hover': { backgroundColor: 'rgba(255,255,255,0.03)' },
                  '& .cart-btn': { opacity: 0, transition: 'opacity 0.2s' },
                  '&:hover .cart-btn': { opacity: 1 },
                  transition: 'background-color 0.2s',
                  cursor: 'default',
                }}
              >
                {/* Product Details */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <Box
                      sx={{
                        width: 48, height: 48, borderRadius: '8px',
                        border: `1px solid ${C.outline}`,
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                        color: '#fff', flexShrink: 0,
                      }}
                    >
                      <MemoryIcon sx={{ fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>
                        {product.productName}
                      </Typography>
                      <Typography sx={{ fontSize: '0.625rem', color: C.muted, fontWeight: 700 }}>
                        {product.description || 'Standard Grade'}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* Category */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <Typography sx={{ fontSize: '0.875rem', color: C.muted, fontFamily: 'monospace', fontWeight: 700 }}>
                    {product.category}
                  </Typography>
                </Box>

                {/* Unit Price */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>
                    ${product.price}
                  </Typography>
                </Box>

                {/* Quantity */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <Typography sx={{ fontSize: '0.875rem', color: C.muted, fontWeight: 700 }}>
                    {product.quantity} units
                  </Typography>
                </Box>

                {/* Stock Status */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <StockBadge status={stockStatus} />
                </Box>

                {/* Cart Action */}
                <Box component="td" sx={{ px: 4, py: 3, textAlign: 'right' }}>
                  <Box
                    component="button"
                    className="cart-btn"
                    onClick={() => onOrderClick && product.quantity > 0 ? onOrderClick(product) : null}
                    disabled={product.quantity === 0}
                    sx={{
                      background: 'none', border: 'none', cursor: product.quantity > 0 ? 'pointer' : 'not-allowed',
                      color: product.quantity > 0 ? C.accent : C.muted, display: 'inline-flex', alignItems: 'center',
                      '&:hover': { color: product.quantity > 0 ? '#1ea64f' : C.muted },
                      transition: 'color 0.2s',
                    }}
                  >
                    <ShoppingCartOutlinedIcon sx={{ fontSize: '1.25rem' }} />
                  </Box>
                </Box>
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default SupplierProductTable;
