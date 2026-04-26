import { Box } from '@mui/material';
import C from './colors';

/**
 * MetaItem
 * A small icon + label row used inside OrderCard for date / location info.
 *
 * Props:
 *   icon  – MUI icon element
 *   label – string to display next to the icon
 */
const MetaItem = ({ icon, label }) => (
  <Box
    sx={{
      display: 'flex', alignItems: 'center', gap: 0.5,
      fontSize: '0.75rem', fontWeight: 700, color: C.muted,
    }}
  >
    {icon}
    {label}
  </Box>
);

export default MetaItem;
