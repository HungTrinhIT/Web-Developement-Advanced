import "./App.css";
import Homepage from "./pages/Homepage";
import useScript from "./hooks/useScript";
function App() {
  useScript("assets/js/jquery-3.5.1.min.js");
  useScript("assets/js/common_scripts.js");
  useScript("assets/js/wow.min.js");
  useScript("assets/js/owl.carousel.min.js");
  useScript("assets/js/main.js");

  return (
    <div>
      <Homepage />
    </div>
  );
}

export default App;
