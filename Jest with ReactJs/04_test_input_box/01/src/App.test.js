import { render, screen } from '@testing-library/react';
import App from './App';

test('Test First React app case', () => {
  render(<App />);
  
  let checkInput = screen.getByRole("textbox");
  expect(checkInput).toBeInTheDocument()   // it will check that the input is in the screen or not
});
