/* eslint-disable operator-linebreak */
import React, { useContext, useEffect } from 'react';

import { Link, Navigate } from 'react-router-dom';

import { Box, Typography } from '@mui/material';

import Button from 'components/Button';

import * as CONSTANTS from 'constants/index';
import { SearchContext } from 'context/searchContext';

const Info: React.FC = () => {
  const { currentInfoPage, results, setCurrentInfoPage }: any =
    useContext(SearchContext);

  useEffect(
    () => () => {
      setCurrentInfoPage(null);
    },
    [setCurrentInfoPage]
  );

  if (!results?.length) {
    return <Navigate to={CONSTANTS.HOME} />;
  }

  return (
    <Box maxWidth="936px" margin="24px auto 0 auto" sx={{ padding: '0 2.5%' }}>
      <Typography variant="title" component="h2" marginBottom="32px">
        {currentInfoPage?.title}
      </Typography>
      <Box maxHeight="489px" overflow="hidden" marginBottom="32px">
        <img
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
          src={`/images/${currentInfoPage?.photo}`}
          alt={currentInfoPage?.shortDescription}
        />
      </Box>
      <Typography variant="text" component="p" marginBottom="32px">
        {currentInfoPage?.description}
      </Typography>
      <Link
        style={{
          textDecoration: 'none',
          display: 'flex',
          justifyContent: 'center',
        }}
        to={`/${CONSTANTS.RESULTS}`}
      >
        <Button>Back to Results</Button>
      </Link>
    </Box>
  );
};
export default Info;
