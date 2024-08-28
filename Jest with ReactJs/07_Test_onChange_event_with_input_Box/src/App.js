import "./App.css";
import {useState} from "react"
function App() {

  const [data , setData] = useState("")
  return (
    <div className="App">
      <input type="text" onChange={(e) => setData(e.target.value)} value={data}/>
    </div>
  );
}

export default App;
