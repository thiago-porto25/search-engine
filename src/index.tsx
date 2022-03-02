import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider } from 'context/themeContext';
import App from './App';

ReactDOM.render(
  <ThemeProvider>
    <Router>
      <App />
    </Router>
  </ThemeProvider>,

  document.getElementById('root')
);
