import "./App.css";
import Homepage from "./pages/Homepage";
import CourseDetail from "./pages/CourseDetail";
import useScript from "./hooks/useScript";
function App() {
  useScript("assets/js/jquery-3.5.1.min.js");
  useScript("assets/js/common_scripts.js");
  useScript("assets/js/wow.min.js");
  useScript("assets/js/owl.carousel.min.js");
  useScript("assets/js/main.js");

  return (
    <div>
      <CourseDetail />
    </div>
  );
}

export default App;
