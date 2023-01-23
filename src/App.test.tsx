import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import MovieCards from "./components/MovieCards";


test('renders App Farmu', () => {
  render(<App />);
  const linkElement = screen.getByText(/Farmu/i);
  expect(linkElement).toBeInTheDocument();
});
