import React from "react";
import { Link } from 'react-router-dom';
import Logo from "../Elements/Logo/Logo";
import classes from "./NavBar.module.css";
import Btn from "../Elements/Btn/Btn";

const NavBar = () => {
  return (
    <div>
      <header>
        <Link to="/"> {/* Wraps the Logo component with a Link to the home page */}
          <Logo />
        </Link>
        <nav>
          <ul className={classes.navList}>
            <li>
              <Link to="/projects"><Btn value="Projects" /></Link>
            </li>
            <li>
              <Link to="/notes"><Btn value="Notes" /></Link>
            </li>
            <li>
              <Link to="/blog"><Btn value="Blog" /></Link>
            </li>
          </ul>
        </nav>
        <Link to='/contact'><Btn value="Contact" /></Link>
      </header>
    </div>
  );
};

export default NavBar;
