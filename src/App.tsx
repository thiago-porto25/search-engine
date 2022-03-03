import { useMemo, useContext } from 'react';
import { Routes, Route } from 'react-router-dom';

import { ThemeContext } from 'context/themeContext';
import { SearchContextProvider } from 'context/searchContext';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import { GlobalStyles } from '@mui/material';
import globalStyle from 'styles/globalStyle';
import getDesignTokens from 'styles/theme';

import { Home, Info, NotFound, Results } from 'pages';
import Header from 'components/Header';
import Footer from 'components/Footer';

import * as CONSTANTS from 'constants/index';
import ErrorMessage from 'components/ErrorMessage';

const App = () => {
  const { mode } = useContext(ThemeContext);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles styles={globalStyle} />
      <SearchContextProvider>
        <Header />
        <Routes>
          <Route path={CONSTANTS.HOME}>
            <Route index element={<Home />} />
            <Route path={CONSTANTS.RESULTS} element={<Results />} />
            <Route path={CONSTANTS.INFO} element={<Info />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <ErrorMessage />
      </SearchContextProvider>
    </ThemeProvider>
  );
};

export default App;
