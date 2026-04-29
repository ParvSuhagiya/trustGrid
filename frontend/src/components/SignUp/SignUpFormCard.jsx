import { useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import {
  Box,
  Typography,
  TextField,
  Button,
  Link,
  InputAdornment,
  IconButton,
  Stack,
  Alert,
  CircularProgress
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import RoleToggle from './RoleToggle';
import { useAuth } from '../../context/AuthContext';

/**
 * Main sign-up form card.
 * Mirrors the .bg-surface-container-low form card in example.html.
 */
const SignUpFormCard = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [selectedRole, setSelectedRole] = useState('Buyer');
  const [formData, setFormData] = useState({ fullName: '', email: '', password: '' });
  const [error, setError] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) =>
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);
    
    try {
      const role = selectedRole.toLowerCase();
      const user = await register(formData.fullName, formData.email, formData.password, role);
      if (user.role === 'buyer') {
        navigate('/buyer-dashboard');
      } else {
        navigate('/supplier-dashboard');
      }
    } catch (err) {
      setError(err.message || 'Failed to create account. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  /* ── Shared label styles ── */
  const labelSx = {
    display: 'block',
    fontSize: '0.625rem',   // text-[10px]
    fontWeight: 700,
    letterSpacing: '0.15em', // tracking-widest
    textTransform: 'uppercase',
    color: '#bdc9ca',        // on-surface-variant
    mb: 1,
  };

  /* ── Shared input override (surface-container-highest bg) ── */
  const inputSx = {
    '& .MuiOutlinedInput-root': {
      backgroundColor: '#353534',  // surface-container-highest
    },
  };

  return (
    <Box
      sx={{
        backgroundColor: '#1c1b1b',  // surface-container-low
        border: '1px solid #444444', // custom-border
        borderRadius: '8px',
        p: { xs: 4, md: 5 },
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* ── Decorative blur circle (top-right) ── */}
      <Box
        aria-hidden="true"
        sx={{
          position: 'absolute',
          top: -64,
          right: -64,
          width: 128,
          height: 128,
          backgroundColor: 'rgba(34,197,94,0.05)', // custom-accent/5
          borderRadius: '50%',
          filter: 'blur(40px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Card Header ── */}
      <Box component="header" sx={{ mb: 4 }}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontSize: '1.875rem',    // text-3xl
            fontWeight: 700,
            letterSpacing: '-0.025em',
            color: '#e5e2e1',
            lineHeight: 1.2,
          }}
        >
          Create Account
        </Typography>
        <Typography
          variant="body2"
          sx={{ color: '#bdc9ca', mt: 1, fontSize: '0.875rem' }}
        >
          Join the network of professional architects and suppliers.
        </Typography>
      </Box>

      {/* ── Form ── */}
      <Box component="form" onSubmit={handleSubmit} noValidate>
        {error && (
          <Alert severity="error" sx={{ mb: 3 }}>
            {error}
          </Alert>
        )}
        <Stack spacing={3}>

          {/* Full Name */}
          <Box>
            <Typography component="label" htmlFor="signup-fullName" sx={labelSx}>
              Full Name
            </Typography>
            <TextField
              id="signup-fullName"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              label=""
              InputLabelProps={{ shrink: false }}
              sx={inputSx}
            />
          </Box>

          {/* Business Email */}
          <Box>
            <Typography component="label" htmlFor="signup-email" sx={labelSx}>
              Email
            </Typography>
            <TextField
              id="signup-email"
              name="email"
              type="email"
              placeholder="name@company.com"
              value={formData.email}
              onChange={handleChange}
              label=""
              InputLabelProps={{ shrink: false }}
              sx={inputSx}
            />
          </Box>

          {/* Role Toggle — Buyer / Supplier */}
          <RoleToggle selected={selectedRole} onChange={setSelectedRole} />

          {/* Password */}
          <Box>
            <Typography component="label" htmlFor="signup-password" sx={labelSx}>
              Password
            </Typography>
            <TextField
              id="signup-password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="Create a strong password"
              value={formData.password}
              onChange={handleChange}
              label=""
              InputLabelProps={{ shrink: false }}
              sx={inputSx}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((v) => !v)}
                      edge="end"
                      size="small"
                      sx={{
                        color: '#bdc9ca',
                        '&:hover': { color: '#22c55e', backgroundColor: 'transparent' },
                        transition: 'color 0.2s',
                      }}
                    >
                      {showPassword
                        ? <VisibilityOffIcon fontSize="small" />
                        : <VisibilityIcon fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>

          {/* ── Submit Button ── */}
          <Button
            id="signup-submit"
            type="submit"
            variant="contained"
            fullWidth
            disabled={isSubmitting}
            sx={{
              mt: 1,
              py: 1.875,                           // py-4 ≈ 15px
              backgroundColor: '#ffffff',          // bg-white
              color: '#000000',
              fontFamily: "'Manrope', sans-serif",
              fontWeight: 700,
              fontSize: '0.875rem',
              textTransform: 'none',               // example.html does not uppercase button
              letterSpacing: '0.01em',
              borderRadius: '8px',
              boxShadow: 'none',
              transition: 'all 0.3s',
              '&:hover': { backgroundColor: 'rgba(255,255,255,0.9)', boxShadow: 'none' },
              '&:active': { transform: 'scale(0.98)' },
            }}
          >
            {isSubmitting ? <CircularProgress size={24} /> : 'Signup'}
          </Button>
        </Stack>
      </Box>

      {/* ── Footer Link ── */}
      <Box
        component="footer"
        sx={{
          mt: 4,
          pt: 4,
          borderTop: '1px solid #444444',
          textAlign: 'center',
        }}
      >
        <Typography variant="body2" sx={{ color: '#bdc9ca', fontSize: '0.875rem' }}>
          Already have an account?{' '}
          <Link
            component={RouterLink}
            to="/login"
            underline="always"
            sx={{
              color: '#e5e2e1',
              fontWeight: 600,
              textUnderlineOffset: '4px',
              textDecorationColor: 'rgba(34,197,94,0.3)',  // decoration-custom-accent/30
              transition: 'color 0.2s',
              '&:hover': { color: '#22c55e' },
            }}
          >
            Log In
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default SignUpFormCard;
