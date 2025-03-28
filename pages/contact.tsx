import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import { ColorModeContext } from './_app';

interface ContactBoxProps {
  href: string;
  target?: string;
  t1: string;
  t2: string;
  t3: string;
}

const ContactBox: React.FC<ContactBoxProps> = ({ href, target, t1, t2, t3 }) => {
  const colorMode = useContext(ColorModeContext);
  const textColor = colorMode?.mode === 'light' ? 'black' : 'white';

  return (
    <Box
      component={href ? 'a' : 'div'}
      href={href || undefined}
      target={target || undefined}
      sx={{
        textDecoration: 'none',
        color: textColor,
        display: 'flex',
        flexDirection: 'column',
        mb: 4,
        cursor: href ? 'pointer' : 'default'
      }}
    >
      <Typography variant="h6" sx={{ mb: 1, color: textColor }}>
        {t1}
      </Typography>
      <Typography variant="body2" sx={{ color: colorMode?.mode === 'light' ? '#555' : '#aaa', mb: 0.5 }}>
        {t2}
      </Typography>
      <Typography variant="body1" sx={{ color: textColor }}>
        {t3}
      </Typography>
    </Box>
  );
};

export default ContactBox;
