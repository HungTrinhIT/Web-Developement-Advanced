import "./App.css";
import { useEffect } from "react";
import Homepage from "./pages/Homepage";
import { appendScript } from "./utils/appendScript";
function App() {
  useEffect(() => {
    appendScript("assets/js/jquery-3.5.1.min.js");
    appendScript("assets/js/common_scripts.js");
    appendScript("assets/js/main.js");
  });

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
