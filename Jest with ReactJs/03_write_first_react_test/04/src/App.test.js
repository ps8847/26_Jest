import { render, screen } from '@testing-library/react';
import App from './App';

test('Test First React app case', () => {
  render(<App />);
  const text1 = screen.getByText(/First React Test Case/i);   
  const text2 = screen.getByText(/prince sharma/i);   
  
  expect(text1).toBeInTheDocument();  
  expect(text2).toBeInTheDocument();  
});
