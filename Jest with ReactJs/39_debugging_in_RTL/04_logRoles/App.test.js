import {logRoles, render} from "@testing-library/react";
import App from "./App";

test("testing component",  () => {
  const {container} = render(<App />);

  logRoles(container)
});
