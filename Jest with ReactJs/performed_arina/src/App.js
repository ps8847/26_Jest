import "./App.css";
import {useState} from "react"
function App() {

  const [data , setData] = useState("")
  return (
    <div className="App">
     
     <h1>Test Click Evenet with Button</h1>
     <button onClick={() => setData("updated data")}>Update Data</button>
     <h1>{data}</h1>
    </div>
  );
}

export default App;
