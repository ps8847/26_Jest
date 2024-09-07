import {prettyDOM, render, screen} from "@testing-library/react";
import App from "./App";

test("testing component",  () => {
  const {debug} = render(<App />);
  
  // as same as prettyDom 
  debug()
});
