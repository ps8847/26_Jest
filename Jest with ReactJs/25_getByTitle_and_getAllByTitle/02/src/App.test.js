import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("span testing with title", () => {
  render(<App />);
  const span = screen.getAllByTitle("black spade suite");

  span.forEach(element => {
    expect(element).toBeInTheDocument();
  });

});
