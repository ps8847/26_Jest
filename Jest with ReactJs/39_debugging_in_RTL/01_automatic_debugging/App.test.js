import {render, screen} from "@testing-library/react";
import App from "./App";

test("testing component",  () => {
  render(<App />);
  const el = screen.getByText("Heading 10");
  expect(el).toBeInTheDocument();
});
