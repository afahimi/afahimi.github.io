import React from "react";
import Logo from "../Logo/Logo";
import classes from "./NavBar.module.css";
import Btn from "../Btn/Btn";

const NavBar = () => {
  return (
    <div>
      <header>
        <Logo />
        <nav>
          <ul className={classes.navList}>
            <li>
              <Btn value="Projects" />
            </li>
            <li>
                <Btn value="Notes" />
            </li>
            <li>
                <Btn value="Blog" />
            </li>
          </ul>
        </nav>
        <Btn value="Contact" />
      </header>
    </div>
  );
};

export default NavBar;
