import React from 'react';
import { Divider as DividerMui, useTheme } from '@mui/material';

const Divider: React.FC = () => {
  const theme: any = useTheme();

  return (
    <DividerMui
      sx={{
        display: { xs: 'initial', md: 'none' },
        width: '100%',
        borderBottomWidth: '2px',
        background: theme.palette.background.border,
        marginBottom: '32px',
      }}
    />
  );
};

export default Divider;
