import { Box, Typography } from '@mui/material';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import NotificationImportantIcon from '@mui/icons-material/NotificationImportant';

const C = { accent: '#22C55E', outline: '#333333', muted: '#CCCCCC', error: '#FF0000' };

const CARDS = [
  {
    label: 'Stock Turnover',
    value: '14.2%',
    badge: '↑',
    badgeColor: C.accent,
    icon: <TrendingUpIcon sx={{ fontSize: '1.25rem' }} />,
    iconColor: C.accent,
  },
  {
    label: 'Restock Alerts',
    value: '2 Critical',
    badge: null,
    icon: <NotificationImportantIcon sx={{ fontSize: '1.25rem' }} />,
    iconColor: C.error,
  },
];

/**
 * InventoryAnalyticsCards
 * Two mini-stat cards rendered below the inventory table:
 * Stock Turnover and Restock Alerts.
 */
const InventoryAnalyticsCards = () => (
  <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 3 }}>
    {CARDS.map(({ label, value, badge, badgeColor, icon, iconColor }) => (
      <Box
        key={label}
        sx={{
          p: 3,
          backgroundColor: '#000',
          border: `1px solid ${C.outline}`,
          borderRadius: '8px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          cursor: 'pointer',
          '&:hover': { borderColor: '#fff' },
          transition: 'border-color 0.2s',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: "'Inter', sans-serif",
              fontSize: '0.625rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.15em',
              color: C.muted,
              mb: 0.75,
            }}
          >
            {label}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'baseline', gap: 0.75 }}>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif",
                fontWeight: 700,
                fontSize: '1.25rem',
                color: '#fff',
              }}
            >
              {value}
            </Typography>
            {badge && (
              <Typography
                sx={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: badgeColor,
                }}
              >
                {badge}
              </Typography>
            )}
          </Box>
        </Box>

        <Box
          sx={{
            width: 48,
            height: 48,
            border: `1px solid ${C.outline}`,
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: iconColor,
            flexShrink: 0,
          }}
        >
          {icon}
        </Box>
      </Box>
    ))}
  </Box>
);

export default InventoryAnalyticsCards;
