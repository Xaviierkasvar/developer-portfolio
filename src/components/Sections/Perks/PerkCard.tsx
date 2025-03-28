import { Box, Typography } from '@mui/material';
import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface PerkCardProps {
  title: string;
  text: string;
  Icon: React.ElementType;
}

const PerkCard: React.FC<PerkCardProps> = ({ title, text, Icon }) => {
  useEffect(() => {
    gsap.to('.perkCard', {
      opacity: 1,
      y: 0,
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.perkCard',
        start: 'top center',
      },
    });
  }, []);

  return (
    <Box
      className="perkCard"
      sx={{
        zIndex: 1,
        transform: 'translateY(25px)',
        opacity: 0,
        mb: '2em',
        textAlign: 'center',
        padding: '1.1em',
        width: { xs: '260px', sm: '260px', md: '28%' },
        height: { xs: 'auto', sm: '300px' },
        transition: '.2s ease',
        ':hover': {
          boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px',
        },
      }}
    >
      <Box sx={{ mb: '1em', display: 'flex', justifyContent: 'center' }}>
        <Icon color="primary" sx={{ fontSize: '2em' }} />
      </Box>
      <Typography
        variant="h3"
        color="primary"
        sx={{ fontSize: { xs: '1.1em' }, mb: '1em', fontWeight: '600' }}
      >
        {title}
      </Typography>
      <Typography
        variant="h3"
        sx={{ fontSize: { xs: '.86em', sm: '.88em' }, fontWeight: '300' }}
      >
        {text}
      </Typography>
    </Box>
  );
};

export default PerkCard;
