import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import App from '../App';

test('renders app logo', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByText(/Searchr/);
  expect(linkElement).toBeInTheDocument();
});

test('renders input', () => {
  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );
  const linkElement = screen.getByPlaceholderText(/Search.../);
  expect(linkElement).toBeInTheDocument();
});
