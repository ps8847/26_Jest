import { useState } from "react";
import "./App.css";

function App() {

  const [data , setData] = useState("")

  return (
    <div className="App">
      {data}
      <button onClick={() => setData("hello")}>Click Me</button> 
    </div>
  );
}

export default App;
