import { Box, Typography } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const C = { muted: '#CCCCCC', outline: '#333333' };

const PageBtn = ({ children, active, disabled }) => (
  <Box
    component="button"
    disabled={disabled}
    sx={{
      width: 32, height: 32,
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      borderRadius: '6px',
      border: active ? 'none' : `1px solid ${C.outline}`,
      backgroundColor: active ? '#fff' : 'transparent',
      color: active ? '#000' : '#fff',
      fontWeight: 700, fontSize: '0.75rem',
      cursor: disabled ? 'default' : 'pointer',
      opacity: disabled ? 0.3 : 1,
      transition: 'all 0.15s',
      fontFamily: "'Manrope', sans-serif",
      '&:hover:not(:disabled)': { backgroundColor: active ? '#e5e5e5' : '#fff', color: '#000' },
    }}
  >
    {children}
  </Box>
);

const MarketplacePagination = ({ showing = '1-6', total = 248, totalPages = 42 }) => (
  <Box
    sx={{
      mt: 6,
      display: 'flex', justifyContent: 'space-between', alignItems: 'center',
      borderTop: `1px solid ${C.outline}`, pt: 4,
    }}
  >
    <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
      Showing <Box component="span" sx={{ color: '#fff' }}>{showing}</Box> of {total} Buyers
    </Typography>

    <Box sx={{ display: 'flex', gap: 0.5 }}>
      <PageBtn disabled><ChevronLeftIcon sx={{ fontSize: '1rem' }} /></PageBtn>
      <PageBtn active>1</PageBtn>
      <PageBtn>2</PageBtn>
      <PageBtn>3</PageBtn>
      <Box
        component="span"
        sx={{
          width: 32, height: 32, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontWeight: 700, color: '#fff', fontSize: '0.75rem',
        }}
      >
        ...
      </Box>
      <PageBtn>{totalPages}</PageBtn>
      <PageBtn><ChevronRightIcon sx={{ fontSize: '1rem' }} /></PageBtn>
    </Box>
  </Box>
);

export default MarketplacePagination;
