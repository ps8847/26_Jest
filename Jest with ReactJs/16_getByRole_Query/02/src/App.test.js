import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const inputField = screen.getByRole("button");
  expect(inputField).toBeInTheDocument();
});
