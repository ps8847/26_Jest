import { useState } from "react";
import "./App.css";

function App() {

  const [name , setname] = useState("")

  return (
    <div className="App">
      <h1>onChange event testing</h1>
      <h2>{name}</h2>
      <input type="text" onChange={(e) => setname(e.target.value)} placeholder="enter name"/>
    </div>
  );
}

export default App;
