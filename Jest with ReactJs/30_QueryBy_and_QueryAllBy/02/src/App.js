import "./App.css";
import { useState } from "react";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="App">
      <h1>Testing Library Example</h1>
      {isLoggedIn ? (
        <>
          <button>Logout</button>
          <button>Logout</button> {/* Duplicate button */}
        </>
      ) : (
        <>
          <button>Login</button>
          <button>Login</button> {/* Duplicate button */}
        </>
      )}
    </div>
  );
}

export default App;
