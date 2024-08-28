import { render, screen } from '@testing-library/react';
import App from './App';

test('Test First React app case', () => {
  render(<App />);
  const text = screen.getByText("First react Test case");
  expect(text).toBeInTheDocument();   // it should be there on the screen
});
