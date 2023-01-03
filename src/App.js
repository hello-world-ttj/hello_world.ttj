import {Routes,Route} from "react-router-dom";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Foot from "./footer";
import Education from "./Education";
function App() {
  return (
    <div className="bg-white dark:bg-black">
          <NavBar />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/resume" element={<Skills />} />
            <Route path="/education" element={<Education />} />
          </Routes>
          <Foot />
    </div>
  );
}

export default App;
