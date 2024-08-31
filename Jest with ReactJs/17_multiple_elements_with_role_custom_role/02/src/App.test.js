import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const btn = screen.getByRole("button" , {name:"Click 1"});
  expect(btn).toBeInTheDocument();
});
