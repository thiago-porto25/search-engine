/* eslint-disable no-unused-vars */
import { KeyboardEvent, MouseEvent, Dispatch, SetStateAction } from 'react';
import { NavigateFunction } from 'react-router-dom';
import axios from 'axios';
import * as CONSTANTS from 'constants/index';
import { Result } from 'context/searchContext';

export type clickEvent = MouseEvent<HTMLButtonElement>;
export type keyEvent = KeyboardEvent<HTMLInputElement>;
export type setResultsType = Dispatch<SetStateAction<Result[]>>;
export type setErrorType = Dispatch<SetStateAction<string | null>>;

const formatTerm = (term: string): string =>
  term.replace(' ', '+').toLowerCase();

const handleSearch = async (
  term: string,
  setResults: setResultsType,
  setError: setErrorType,
  navigate: NavigateFunction
) => {
  const formattedTerm = formatTerm(term);
  try {
    const result = await axios.get(
      `http://localhost:3333/?search=${formattedTerm}`
    );

    const data = await result.data;
    setResults(data);
    navigate(`/${CONSTANTS.RESULTS}`);
  } catch (error: any) {
    setError(error.message);
  }
};

const handleEnterSearch = (
  e: keyEvent,
  term: string,
  setResults: setResultsType,
  setError: setErrorType,
  navigate: NavigateFunction
): void => {
  const trimmedTerm = term.trim();

  if (trimmedTerm && (e.code === 'Enter' || e.which === 13)) {
    handleSearch(term, setResults, setError, navigate);
  }
};

const handleClickSearch = (
  e: clickEvent,
  term: string,
  setResults: setResultsType,
  setError: setErrorType,
  navigate: NavigateFunction
): void => {
  const trimmedTerm = term.trim();

  if (trimmedTerm) {
    handleSearch(trimmedTerm, setResults, setError, navigate);
  }
};

export { handleEnterSearch, handleClickSearch };
