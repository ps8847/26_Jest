import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";


test("testing with multiple test id", () => {
  render(<App />);
  const divId = screen.getAllByTestId("div-test-id");
  
  divId.forEach(element => {
    expect(element).toBeInTheDocument();
    
  });
});
