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
  short_description: string;
}

interface Context {
  searchTerm: string;
  setSearchTerm: Dispatch<SetStateAction<string>>;
  results: Result[];
  setResults: Dispatch<SetStateAction<Result[]>>;
  currentInfoPage: Result | null;
  setCurrentInfoPage?: Dispatch<SetStateAction<Result | null>>;
  loading: boolean;
  setLoading: Dispatch<SetStateAction<boolean>>;
  error: string;
  setError: Dispatch<SetStateAction<string>>;
}

const SearchContext = createContext<Context | null>(null);

const SearchContextProvider: FC = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState<Result[]>([]);
  const [currentInfoPage, setCurrentInfoPage] = useState<Result | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const providedContext = useMemo(
    () => ({
      results,
      setResults,
      currentInfoPage,
      setCurrentInfoPage,
      loading,
      setLoading,
      error,
      setError,
      searchTerm,
      setSearchTerm,
    }),
    [results, currentInfoPage, error, loading, searchTerm]
  );

  return (
    <SearchContext.Provider value={providedContext}>
      {children}
    </SearchContext.Provider>
  );
};

export { SearchContext, SearchContextProvider };
