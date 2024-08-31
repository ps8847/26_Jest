import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";


test("multi button testing", () => {
  render(<App />);
  const btn = screen.getAllByText("Login");

  btn.forEach(element => {
    expect(element).toBeInTheDocument()
  });
});

test("multi p tag testing", () => {
  render(<App />);
  const p_tag = screen.getAllByText("p tag testing");

  p_tag.forEach(element => {
    expect(element).toBeInTheDocument()
  });
});

test("multi h1 tag testing", () => {
  render(<App />);
  const h1_tag = screen.getAllByText("H1 tag testing");

  h1_tag.forEach(element => {
    expect(element).toBeInTheDocument()
  });
});

