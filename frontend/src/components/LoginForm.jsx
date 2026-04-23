import { useState } from 'react';
import {
  Box,
  Typography,
  TextField,
  Button,
  Divider,
  Link,
  InputAdornment,
  IconButton,
  Stack,
  Grid,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import TerminalIcon from '@mui/icons-material/Terminal';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // TODO: wire up authentication logic
    console.log('Login submitted:', formData);
  };

  return (
    <Box
      component="div"
      sx={{
        width: '100%',
        maxWidth: 440,
        backgroundColor: 'background.paper',
        border: '1px solid #444444',
        borderRadius: 2,
        p: { xs: 4, sm: 5 },
        display: 'flex',
        flexDirection: 'column',
        gap: 4,
      }}
    >
      {/* ── Identity Header ── */}
      <Box sx={{ textAlign: { xs: 'center', md: 'left' } }}>
        <Typography
          variant="h4"
          sx={{
            fontFamily: "'Manrope', sans-serif",
            fontWeight: 800,
            letterSpacing: '-0.02em',
            color: 'text.primary',
            mb: 1,
          }}
        >
          Welcome Back
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Enter your credentials to access the marketplace.
        </Typography>
      </Box>

      {/* ── Login Form ── */}
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        <Stack spacing={2.5}>
          {/* Email */}
          <TextField
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="name@company.com"
            value={formData.email}
            onChange={handleChange}
            InputLabelProps={{
              sx: {
                fontSize: '0.65rem',
                fontWeight: 700,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
              },
            }}
          />

          {/* Password */}
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 1 }}>
              <Typography
                component="label"
                htmlFor="password"
                sx={{
                  fontSize: '0.65rem',
                  fontWeight: 700,
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'text.secondary',
                }}
              >
                Password
              </Typography>
              <Link
                href="#"
                underline="none"
                sx={{
                  fontSize: '0.625rem',
                  letterSpacing: '0.15em',
                  textTransform: 'uppercase',
                  color: 'primary.main',
                  '&:hover': { opacity: 0.8 },
                }}
              >
                Forgot?
              </Link>
            </Box>
            <TextField
              id="password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={() => setShowPassword((v) => !v)}
                      edge="end"
                      size="small"
                    >
                      {showPassword ? <VisibilityOffIcon fontSize="small" /> : <VisibilityIcon fontSize="small" />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>
        </Stack>

        {/* ── Actions ── */}
        <Stack spacing={3} sx={{ pt: 1 }}>
          {/* Primary CTA */}
          <Button
            type="submit"
            variant="contained"
            size="large"
            fullWidth
            sx={{
              py: 1.75,
              fontSize: '0.7rem',
              letterSpacing: '0.15em',
            }}
          >
            Login
          </Button>

          {/* Divider */}
          <Divider
            sx={{
              '&::before, &::after': { borderColor: 'rgba(255,255,255,0.05)' },
            }}
          >
          </Divider>
        </Stack>
      </Box>

      {/* ── Sign-up Link ── */}
      <Box sx={{ textAlign: 'center', pt: 1 }}>
        <Typography variant="body2" color="text.secondary">
          Don&apos;t have an account?{' '}
          <Link
            href="#"
            underline="hover"
            sx={{
              color: 'primary.main',
              fontWeight: 700,
              textUnderlineOffset: '4px',
            }}
          >
            Sign up
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default LoginForm;
