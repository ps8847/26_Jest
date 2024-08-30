import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';

test('click event test case 1', () => { 
  render(<App />);
  
  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});

test('click event test case 2', () => { 
  render(<App />);
  
  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});

test('click event test case 3', () => { 
  render(<App />);
  
  const btn = screen.getByRole("button");

  fireEvent.click(btn);
  expect(screen.getByText("updated data")).toBeInTheDocument();
});

afterAll(() => {
  console.log("*********  After All **********");
  
})