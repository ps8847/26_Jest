import "./App.css";

function App(props) {

  return (
    <div className="App">
      <h1>Functional props testing and mocking</h1>
     <button onClick={props.testFunction}>Click</button>
    </div>
  );
}

export default App;
