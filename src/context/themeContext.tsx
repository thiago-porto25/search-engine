import { createContext, useMemo, useState, FC } from 'react';
import { PaletteMode } from '@mui/material';

interface Context {
  mode: PaletteMode;
  toggleTheme(): void;
}

const ThemeContext = createContext<Context>({
  mode: 'light',
  toggleTheme: () => {},
});

const ThemeProvider: FC = ({ children }) => {
  const [mode, setMode] = useState<PaletteMode>('light');
  const toggleTheme = () => {
    setMode((prev) => (prev === 'light' ? 'dark' : 'light'));
  };

  const providedValue = useMemo(() => ({ mode, toggleTheme }), [mode]);

  return (
    <ThemeContext.Provider value={providedValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
