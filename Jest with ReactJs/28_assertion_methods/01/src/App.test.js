import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("test input tetsing positive", () => {
  render(<App />);
  const input = screen.getByRole("textbox");

  expect(input).toBeInTheDocument();  // checks is it in the ui or not 
  expect(input).toHaveValue();  // checks it has any value ?
  expect(input).toHaveValue("prince sharma");  // checks is it matching the provided value ?
  expect(input).toBeEnabled(); // is the elemnt is enabled ?
  // expect(input).toBeDisabled(); // is the elemnt is disabled ?
  expect(input).toHaveAttribute("id"); // is the elemnt has id attribute ?
  expect(input).toHaveClass("test-style"); // checks is it matching the provided class name ?
 
});

test("test button negative", () => {
  render(<App />);
  const btn = screen.getByRole("button");

  expect(btn).not.toHaveClass("btn");  // checks is it class is not present in the button
 
  // so , we can tets the assertion in negative wya by placing .not in between the fucntion
 
});
