import { render, screen } from "@testing-library/react";
import App from "./App";

test("testing", () => {
  render(<App />);
  const el = screen.getByRole("button", {
    name: /Click to Increase: 0/i,
  });
  expect(el).toBeInTheDocument();
});
