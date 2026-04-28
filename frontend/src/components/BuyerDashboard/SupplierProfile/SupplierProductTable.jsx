import { Box, Typography, Button } from '@mui/material';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import MemoryIcon from '@mui/icons-material/Memory';
import RouterIcon from '@mui/icons-material/Router';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

/** Map icon string → MUI Icon component */
const ICON_MAP = {
  settings_input_component: SettingsInputComponentIcon,
  memory: MemoryIcon,
  router: RouterIcon,
};

/** Stock status pill */
const StockBadge = ({ status }) => {
  const inStock = status === 'In Stock';
  return (
    <Box
      component="span"
      sx={{
        px: 1.5, py: 0.5, borderRadius: '9999px',
        border: `1px solid ${inStock ? C.accent + '4D' : C.outline}`,
        color: inStock ? C.accent : C.muted,
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
 * Accepts `products` array from the parent supplier data.
 */
const SupplierProductTable = ({ products }) => (
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
            {['Product Details', 'SKU / ID', 'Lead Time', 'Unit Price', 'Stock', ''].map((h) => (
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
            const IconComponent = ICON_MAP[product.icon] || MemoryIcon;
            return (
              <Box
                component="tr"
                key={product.sku}
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
                      <IconComponent sx={{ fontSize: '1.5rem' }} />
                    </Box>
                    <Box>
                      <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>
                        {product.name}
                      </Typography>
                      <Typography sx={{ fontSize: '0.625rem', color: C.muted, fontWeight: 700 }}>
                        {product.subtitle}
                      </Typography>
                    </Box>
                  </Box>
                </Box>

                {/* SKU */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <Typography sx={{ fontSize: '0.875rem', color: C.muted, fontFamily: 'monospace', fontWeight: 700 }}>
                    {product.sku}
                  </Typography>
                </Box>

                {/* Lead Time */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <Typography sx={{ fontSize: '0.875rem', color: C.muted, fontWeight: 700 }}>
                    {product.leadTime}
                  </Typography>
                </Box>

                {/* Unit Price */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff' }}>
                    {product.price}
                  </Typography>
                </Box>

                {/* Stock Status */}
                <Box component="td" sx={{ px: 4, py: 3 }}>
                  <StockBadge status={product.stock} />
                </Box>

                {/* Cart Action */}
                <Box component="td" sx={{ px: 4, py: 3, textAlign: 'right' }}>
                  <Box
                    component="button"
                    className="cart-btn"
                    sx={{
                      background: 'none', border: 'none', cursor: 'pointer',
                      color: C.muted, display: 'inline-flex', alignItems: 'center',
                      '&:hover': { color: C.accent },
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
