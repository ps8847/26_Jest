import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("single button testing", () => {
  render(<App />);
  const btn = screen.getByText("Login");
  expect(btn).toBeInTheDocument()
});
