import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>getByTestId and getAllByTestId</h1>

      <div data-testid="div-test-id">testing with test id</div>
      <div data-testid="div-test-id">testing with test id</div>

    </div>
  );
}

export default App;
