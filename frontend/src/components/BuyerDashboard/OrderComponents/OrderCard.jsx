import { Box, Typography, Button } from '@mui/material';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import C from './colors';
import StatusBadge from './StatusBadge';
import MetaItem from './MetaItem';

/**
 * OrderCard
 * Displays a single buyer order / request card.
 *
 * Props:
 *   icon           – MUI icon element shown in the top-left square
 *   status         – 'Pending' | 'Accepted' | 'Rejected'
 *   title          – order product name
 *   quantity       – quantity string  e.g. "500 Metric Tons"
 *   date           – display date string e.g. "Oct 24, 2023"
 *   locationIcon   – MUI icon element for the location / flag row
 *   locationLabel  – string label next to the location icon
 *   primaryAction  – label for the main CTA button
 *   secondaryIcon  – MUI icon element for the secondary icon button
 */
const OrderCard = ({
  icon,
  status,
  title,
  quantity,
  date,
  locationIcon,
  locationLabel,
  primaryAction,
  secondaryIcon,
}) => (
  <Box
    sx={{
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      borderRadius: '8px',
      p: 3,
      display: 'flex',
      flexDirection: 'column',
      gap: 3,
      height: '100%',
      transition: 'border-color 0.2s',
      '&:hover': { borderColor: '#555' },
    }}
  >
    {/* ── Top: icon + status badge ── */}
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
      <Box
        sx={{
          width: 48, height: 48, borderRadius: '8px',
          backgroundColor: '#000', border: `1px solid ${C.outline}`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          color: '#fff',
        }}
      >
        {icon}
      </Box>
      <StatusBadge status={status} />
    </Box>

    {/* ── Body: title, quantity, meta ── */}
    <Box>
      <Typography sx={{ fontSize: '1.125rem', fontWeight: 700, color: '#fff', mb: 0.5 }}>
        {title}
      </Typography>
      <Typography sx={{ fontSize: '0.875rem', color: C.muted, fontWeight: 500, mb: 2 }}>
        Quantity: {quantity}
      </Typography>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
        <MetaItem icon={<CalendarTodayIcon sx={{ fontSize: '0.875rem' }} />} label={date} />
        <MetaItem icon={locationIcon} label={locationLabel} />
      </Box>
    </Box>

    {/* ── Actions ── */}
    <Box sx={{ pt: 3, borderTop: `1px solid ${C.outline}`, display: 'flex', gap: 1.5, mt: 'auto' }}>
      <Button
        variant="contained"
        sx={{
          flex: 1, py: 1, fontSize: '0.7rem', fontWeight: 700,
          textTransform: 'uppercase', letterSpacing: '0.1em',
          backgroundColor: '#fff', color: '#000', borderRadius: '8px',
          '&:hover': { backgroundColor: C.muted },
        }}
      >
        {primaryAction}
      </Button>
      <Button
        variant="outlined"
        sx={{
          minWidth: 'auto', px: 1.5, py: 1,
          border: `1px solid ${C.outline}`, color: '#fff', borderRadius: '8px',
          '&:hover': { backgroundColor: '#fff', color: '#000', borderColor: '#fff' },
        }}
      >
        {secondaryIcon}
      </Button>
    </Box>
  </Box>
);

export default OrderCard;
