import { MenuData } from "./MenuData";
import { useState } from "react";
import { RiMovie2Fill } from "react-icons/ri";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";

export default function Navbar({ isAuthenticated }) {
  const [state, setState] = useState({
    clicked: false,
  });

  const handleClick = () => {
    setState({ ...state, clicked: !state.clicked });
  };

  return (
    <>
      <nav className="navbaritems">
        <h1 className="logo">
          <span>Cinéfilo</span>
          <RiMovie2Fill className="logo-icon" />
        </h1>
        <div className="menu-icons" onClick={handleClick}>
          {state.clicked ? <FaTimes /> : <FaBars />}
        </div>

        <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuData.map((item, index) => {
            if (item.always || item.loggedIn === isAuthenticated) {
              return (
                <li key={index}>
                  <NavLink to={item.url} className={item.cName}>
                    {item.icon}
                    <span>{item.title}</span>
                  </NavLink>
                </li>
              );
            }
          })}
        </ul>
      </nav>
    </>
  );
}
