import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const btns = screen.getAllByRole("button");

  expect(btns[0]).toBeInTheDocument();
  expect(btns[1]).toBeInTheDocument();
  
  // or by loop
  btns.forEach(element => {
    expect(element).toBeInTheDocument();
  });
});
