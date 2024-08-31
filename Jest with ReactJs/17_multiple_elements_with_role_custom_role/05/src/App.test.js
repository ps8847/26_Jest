import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const inpu1 = screen.getByRole("textbox", { name: "User Name" });
  const input2 = screen.getByRole("textbox", { name: "User Age" });

  expect(inpu1).toBeInTheDocument();
  expect(input2).toBeInTheDocument();
});
