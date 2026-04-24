import { Box, Typography } from '@mui/material';

/**
 * Asymmetric Role Toggle — replicates the 2-col radio card grid from example.html.
 * Uses MUI Box + controlled state instead of CSS `peer` so no Tailwind dependency.
 *
 * Props:
 *   selected  – 'Buyer' | 'Supplier'
 *   onChange  – (role: string) => void
 */
const RoleToggle = ({ selected, onChange }) => {
  const roles = ['Buyer', 'Supplier'];

  return (
    <Box>
      {/* Label — "I am a..." */}
      <Typography
        component="label"
        sx={{
          display: 'block',
          fontSize: '0.625rem',
          fontWeight: 700,
          letterSpacing: '0.15em',
          textTransform: 'uppercase',
          color: '#bdc9ca',
          mb: 1,
        }}
      >
        I am a...
      </Typography>

      {/* 2-column grid of selectable role cards */}
      <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2 }}>
        {roles.map((role) => {
          const isSelected = selected === role;
          return (
            <Box
              key={role}
              role="radio"
              aria-checked={isSelected}
              tabIndex={0}
              onClick={() => onChange(role)}
              onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && onChange(role)}
              sx={{
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                p: 2,
                border: '1px solid #444444',
                borderRadius: '8px',
                cursor: 'pointer',
                // Green 2-px inner outline when checked — mirrors peer-checked:border-custom-accent
                outline: isSelected ? '2px solid #22c55e' : '2px solid transparent',
                outlineOffset: '-1px',
                transition: 'background-color 0.2s, outline 0.2s',
                '&:hover': { backgroundColor: '#2a2a2a' },
                '&:focus-visible': { boxShadow: '0 0 0 2px #22c55e' },
              }}
            >
              <Typography
                sx={{
                  fontFamily: "'Manrope', sans-serif",
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  // text-on-surface-variant  →  custom-accent when checked
                  color: isSelected ? '#22c55e' : '#bdc9ca',
                  transition: 'color 0.2s',
                  userSelect: 'none',
                }}
              >
                {role}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default RoleToggle;
