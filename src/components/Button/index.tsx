import { Button as ButtonMui, Typography } from '@mui/material';
import React from 'react';

interface ButtonProps {}

const Button: React.FC<ButtonProps> = ({ children }) => (
  <ButtonMui sx={{ padding: '13px 72px' }} variant="contained" color="primary">
    <Typography
      color="white"
      variant="button"
      component="p"
      sx={{ textTransform: 'none' }}
    >
      {children}
    </Typography>
  </ButtonMui>
);

export default Button;
