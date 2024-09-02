import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("test with findByText", async () => {
  render(<App />);

  const el = await screen.findAllByText("data found" , {} , {timeout:4000}); // we can provide the timeout value that wait till this amount of time  maximum time is 5 seconds
  
  el.forEach(element => {
    expect(element).toBeInTheDocument();
  });
  
});
