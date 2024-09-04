import {render, screen} from "@testing-library/react";
import App from "./App";
import userEvent from "@testing-library/user-event"
import { act } from "react";

test("on change event testing", async () => {
  userEvent.setup();
  render(<App />);

  const el = screen.getByRole("textbox");
  await act(async () => {
    await userEvent.type(el , "prince")
  })
  expect(screen.getByText("prince")).toBeInTheDocument()

});
