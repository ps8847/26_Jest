import { fireEvent, render, screen } from '@testing-library/react';
import App from "./App";

test('method tetsing case 1', () => { 
  render(<App />);
  const btn  = screen.getByTestId("btn1");
  fireEvent.click(btn);
  expect(screen.getByText("hello")).toBeInTheDocument()
 })