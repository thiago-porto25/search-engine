import React from 'react';
import { Typography, useTheme } from '@mui/material';
import Container from './styles';

const Footer: React.FC = () => {
  const theme = useTheme();

  return (
    <Container background={theme.palette.primary.main}>
      <Typography variant="text" component="p" color="white" textAlign="center">
        &copy; Thiago Porto. All Rights Reserved.
      </Typography>
    </Container>
  );
};

export default Footer;
