import React from "react";
import NavBar from "./components/UI/NavBar/NavBar";
import AboutPanel from "./components/UI/AboutPanel/AboutPanel";
import classes from "./App.module.css";
import IntroScreen from "./components/UI/IntroScreen/IntroScreen";
import AboutScreen from "./components/UI/AboutScreen/AboutScreen";
import TextBox from "./components/UI/Elements/TextBox/TextBox";

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
    <>
      <div className={`${classes.global} ${classes.container}`}>
        <NavBar />
        <IntroScreen />
        <AboutScreen backgroundColor="#B2D4E1" />
      </div>
    </>
  );
};

export default App;
