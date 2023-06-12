import React from 'react';
import NavBar from './components/UI/NavBar/NavBar';
import classes from './App.module.css';

/*
Azure: F0FFFF
Darker Azure: CCE0E5
Button Color: 0096FF
Button Color (Hover): 0084e3
Backgrund Color: d0e8fd
*/

const App = () => {
  return (
    <div className={classes.global}>
      <NavBar />
    </div>
  );
}

export default App;
