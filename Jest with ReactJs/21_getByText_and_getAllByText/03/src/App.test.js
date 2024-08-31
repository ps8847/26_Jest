import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("single h1 tag testing", () => {
  render(<App />);
  const h1_tag = screen.getAllByText("H1 tag testing");

  expect(h1_tag[0]).toBeInTheDocument()
  
  // or
  
  h1_tag.forEach(element => {
    expect(element).toBeInTheDocument()
    
  });
});
