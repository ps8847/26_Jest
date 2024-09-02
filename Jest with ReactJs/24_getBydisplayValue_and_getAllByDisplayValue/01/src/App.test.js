import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("tetsing with display value", () => {
  render(<App />);
  const input = screen.getByDisplayValue("Prince");

  expect(input).toBeInTheDocument();
});
