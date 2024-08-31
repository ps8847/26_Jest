import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="App">
      <h1>getByRole</h1>
      <label htmlFor="input1">User Name</label>
      <input type="text" id="input1" />
      <label htmlFor="input2">User Age</label>
      <input type="text" id="input2" />
    </div>
  );
}

export default App;
