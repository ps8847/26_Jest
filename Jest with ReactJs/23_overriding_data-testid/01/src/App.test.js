import { render, screen , configure} from "@testing-library/react";
import App from "./App";

configure({testIdAttribute:'element-id'})

test("test div with data test id", () => {
  render(<App />);
  const divelement = screen.getByTestId("test-div");
  
 expect(divelement).toBeInTheDocument();
});
