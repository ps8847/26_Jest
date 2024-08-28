import { render, screen } from '@testing-library/react';
import App from './App';

test('Test First React app case', () => {
  render(<App />);
  const text = screen.getByText(/First React Test Case/i);   
  
  // 1) it will ignore the cases now
  // 2) it will pass this kind of cases also as it will check till case only >> First React Test Case 123

  expect(text).toBeInTheDocument();  
});
