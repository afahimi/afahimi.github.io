import React from 'react';
import NavBar from './components/UI/NavBar/NavBar';
import AboutPanel from './components/UI/AboutPanel/AboutPanel';
import classes from './App.module.css';
import IntroScreen from './components/UI/IntroScreen/IntroScreen';

/*
Azure: F0FFFF
Darker Azure: CCE0E5
Button Color: A9CAD2
Button Color (Hover): 7FA6AC
Backgrund Color: d0e8fd
Prominent Buton: 769FA7
*/

const App = () => {
  return (
    <div className={`${classes.global} ${classes.container}`}>
      <NavBar />
      <IntroScreen />
    </div>
  );
}

export default App;
