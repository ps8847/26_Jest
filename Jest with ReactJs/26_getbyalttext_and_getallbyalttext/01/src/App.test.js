import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("img testing with alt text", () => {
  render(<App />);
  const img = screen.getByAltText("dummy img");

  expect(img).toBeInTheDocument();

});
