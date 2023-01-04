import { Routes, Route } from "react-router-dom";
import NavBar from "./NavBar";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Foot from "./footer";
import Education from "./Education";
import Projects from "./Projects";
import Contact from "./Contact";
import { useEffect, useState } from "react";
import SyncLoader from "react-spinners/SyncLoader";
function App() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  }, []);
  return (
    <div>
      {
        loading ?
          <div className='flex justify-center items-center w-[100%] h-[100vh]'>
            <SyncLoader
              color={'#a3e635'}
              loading={loading}
              size={50}
            />
          </div>
          :
          <div className="bg-white dark:bg-black">
            <NavBar />
            <Routes>
              <Route path="/" element={<AboutMe />} />
              <Route path="/resume" element={<Skills />} />
              <Route path="/education" element={<Education />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
            <Foot />
          </div>
      }
    </div>
  );
}

export default App;
