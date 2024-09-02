import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("text macth with regex", () => {
  render(<App />);
  const div1 = screen.getByText(/Hello World/);  // it expected it be include no matetr where but it should be there 
  const div2 = screen.getByText(/Hello World/i);  // it ignores the cases
  const div3 = screen.getByText(/Hello W?orld/i);  // it will not care about the w is there before orld or not

  expect(div1).toBeInTheDocument();  
  expect(div2).toBeInTheDocument();  
  expect(div3).toBeInTheDocument();  
  

});
