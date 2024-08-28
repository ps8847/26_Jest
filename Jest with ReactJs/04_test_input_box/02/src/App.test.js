import { render, screen } from '@testing-library/react';
import App from './App';

test('Test First React app case', () => {
  render(<App />);

let checkInput = screen.getByRole("textbox");
  let checkInputPlaceHolder = screen.getByPlaceholderText("Enter User name");
  expect(checkInputPlaceHolder).toBeInTheDocument();   // it will check that the input with that placeholder is in the screen or not
  expect(checkInput).toHaveAttribute("name" , "username");   // it will check that the input with that name is in the screen or not
  expect(checkInput).toHaveAttribute("id" , "userId");   // it will check that the input with that id is in the screen or not
  expect(checkInput).toHaveAttribute("type" , "text");   // it will check that the input with that type is in the screen or not
  expect(checkInput).toHaveAttribute("value" , "prince");   // it will check that the input with that value is in the screen or not
});
