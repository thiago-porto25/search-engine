import React from 'react';

import { Link } from 'react-router-dom';

import { Typography, Box } from '@mui/material';

import Button from 'components/Button';

import * as CONSTANTS from 'constants/index';

export const NotFound: React.FC = () => (
  <Box
    flex="0.9"
    display="flex"
    flexDirection="column"
    alignItems="center"
    justifyContent="center"
    rowGap="32px"
  >
    <Typography variant="notFound" component="h2">
      404
    </Typography>
    <Typography variant="button" component="p">
      Oops... It seems that this page doesn&apos;t exist!
    </Typography>
    <Link style={{ textDecoration: 'none' }} to={CONSTANTS.HOME}>
      <Button handleClick={() => {}}>Go Home</Button>
    </Link>
  </Box>
);

export default NotFound;
