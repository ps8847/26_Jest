import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const textInput = screen.getByRole("inputbox");

  expect(textInput).toBeInTheDocument();
});
