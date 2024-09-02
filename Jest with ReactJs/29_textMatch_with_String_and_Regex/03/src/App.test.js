import { render, screen, configure } from "@testing-library/react";
import App from "./App";

test("text macth with regex", () => {
  render(<App />);
  const div1 = screen.getByText((content, element) =>
    content.startsWith("Hello")
  );
  const div2 = screen.getByText((content, element) =>
    content.endsWith("World")
  );
  const div3 = screen.getByText((content, element) =>
    content.includes("orl")
  );
  const div4 = screen.getByText((content, element) =>
    content.length == 11
  );

  expect(div1).toBeInTheDocument();
  expect(div2).toBeInTheDocument();
  expect(div3).toBeInTheDocument();
  expect(div4).toBeInTheDocument();
});
