import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("tetsing with display value", () => {
  render(<App />);
  const input = screen.getAllByDisplayValue("Prince");

  input.forEach(element => {
    expect(element).toBeInTheDocument();
    
  });
});
