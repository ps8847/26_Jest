import { useState } from "react";
import "./App.css";

function App() {

  let [count , setCounter] = useState(0);

  return (
    <div className="App">
      <button onClick={() => setCounter(count => count + 1)}>Click to Increase: {count}</button>
      <h2>Heading 2</h2>
      <h2>Heading 3</h2>
    </div>
  );
}

export default App;
