import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("test case with custom query", async () => {
  render(<App />);

  const element = document.querySelector("#testId");

  expect(element).toBeInTheDocument();
  expect(element).toHaveTextContent("Hello World");
  expect(element).toHaveAttribute("id");
  
});
