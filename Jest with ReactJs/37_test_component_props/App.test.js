import {render, screen} from "@testing-library/react";
import User from "./User";

test("Props testing", () => {
  const name = "Prince";
  render(<User name={name}/>);
  const user = screen.getByText(name);
  expect(user).toBeInTheDocument()

});
