import { Box, Typography } from '@mui/material';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

const buyers = [
  {
    initials: 'NS',
    name: 'Nova Solutions',
    location: 'BERLIN, DE',
    volume: '2,400 Units',
    status: 'SHIPPED',
    statusColor: '#fff',
    value: '$12,400.00',
  },
  {
    initials: 'PT',
    name: 'Prime Tech',
    location: 'AUSTIN, US',
    volume: '850 Units',
    status: 'IN TRANSIT',
    statusColor: C.primary,
    value: '$8,250.00',
  },
  {
    initials: 'GX',
    name: 'GlobalX Logistics',
    location: 'TOKYO, JP',
    volume: '12,000 Units',
    status: 'PROCESSING',
    statusColor: C.muted,
    value: '$44,100.00',
  },
];

const RecentBuyers = () => (
  <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 7' } }}>
    {/* Section Header */}
    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
      <Typography
        sx={{
          fontFamily: "'Manrope', sans-serif", fontWeight: 700,
          fontSize: '1.25rem', color: '#fff', textTransform: 'uppercase',
        }}
      >
        RECENT BUYERS
      </Typography>
      <Box
        component="a"
        href="#"
        sx={{
          fontFamily: "'Inter', sans-serif", fontWeight: 700,
          fontSize: '0.625rem', textTransform: 'uppercase',
          letterSpacing: '0.1em', color: '#fff', textDecoration: 'none',
          borderBottom: '1px solid #fff', pb: 0.25,
        }}
      >
        FULL HISTORY
      </Box>
    </Box>

    {/* Table */}
    <Box sx={{ backgroundColor: '#000', borderRadius: '10px', border: `1px solid ${C.outline}`, overflow: 'hidden' }}>
      <Box component="table" sx={{ width: '100%', borderCollapse: 'collapse' }}>
        {/* Head */}
        <Box component="thead">
          <Box component="tr" sx={{ borderBottom: `1px solid ${C.outline}`, backgroundColor: '#111111' }}>
            {['CLIENT ENTITY', 'VOLUME', 'STATUS', 'VALUE'].map((col) => (
              <Box
                key={col}
                component="th"
                sx={{
                  px: 3, py: 2, textAlign: 'left',
                  fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                  fontSize: '0.625rem', textTransform: 'uppercase',
                  letterSpacing: '0.1em', color: C.muted,
                }}
              >
                {col}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Body */}
        <Box component="tbody">
          {buyers.map((buyer, index) => (
            <Box
              key={index}
              component="tr"
              sx={{
                borderBottom: index < buyers.length - 1 ? `1px solid ${C.outline}` : 'none',
                transition: 'background-color 0.2s',
                '&:hover': { backgroundColor: '#111111' },
              }}
            >
              {/* Client Entity */}
              <Box component="td" sx={{ px: 3, py: 2.5 }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                  <Box
                    sx={{
                      width: 32, height: 32, borderRadius: '8px',
                      border: `1px solid ${C.outline}`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      color: '#fff', fontWeight: 700, fontSize: '0.75rem',
                    }}
                  >
                    {buyer.initials}
                  </Box>
                  <Box>
                    <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff' }}>
                      {buyer.name}
                    </Typography>
                    <Typography sx={{ fontSize: '0.625rem', fontWeight: 700, color: C.muted }}>
                      {buyer.location}
                    </Typography>
                  </Box>
                </Box>
              </Box>

              {/* Volume */}
              <Box component="td" sx={{ px: 3, py: 2.5 }}>
                <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff' }}>
                  {buyer.volume}
                </Typography>
              </Box>

              {/* Status */}
              <Box component="td" sx={{ px: 3, py: 2.5 }}>
                <Typography
                  component="span"
                  sx={{
                    px: 1, py: 0.25, borderRadius: '9999px',
                    fontSize: '0.5625rem', fontWeight: 700,
                    textTransform: 'uppercase', letterSpacing: '0.05em',
                    border: `1px solid ${buyer.statusColor}`,
                    color: buyer.statusColor,
                  }}
                >
                  {buyer.status}
                </Typography>
              </Box>

              {/* Value */}
              <Box component="td" sx={{ px: 3, py: 2.5 }}>
                <Typography
                  sx={{
                    fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                    fontSize: '0.875rem', color: '#fff',
                  }}
                >
                  {buyer.value}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  </Box>
);

export default RecentBuyers;
