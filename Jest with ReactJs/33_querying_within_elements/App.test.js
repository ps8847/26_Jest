import { render, screen, configure, within } from "@testing-library/react";
import App from "./App";

test("test with within function", async () => {
  render(<App />);

  const element = screen.getByText("Hello World");
  const subEl1 = within(element).getByText("hi");
  const subEl2 = within(element).getByText("hello");

  expect(element).toBeInTheDocument();
  expect(subEl1).toBeInTheDocument();
  expect(subEl2).toBeInTheDocument();

  
});
