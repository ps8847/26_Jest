import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const options = screen.getAllByRole("option");

  expect(options[0]).toBeInTheDocument();
  expect(options[1]).toBeInTheDocument();
  
  // or by loop
  options.forEach(element => {
    expect(element).toBeInTheDocument();
  });
});
