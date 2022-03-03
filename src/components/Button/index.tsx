/* eslint-disable react/jsx-curly-newline */
/* eslint-disable react/require-default-props */
/* eslint-disable no-unused-vars */
import React, { useContext } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';

import { Button as ButtonMui, Typography } from '@mui/material';

import { SearchContext } from 'context/searchContext';
import { clickEvent, setResultsType, setErrorType } from 'helpers/handleSearch';

interface ButtonProps {
  handleClick?: (
    e: clickEvent,
    term: string,
    setTerm: setResultsType,
    setError: setErrorType,
    navigate: NavigateFunction
  ) => void;
}

const Button: React.FC<ButtonProps> = ({ children, handleClick }) => {
  const { searchTerm, setResults, setError }: any = useContext(SearchContext);
  const navigate = useNavigate();

  return (
    <ButtonMui
      onClick={(e) =>
        handleClick!(e, searchTerm, setResults, setError, navigate)
      }
      sx={{ padding: '13px 72px' }}
      variant="contained"
      color="primary"
    >
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
};

export default Button;
