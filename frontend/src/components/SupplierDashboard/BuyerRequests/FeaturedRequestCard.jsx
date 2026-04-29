import { Box, Typography, Button, IconButton } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CancelIcon from '@mui/icons-material/Cancel';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const C = { accent: '#22C55E', muted: '#CCCCCC', outline: '#333333' };

const DetailItem = ({ label, value }) => (
  <Box>
    <Typography
      sx={{
        fontSize: '0.625rem', textTransform: 'uppercase',
        letterSpacing: '0.15em', color: C.muted,
        fontWeight: 700, mb: 0.5,
        fontFamily: "'Manrope', sans-serif",
      }}
    >
      {label}
    </Typography>
    <Typography sx={{ color: '#fff', fontWeight: 700, fontFamily: "'Inter', sans-serif" }}>
      {value}
    </Typography>
  </Box>
);

const FeaturedRequestCard = ({
  company = 'Global Logistics Corp',
  logoSrc = 'https://lh3.googleusercontent.com/aida-public/AB6AXuDnX5TVz6Iv36i9Xh4iC7MDyp_kdgLmCa6q7bEXcDF33Z8YH1mazkTZEUB7IAr-Trzu3vZtwEV99dFvwKWEzXoE2zCIUpiFQ-VM02LRPBCyWnfqZFllh6gZO6ffJ25XEDERZjKUZO1HNhzffo5CzoHwnwzTAbRrLmwtLSnJRjuoLQsomSp3Nk4GAqPXRB8ylFpy9VgYaOhknFoVBoFeXNWJA7ETbZ_Okr0cY7otky1TA7fi_NI-Kyvx1per0dmhGR_NH4DFPabrZkaG',
  priority = 'High Priority',
  expiresIn = '14:22:05',
  service = 'Cross-Border Fulfillment',
  volume = '50,000 Units / Mo',
  duration = '24 Months',
  quote = '"Looking for a reliable partner to handle electronics distribution across the EU and North American markets. Must have existing clearance for lithium battery shipping."',
}) => (
  <Box
    sx={{
      gridColumn: { xs: 'span 12', lg: 'span 8' },
      backgroundColor: '#000',
      border: `1px solid ${C.outline}`,
      borderRadius: '10px',
      overflow: 'hidden',
    }}
  >
    <Box sx={{ p: 4, display: 'flex', flexDirection: 'column', height: '100%' }}>

      {/* ── Top row: logo + company + expiry ── */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 3 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
          {/* Logo */}
          <Box
            sx={{
              width: 56, height: 56, borderRadius: '10px',
              border: `1px solid ${C.outline}`, backgroundColor: '#000',
              display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden',
            }}
          >
            <Box component="img" src={logoSrc} alt={`${company} logo`}
              sx={{ width: 40, height: 40, objectFit: 'contain' }} />
          </Box>
          {/* Company + badge */}
          <Box>
            <Box
              sx={{
                display: 'inline-block', mb: 0.75,
                color: C.accent, fontSize: '0.625rem', fontWeight: 700,
                px: 1, py: 0.5, borderRadius: '4px',
                border: `1px solid ${C.accent}`,
                textTransform: 'uppercase', letterSpacing: '0.1em',
                fontFamily: "'Manrope', sans-serif",
              }}
            >
              {priority}
            </Box>
            <Typography
              sx={{
                fontSize: '1.25rem', fontWeight: 700,
                fontFamily: "'Manrope', sans-serif", color: '#fff',
              }}
            >
              {company}
            </Typography>
          </Box>
        </Box>

        {/* Expiry */}
        <Box sx={{ textAlign: 'right' }}>
          <Typography sx={{ fontSize: '0.75rem', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700 }}>
            Expires In
          </Typography>
          <Typography sx={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', fontFamily: "'Manrope', sans-serif" }}>
            {expiresIn}
          </Typography>
        </Box>
      </Box>

      {/* ── Detail grid ── */}
      <Box
        sx={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 4, py: 4, borderTop: `1px solid ${C.outline}`, borderBottom: `1px solid ${C.outline}`,
        }}
      >
        <DetailItem label="Service Required" value={service} />
        <DetailItem label="Total Volume" value={volume} />
        <DetailItem label="Contract Duration" value={duration} />
      </Box>

      {/* ── Quote ── */}
      <Box sx={{ mt: 4 }}>
        <Typography
          sx={{
            fontSize: '0.875rem', color: C.muted,
            fontStyle: 'italic', lineHeight: 1.7,
            borderLeft: '2px solid #fff', pl: 2,
            fontFamily: "'Inter', sans-serif",
          }}
        >
          {quote}
        </Typography>
      </Box>

      {/* ── Action buttons ── */}
      <Box sx={{ mt: 'auto', pt: 4, display: 'flex', gap: 2 }}>
        <Button
          startIcon={<CheckCircleIcon />}
          sx={{
            flex: 1, py: 1.75,
            backgroundColor: '#fff', color: '#000',
            fontWeight: 700, borderRadius: '8px',
            fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            fontFamily: "'Manrope', sans-serif",
            '&:hover': { backgroundColor: '#CCCCCC' },
          }}
        >
          Accept Request
        </Button>
        <Button
          startIcon={<CancelIcon />}
          variant="outlined"
          sx={{
            flex: 1, py: 1.75,
            borderColor: C.outline, color: '#fff',
            fontWeight: 700, borderRadius: '8px',
            fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em',
            fontFamily: "'Manrope', sans-serif",
            '&:hover': { backgroundColor: '#fff', color: '#000', borderColor: '#fff' },
          }}
        >
          Reject
        </Button>
        <IconButton
          sx={{
            border: `1px solid ${C.outline}`, borderRadius: '8px',
            px: 2, color: C.muted,
            '&:hover': { color: '#fff', borderColor: '#fff' },
          }}
        >
          <MoreHorizIcon />
        </IconButton>
      </Box>
    </Box>
  </Box>
);

export default FeaturedRequestCard;
