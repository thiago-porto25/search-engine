import React from 'react';
import { useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import Searchbar from 'components/Searchbar';
import Logo from 'components/Logo';
import Button from 'components/Button';

const Home: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      flex="0.9"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      rowGap="32px"
    >
      <Logo path={location.pathname} />
      <Searchbar />
      <Button>Teste</Button>
    </Box>
  );
};

export default Home;
