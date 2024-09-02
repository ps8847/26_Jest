import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <h1>Testing Library Example</h1>
      {isLoggedIn ? <button>Logout</button> : <button>Login</button>}
    </div>
  );
}

export default App;
