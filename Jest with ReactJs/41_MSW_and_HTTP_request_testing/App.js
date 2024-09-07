import { useEffect, useState } from "react";
import "./App.css";

function App() {
  let [data, setData] = useState([]);

  const getData = async () => {
    let result = await fetch("https://jsonplaceholder.typicode.com/users");
    result = await result.json();
    setData(result);
  };

  console.log(data);

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <h1>API Call</h1>

      <h2>List of Users</h2>

      <ul>
        {data.map((item) => {
          return <li id={item.id}>{item.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default App;
