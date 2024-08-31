import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("test case for single text input", () => {
  render(<App />);
  const input = screen.getAllByPlaceholderText("enter username");

  expect(input[0]).toBeInTheDocument();
  expect(input[0]).toHaveValue("prince");
  
  // or 
  input.forEach(element => {
    
      expect(element).toBeInTheDocument();
      expect(element).toHaveValue("prince");
    
  });
});
