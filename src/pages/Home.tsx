/* eslint-disable operator-linebreak */
import React, { useContext, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import { Box } from '@mui/material';

import Searchbar from 'components/Searchbar';
import Logo from 'components/Logo';
import Button from 'components/Button';

import { handleClickSearch, handleEnterSearch } from 'helpers/handleSearch';
import { SearchContext } from 'context/searchContext';

const Home: React.FC = () => {
  const { setResults, setSearchTerm, setCurrentInfoPage }: any =
    useContext(SearchContext);
  const location = useLocation();

  useEffect(() => {
    setResults([]);
    setSearchTerm('');
    setCurrentInfoPage(null);
  }, [setResults, setSearchTerm, setCurrentInfoPage]);

  return (
    <Box
      flex="0.9"
      display="flex"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      rowGap="32px"
      sx={{ padding: '0 2.5%' }}
    >
      <Logo path={location.pathname} />
      <Searchbar handleKeyUp={handleEnterSearch} />
      <Button handleClick={handleClickSearch}>Search</Button>
    </Box>
  );
};

export default Home;
