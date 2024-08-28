import { render, screen } from "@testing-library/react";
import App from "./App";

test("Test First React app case", () => {
  render(<App />);

  const title = screen.getByTitle("AI generated img");

  expect(title).toBeInTheDocument();
});
