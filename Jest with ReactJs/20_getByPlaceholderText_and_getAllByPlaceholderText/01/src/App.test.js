import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("test case for single text input", () => {
  render(<App />);
  const input = screen.getByPlaceholderText("enter username");

  expect(input).toBeInTheDocument();
  expect(input).toHaveValue("prince");
});
