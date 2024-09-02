import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("test with getByText", () => {
  render(<App />);
  const el = screen.getByText("data found"); 
  expect(el).toBeInTheDocument();
});

test("test with findByText", async () => {
  render(<App />);
  // const el = await screen.findByText("data found"); // by default it will take 1 second to wiat for the element otehrwise it will fail
  const el = await screen.findByText("data found" , {} , {timeout:4000}); // we can provide the timeout value that wait till this amount of time  maximum time is 5 seconds
  expect(el).toBeInTheDocument();
});
