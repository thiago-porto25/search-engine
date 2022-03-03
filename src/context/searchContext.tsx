import {
  createContext,
  FC,
  useMemo,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';

export interface Result {
  title: string;
  photo: string;
  description: string;
  shortDescription: string;
}

interface Context {
  searchTerm?: string;
  setSearchTerm?: Dispatch<SetStateAction<string>>;
  results?: Result[];
  setResults?: Dispatch<SetStateAction<Result[]>>;
  currentInfoPage?: Result | null;
  setCurrentInfoPage?: Dispatch<SetStateAction<Result | null>>;
  error?: string;
  setError?: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<Context>({});

const SearchContextProvider: FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [currentInfoPage, setCurrentInfoPage] = useState<Result | null>(null);

  const [error, setError] = useState('');

  const providedContext = useMemo(
    () => ({
      results,
      setResults,
      currentInfoPage,
      setCurrentInfoPage,

      error,
      setError,
      searchTerm,
      setSearchTerm,
    }),
    [results, currentInfoPage, error, searchTerm]
  );

  return (
    <SearchContext.Provider value={providedContext}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
