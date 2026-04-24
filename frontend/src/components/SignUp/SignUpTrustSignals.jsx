import { Box, Typography } from '@mui/material';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import LanguageIcon from '@mui/icons-material/Language';

/**
 * Trust-signals block — mirrors the .mt-12 opacity-40 div in example.html.
 * Shows "Secure Infrastructure" + "Global Sourcing" with a decorative gradient line.
 */
const SignUpTrustSignals = () => {
  const signals = [
    { icon: <VerifiedUserIcon sx={{ fontSize: '1rem' }} />, label: 'Secure Infrastructure' },
    { icon: <LanguageIcon sx={{ fontSize: '1rem' }} />, label: 'Global Sourcing' },
  ];

  return (
    <Box
      sx={{
        mt: 6,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        opacity: 0.4,           // opacity-40
      }}
    >
      {/* Icon + label pairs */}
      <Box sx={{ display: 'flex', gap: 4, mb: 3 }}>
        {signals.map(({ icon, label }) => (
          <Box
            key={label}
            sx={{ display: 'flex', alignItems: 'center', gap: 1, color: '#e5e2e1' }}
          >
            {icon}
            <Typography
              sx={{
                fontSize: '0.625rem',       // text-[10px]
                textTransform: 'uppercase',
                letterSpacing: '0.15em',    // tracking-widest
                fontFamily: "'Inter', sans-serif",
              }}
            >
              {label}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Decorative gradient line */}
      <Box
        aria-hidden="true"
        sx={{
          width: 96,
          height: '1px',
          background: 'linear-gradient(to right, transparent, #444444, transparent)',
        }}
      />
    </Box>
  );
};

export default SignUpTrustSignals;
