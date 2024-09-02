import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("text macth with string", () => {
  render(<App />);
  const div1 = screen.getByText("Hello World");  // it expected it be exact same
  const div2 = screen.getByText("Hello World" , {exact:false});  // in finds the whole word ignoring the uppercase or lower case ... it will pass text like "hello world buddy"  but will fail the worlds like "hello in world"

  expect(div1).toBeInTheDocument();  
  expect(div2).toBeInTheDocument();  
  

});
