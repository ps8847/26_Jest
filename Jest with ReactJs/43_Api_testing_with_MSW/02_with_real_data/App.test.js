import { render, screen } from "@testing-library/react";
import App from "./App";

test("test handling", () => {
  render(<App />);
  const el = screen.getByRole("heading");
  expect(el).toBeInTheDocument();
});

test("test for real api" , async () => {
  render(<App />)
  const el = await screen.findAllByRole("listitem");
  expect(el).toHaveLength(4);
})