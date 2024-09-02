import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("button testing with title", () => {
  render(<App />);
  const btn = screen.getByTitle("click");

  expect(btn).toBeInTheDocument();

});

test("span testing with title", () => {
  render(<App />);
  const span = screen.getByTitle("black spade suite");

  expect(span).toBeInTheDocument();

});
