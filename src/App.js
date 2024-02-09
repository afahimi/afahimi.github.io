import React from "react";
import NavBar from "./components/UI/NavBar/NavBar";
import classes from "./App.module.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AboutPanel from "./components/UI/AboutPanel/AboutPanel";
import IntroScreen from "./components/UI/IntroScreen/IntroScreen";
import AboutScreen from "./components/UI/AboutScreen/AboutScreen";
import Footer from "./components/UI/Footer/Footer";
import Projects from "./components/pages/Projects/Projects";
import Notes from "./components/pages/Notes/Notes";
import Experience from "./components/pages/Experience/Experience";
import Contact from "./components/pages/Contact/Contact";
import './index.css';

/*
Azure: F0FFFF
Darker Azure: CCE0E5
Button Color: A9CAD2
Button Color (Hover): 7FA6AC
Backgrund Color: d0e8fd
Prominent Buton: 769FA7
About Panel 1: f5faff
About Panel 2: B2D4E1
*/

const App = () => {
  return (
    <div className={`${classes.global} ${classes.container}`}>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/" element={
            <>
              <IntroScreen />
              <AboutScreen backgroundColor="#B2D4E1" />
            </>
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
