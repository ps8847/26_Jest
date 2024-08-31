import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("single button testing", () => {
  render(<App />);
  const btn = screen.getByText("Login");
  expect(btn).toBeInTheDocument()
});
test("single p tag testing", () => {
  render(<App />);
  const p_tag = screen.getByText("p tag testing");
  expect(p_tag).toBeInTheDocument()
});
test("single h1 tag testing", () => {
  render(<App />);
  const h1_tag = screen.getByText("H1 tag testing");
  expect(h1_tag).toBeInTheDocument()
});
