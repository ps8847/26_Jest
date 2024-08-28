import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('on change event handling', () => { 
  render(<App />);
  
  const input = screen.getByRole("textbox");

  // Simulate typing in the input field
  fireEvent.change(input, { target: { value: 'a' } });

  // Verify that the input field's value has been updated
  expect(input.value).toBe("a");
});
