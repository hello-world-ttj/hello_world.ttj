import {Routes,Route} from "react-router-dom";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
function App() {
  return (
    <div className="bg-white dark:bg-black">
          <NavBar />
          <Routes>
            <Route path="/" element={<AboutMe />} />
            <Route path="/resume" element={<Resume />} />
          </Routes>
    </div>
  );
}

export default App;
