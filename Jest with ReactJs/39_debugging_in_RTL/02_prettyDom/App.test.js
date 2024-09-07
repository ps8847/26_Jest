import {prettyDOM, render, screen} from "@testing-library/react";
import App from "./App";

test("testing component",  () => {
  const {container} = render(<App />);
  
  // console.log(container);  // without pretty form
  console.log(prettyDOM(container));  // without pretty form
  
});
