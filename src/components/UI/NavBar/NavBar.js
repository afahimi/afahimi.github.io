import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import Logo from "../Elements/Logo/Logo";
import classes from "./NavBar.module.css";
import Btn from "../Elements/Btn/Btn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div>
      <header>
        <div className="mr-8">
          <Link to="/">
            {" "}
            <Logo className="flex-shrink-0" />
          </Link>
        </div>
        <nav>
          <ul className="2xl:flex 2xl:flex-row list-none gap-14 hidden">
            <li>
              <Link to="/projects">
                <Btn value="Projects" />
              </Link>
            </li>
            {/* <li>
              <Link to="/notes">
                <Btn value="Notes" />
              </Link>
            </li> */}
            <li>
              <Link to="/blog">
                <Btn value="Experience" />
              </Link>
            </li>
            <li>
              <Link to="/contact">
                <Btn value="Contact" />
              </Link>
            </li>
          </ul>
          {ReactDOM.createPortal(
            <>
              {showMenu && (
                <div
                  className="fixed z-20 w-screen h-screen bg-black opacity-50"
                  onClick={() => setShowMenu(false)}
                />
              )}
              <div className="flex flex-row">
                <aside
                  className={`rounded-l-xl h-screen w-2/3 md:w-1/4 bg-custom-light-blue fixed right-0 z-50 flex flex-col transition-all duration-500 ease-in-out transform ${
                    showMenu ? "translate-x-0" : "translate-x-full"
                  }`}
                >
                  <button
                    className="border-transparent bg-custom-blue hover:bg-custom-blue-hover w-1/5 mt-2 self-end mr-3 rounded-full transition ease-in-out"
                    onClick={() => setShowMenu(false)}
                  >
                    <FontAwesomeIcon icon={faXmark} />
                  </button>
                  <ul className="flex flex-col gap-4 mt-14">
                    <button className={classes.menuItems} onClick={() => setShowMenu(false)}>
                      <Link to="/projects">
                        Projects
                      </Link>
                    </button>
                    <button className={classes.menuItems} onClick={() => setShowMenu(false)}>
                      <Link to="/blog">
                        Experience
                      </Link>
                    </button>
                    <button className={classes.menuItems} onClick={() => setShowMenu(false)}>
                      <Link to="/contact">
                        Contact
                      </Link>
                    </button>
                  </ul>
                </aside>
              </div>
            </>,
            document.getElementById("portal")
          )}
          <div className="2xl:hidden flex flex-row">
            <Btn onClick={() => setShowMenu(true)}>
              <FontAwesomeIcon icon={faBars} />
            </Btn>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
