import React, { useContext } from 'react';

import { Navigate } from 'react-router-dom';

import { Box } from '@mui/material';

import * as CONSTANTS from 'constants/index';
import { Result as ResultType, SearchContext } from 'context/searchContext';
import Result from 'components/Result';

interface ResultsProps {}

const Results: React.FC<ResultsProps> = () => {
  const { results }: any = useContext(SearchContext);

  if (!results?.length) {
    return <Navigate to={CONSTANTS.HOME} />;
  }

  return (
    <Box
      maxWidth="936px"
      width="95%"
      sx={{ margin: { xs: '0 auto', md: '64px auto 0 auto' } }}
    >
      {results.map((item: ResultType) => (
        <Result key={item.title + item.photo} result={item} />
      ))}
    </Box>
  );
};

export default Results;
