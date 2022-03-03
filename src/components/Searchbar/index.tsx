/* eslint-disable react/jsx-curly-newline */
/* eslint-disable no-unused-vars */
/* eslint-disable operator-linebreak */
import React, { useContext, useRef } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import { useTheme } from '@mui/material';

import { SearchContext } from 'context/searchContext';

import { keyEvent, setErrorType, setResultsType } from 'helpers/handleSearch';
import { Container, Icon, Input } from './styles';

interface SearchbarProps {
  handleKeyUp(
    e: keyEvent,
    term: string,
    setTerm: setResultsType,
    setError: setErrorType,
    navigate: NavigateFunction
  ): void;
}

const Searchbar: React.FC<SearchbarProps> = ({ handleKeyUp }) => {
  const { setSearchTerm, searchTerm, setResults, setError }: any =
    useContext(SearchContext);
  const theme: any = useTheme();
  const inputRef = useRef<HTMLInputElement | null>(null);
  const navigate = useNavigate();

  const handleContainerClick = (): void => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  return (
    <Container
      onClick={handleContainerClick}
      bgcolor={theme.palette.background.search}
      bgcolorhover={theme.palette.divider.main}
      bordercolor={theme.palette.background.border}
      iconcolorhover={theme.palette.primary.light}
    >
      <Icon color={theme.palette.primary.main} />
      <Input
        value={searchTerm}
        onChange={handleChange}
        ref={inputRef}
        color={theme.palette.secondary.main}
        placeholder="Search..."
        onKeyUp={(e) =>
          handleKeyUp(e, searchTerm, setResults, setError, navigate)
        }
      />
    </Container>
  );
};

export default Searchbar;
