import { useState } from 'react';
import { Box, Typography } from '@mui/material';

const C = { outline: '#333333', muted: '#CCCCCC' };

const bars = [
  { month: 'MAR', height: 45, active: false },
  { month: 'APR', height: 60, active: false },
  { month: 'MAY', height: 55, active: false },
  { month: 'JUN', height: 85, active: false },
  { month: 'JUL', height: 70, active: false },
  { month: 'AUG', height: 95, active: true },
];

const SpendingChart = () => {
  const [filter, setFilter] = useState('6M');

  return (
    <Box sx={{ backgroundColor: '#000', border: `1px solid ${C.outline}`, borderRadius: '10px', p: 4 }}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 5 }}>
        <Box>
          <Typography sx={{ fontFamily: "'Manrope',sans-serif", fontSize: '1.25rem', fontWeight: 700, color: '#fff' }}>
            Monthly Spending Trend
          </Typography>
          <Typography sx={{ fontSize: '0.75rem', color: C.muted, fontWeight: 700 }}>
            Aggregate procurement volume across all departments
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          {[{ key: '6M', label: '6 MONTHS' }, { key: '1Y', label: '1 YEAR' }].map(({ key, label }) => (
            <Box
              key={key}
              component="button"
              onClick={() => setFilter(key)}
              sx={{
                px: 2, py: 0.75, cursor: 'pointer', borderRadius: '8px',
                fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: '0.625rem',
                border: filter === key ? 'none' : `1px solid ${C.outline}`,
                backgroundColor: filter === key ? '#fff' : 'transparent',
                color: filter === key ? '#000' : C.muted,
                transition: 'all 0.2s',
                '&:hover': { color: filter === key ? '#000' : '#fff' },
              }}
            >
              {label}
            </Box>
          ))}
        </Box>
      </Box>

      {/* Bar chart */}
      <Box sx={{ height: 300, display: 'flex', alignItems: 'flex-end', gap: 2 }}>
        {bars.map(({ month, height, active }) => (
          <Box
            key={month}
            sx={{
              flex: 1, height: '100%', display: 'flex', flexDirection: 'column',
              alignItems: 'center', justifyContent: 'flex-end', gap: 1.5,
              '&:hover .bar': { backgroundColor: '#fff' },
            }}
          >
            <Box
              className="bar"
              sx={{
                width: '100%',
                height: `${height}%`,
                backgroundColor: active ? '#fff' : C.outline,
                borderRadius: '8px 8px 0 0',
                transition: 'background-color 0.2s',
              }}
            />
            <Typography sx={{ fontSize: '0.625rem', fontFamily: "'Manrope',sans-serif", fontWeight: 700, color: active ? '#fff' : C.muted }}>
              {month}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default SpendingChart;
