import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("img testing with alt text", () => {
  render(<App />);
  const img = screen.getAllByAltText("dummy img");

  img.forEach(element => {
    expect(element).toBeInTheDocument();
  });

});
