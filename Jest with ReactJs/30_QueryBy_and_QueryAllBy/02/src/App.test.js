import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("test with getByText", () => {
  render(<App />);
  const logoutButton = screen.getByText("Logout"); // This will pass because "Logout" is rendered.
  
  // This will fail because "Login" is not present in the DOM.
  expect(() => screen.getByText("Login")).toThrow();

  expect(logoutButton).toBeInTheDocument();
});


test("test with queryByText", () => {
  render(<App />);
  const logoutButton = screen.queryByText("Logout"); // This will pass because "Logout" is rendered.
  const loginButton = screen.queryByText("Login"); // This will not throw an error but will return null.

  expect(logoutButton).toBeInTheDocument();
  expect(loginButton).not.toBeInTheDocument(); // This will pass because "Login" is not rendered.
});
