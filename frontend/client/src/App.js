import logo from "./logo.svg";
import "./App.css";
import { useState, useRef, useEffect } from "react";
import { Homepage } from "./pages/Homepage";

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Component did mount");
    return () => console.log("Component will unmount");
  }, []);

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}

export default App;
