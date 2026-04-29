import { Box, Typography, Button, CircularProgress } from '@mui/material';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import PaymentsIcon from '@mui/icons-material/Payments';
import VerifiedIcon from '@mui/icons-material/Verified';
import { useState, useEffect } from 'react';
import { apiFetch } from '../../utils/api';
import { useAuth } from '../../context/AuthContext';

const C = { primary: '#22C55E', outline: '#333333', muted: '#CCCCCC' };

// --- Metric Card ---
const MetricCard = ({ icon, badge, label, value, subtext }) => (
  <Box
    sx={{
      backgroundColor: '#000', p: 3, borderRadius: '10px',
      border: `1px solid ${C.outline}`,
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
      <Box sx={{ color: '#fff' }}>{icon}</Box>
      {badge && (
        <Typography
          sx={{
            fontSize: '0.625rem', fontWeight: 700, color: C.primary,
            px: 1, py: 0.25, border: `1px solid rgba(34,197,94,0.3)`, borderRadius: '9999px',
          }}
        >
          {badge}
        </Typography>
      )}
    </Box>
    <Typography
      sx={{
        fontFamily: "'Manrope', sans-serif", fontWeight: 700,
        fontSize: '0.625rem', textTransform: 'uppercase',
        letterSpacing: '0.1em', color: C.muted,
      }}
    >
      {label}
    </Typography>
    <Typography sx={{ fontFamily: "'Inter', sans-serif", fontSize: '1.875rem', fontWeight: 700, color: '#fff', mt: 0.5 }}>
      {value}
    </Typography>
    <Typography sx={{ fontSize: '0.625rem', fontWeight: 700, color: C.muted, mt: 2, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
      {subtext}
    </Typography>
  </Box>
);

// --- Incoming Request Item ---
const RequestItem = ({ company, time, description, urgent, showActions }) => (
  <Box
    sx={{
      p: 2, backgroundColor: '#000', borderRadius: '8px',
      border: `1px solid ${C.outline}`,
      ...(showActions && { borderLeft: `2px solid ${C.primary}` }),
    }}
  >
    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
      <Typography sx={{ fontWeight: 700, fontSize: '0.875rem', color: '#fff' }}>{company}</Typography>
      <Typography sx={{ fontSize: '0.625rem', fontWeight: 700, color: C.muted }}>{time}</Typography>
    </Box>
    <Typography sx={{ fontSize: '0.75rem', color: C.muted, mb: showActions ? 1.5 : 0.75 }}>
      {description}
    </Typography>
    {showActions && (
      <Box sx={{ display: 'flex', gap: 1 }}>
        <Button
          size="small"
          sx={{
            fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: '#000', backgroundColor: '#fff',
            borderRadius: '4px', px: 1.5, py: 0.5, minWidth: 0, lineHeight: 1.5,
            '&:hover': { backgroundColor: '#e5e5e5' },
          }}
        >
          APPROVE
        </Button>
        <Button
          size="small"
          sx={{
            fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase',
            letterSpacing: '0.1em', color: '#fff', border: `1px solid ${C.outline}`,
            borderRadius: '4px', px: 1.5, py: 0.5, minWidth: 0, lineHeight: 1.5,
            '&:hover': { backgroundColor: '#111111' },
          }}
        >
          REVIEW
        </Button>
      </Box>
    )}
    {urgent && (
      <Typography
        sx={{
          fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase',
          letterSpacing: '0.1em', color: '#fff',
          borderBottom: '1px solid rgba(255,255,255,0.2)',
          display: 'inline-block', pb: 0.25,
        }}
      >
        URGENT PRIORITY
      </Typography>
    )}
  </Box>
);

// --- Hero Summary (metrics + incoming requests) ---
const HeroSummary = () => {
  const { user } = useAuth();
  const [metrics, setMetrics] = useState(null);
  const [requests, setRequests] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [metricsData, requestsData] = await Promise.all([
          apiFetch('/api/supplier/dashboard/metrics'),
          apiFetch('/api/supplier/requests')
        ]);
        setMetrics(metricsData);
        setRequests(requestsData.slice(0, 2)); // Only keep the top 2 for the overview
      } catch (error) {
        console.error('Failed to fetch dashboard data:', error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <Box sx={{ display: 'flex', justifyContent: 'center', p: 8 }}><CircularProgress color="success" /></Box>;
  }

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(12, 1fr)', gap: 3, mb: 6 }}>
      {/* Left: Heading + Metric Cards */}
      <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 8' } }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.5, mb: 4 }}>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 700,
              fontSize: '0.75rem', textTransform: 'uppercase',
              letterSpacing: '0.1em', color: C.muted,
            }}
          >
            PERFORMANCE OVERVIEW
          </Typography>
          <Typography
            sx={{
              fontFamily: "'Manrope', sans-serif", fontWeight: 700,
              fontSize: '2.25rem', letterSpacing: '-0.025em', color: '#fff',
            }}
          >
            Welcome back, {user?.name || 'Supplier'}.
          </Typography>
        </Box>

        {/* 3-column metric bento */}
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', md: 'repeat(3, 1fr)' }, gap: 3 }}>
          <MetricCard
            icon={<Inventory2Icon />}
            badge={metrics?.totalReceived > 0 ? "LIVE" : null}
            label="MARKETPLACE OPPORTUNITIES"
            value={metrics?.totalReceived || 0}
            subtext="TOTAL ACTIVE REQUESTS"
          />
          <MetricCard
            icon={<PaymentsIcon />}
            label="TOTAL EARNINGS"
            value={`$${metrics?.totalEarnings?.toLocaleString() || 0}`}
            subtext="LIFETIME COMPLETED DEALS"
          />
          <MetricCard
            icon={<VerifiedIcon />}
            label="ACTIVE DEALS"
            value={metrics?.acceptedRequests || 0}
            subtext="REQUESTS CURRENTLY IN PROGRESS"
          />
        </Box>
      </Box>

      {/* Right: Incoming Requests */}
      <Box sx={{ gridColumn: { xs: 'span 12', lg: 'span 4' } }}>
        <Box
          sx={{
            backgroundColor: '#000', height: '100%', borderRadius: '10px',
            p: 3, border: `1px solid ${C.outline}`, display: 'flex', flexDirection: 'column',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', mb: 3 }}>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 700,
                fontSize: '1.125rem', color: '#fff', textTransform: 'uppercase',
              }}
            >
              INCOMING REQUESTS
            </Typography>
            <Typography
              sx={{
                backgroundColor: C.primary, color: '#000',
                fontSize: '0.625rem', fontWeight: 700,
                px: 1, py: 0.25, borderRadius: '4px',
              }}
            >
              NEW
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, flex: 1 }}>
            {requests.length > 0 ? requests.map((req, idx) => (
              <RequestItem
                key={req._id}
                company={req.buyerId?.name || 'Buyer'}
                time={new Date(req.createdAt).toLocaleDateString()}
                description={`${req.quantity} units of ${req.productName}`}
                showActions={idx === 0}
                urgent={req.budget > 100000}
              />
            )) : (
              <Typography sx={{ color: C.muted, fontSize: '0.875rem' }}>No new incoming requests right now.</Typography>
            )}
          </Box>

          <Button
            fullWidth
            href="/supplier-dashboard/orders"
            sx={{
              mt: 3, py: 1, border: `1px solid ${C.outline}`, borderRadius: '8px',
              fontSize: '0.625rem', fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: '0.1em', color: C.muted,
              '&:hover': { color: '#fff', borderColor: '#fff' },
            }}
          >
            VIEW ALL REQUESTS
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default HeroSummary;
