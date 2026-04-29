import { Box, Typography, Button } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const C = { muted: '#CCCCCC', outline: '#333333' };

const FeaturedBuyerCard = ({
  company = 'Luminary Logistics',
  description = 'High-frequency retail distribution network spanning 14 countries.',
  badge = 'Premium Account',
  contactLabel = 'Procurement Head',
  contactName = 'Sarah Jenkins-Wei',
  email = 'procure@luminary.logistics',
  imgSrc = 'https://lh3.googleusercontent.com/aida-public/AB6AXuC4NRYqwRXMmwPCsRgrJvpcJFZ3Dy0QgM9vqv4BgjG5y-kMhhqG5Qu2TWZ3AJUI8FwHMNwrzB8lN4AnBfhPUGb-7kXBZwm-W1ww7htqv35qxCFJK2EwEh8bnm5IQrOjocpaWFVZKaWFKLC55fZk30uiNcrV1Vx5J8Yll9O5grnXqMN1oczrM-ZU6kn3MXGtdqpVwr8jlkrsdGt76kGsubHY1P-egiu5dDz3dT-Z0-mxNXzwroiPhGUWbcUxdkWaI4niew0aRZuYZyra',
  imgAlt = 'Modern glass skyscraper architecture',
}) => (
  <Box
    sx={{
      gridColumn: { xs: 'span 12', md: 'span 8' },
      '&:hover .buyer-img': { filter: 'grayscale(0)', opacity: 1 },
    }}
  >
    <Box
      sx={{
        backgroundColor: '#000',
        border: `1px solid ${C.outline}`,
        borderRadius: '10px',
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'border-color 0.5s',
        '&:hover': { borderColor: 'rgba(204,204,204,0.4)' },
      }}
    >
      {/* Premium badge */}
      <Box sx={{ position: 'absolute', top: 0, right: 0, p: 3, zIndex: 2 }}>
        <Box
          sx={{
            backgroundColor: '#fff', color: '#000',
            fontSize: '0.625rem', px: 1.5, py: 0.5,
            borderRadius: '9999px', fontWeight: 700,
            textTransform: 'uppercase', letterSpacing: '0.08em',
            fontFamily: "'Manrope', sans-serif",
          }}
        >
          {badge}
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, height: '100%' }}>
        {/* Image panel */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            overflow: 'hidden',
            borderRight: { md: `1px solid ${C.outline}` },
            minHeight: 240,
          }}
        >
          <Box
            component="img"
            src={imgSrc}
            alt={imgAlt}
            className="buyer-img"
            sx={{
              width: '100%', height: '100%', objectFit: 'cover',
              filter: 'grayscale(1)', opacity: 0.6,
              transition: 'all 0.7s',
            }}
          />
        </Box>

        {/* Info panel */}
        <Box
          sx={{
            width: { xs: '100%', md: '50%' },
            p: 4,
            display: 'flex', flexDirection: 'column', justifyContent: 'space-between',
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: "'Manrope', sans-serif", fontWeight: 900,
                fontSize: '1.5rem', letterSpacing: '-0.03em',
                color: '#fff', textTransform: 'uppercase',
              }}
            >
              {company}
            </Typography>
            <Typography sx={{ color: C.muted, fontSize: '0.875rem', mt: 1, fontFamily: "'Inter', sans-serif" }}>
              {description}
            </Typography>

            <Box sx={{ mt: 4, display: 'flex', flexDirection: 'column', gap: 2 }}>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <PersonIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
                <Box>
                  <Typography sx={{ fontSize: '0.625rem', color: C.muted, textTransform: 'uppercase', fontWeight: 700, letterSpacing: '0.05em', fontFamily: "'Inter', sans-serif" }}>
                    {contactLabel}
                  </Typography>
                  <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: '#fff', fontFamily: "'Inter', sans-serif" }}>
                    {contactName}
                  </Typography>
                </Box>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <AlternateEmailIcon sx={{ color: '#fff', fontSize: '1.2rem' }} />
                <Typography sx={{ fontSize: '0.875rem', fontWeight: 700, color: C.muted, fontFamily: "'Inter', sans-serif" }}>
                  {email}
                </Typography>
              </Box>
            </Box>
          </Box>

          <Button
            endIcon={<ArrowForwardIcon />}
            sx={{
              mt: 4, width: '100%', py: 1.5,
              border: `1px solid ${C.outline}`, color: '#fff',
              fontWeight: 700, fontSize: '0.8rem',
              fontFamily: "'Manrope', sans-serif",
              textTransform: 'uppercase',
              borderRadius: '4px',
              '&:hover': { backgroundColor: '#fff', color: '#000' },
            }}
          >
            View Profile
          </Button>
        </Box>
      </Box>
    </Box>
  </Box>
);

export default FeaturedBuyerCard;
