import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

test("get by role", () => {
  render(<App />);
  const btn1 = screen.getByRole("button", { name: "Click 1" });
  const btn2 = screen.getByRole("button", { name: "Click 2" });

  expect(btn1).toBeInTheDocument();
  expect(btn2).toBeInTheDocument();
});
