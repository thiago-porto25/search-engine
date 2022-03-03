import React from 'react';
import { Typography, useTheme } from '@mui/material';

interface LogoProps {
  path: string;
}

const Logo: React.FC<LogoProps> = ({ path }) => {
  const theme = useTheme();
  const variant = path === '/' ? 'homeLogo' : 'pageLogo';

  return (
    <Typography
      variant={variant}
      component="h1"
      color={theme.palette.secondary.main}
    >
      Searchr
    </Typography>
  );
};

export default Logo;
