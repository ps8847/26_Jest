import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [data, setdata] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setdata(true);
    }, 500);
  });
  return (
    <div className="App">
      <h1>findBy and findByAll</h1>
      {data ? (
        <>
          {" "}
          <h1>data found</h1> <h1>data found</h1>{" "}
        </>
      ) : (
        <>
          {" "}
          <h1>not data found</h1> <h1>not data found</h1>{" "}
        </>
      )}
    </div>
  );
}

export default App;
