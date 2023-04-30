import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Navbar() {
  let navigate = useNavigate();
  let user = localStorage.getItem("user");
  let logout = () => {
    localStorage.removeItem("user");
    alert("you have been logged out");
    navigate("/signup");
  };
  //
  const [showSidebar, setShowSidebar] = useState(false);
  const location = useLocation();
  const links = [
    {
      name: "Home",
      path: "/",
      icon: faHome,
    },
    {
      name: "Recipes",
      path: "/recipes",
      icon: faList,
    },
    {
      name: "About Us",
      path: "/aboutus",
    },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className="Navbar container">
        <Link to="/" className="logo" style={{ fontFamily: "Better Together", letterSpacing: "1px" }}>
          T
          <span>
            <b>andoori</b>
          </span>
          Nights
        </Link>
        <div className="Nav-links">
          {links.map((link) => (
            <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>
              {link.name}
            </Link>
          ))}
          {user ? (
            <>
              <Link to="/addrecipes" className={location.pathname === "/addrecipes" ? "active" : ""}>
                Add Recipes
              </Link>
              <Link to="/signup" onClick={logout} className={location.pathname === "/signup" ? "active" : ""}>
                Logout
              </Link>
            </>
          ) : (
            <>
              <Link to="/signup" className={location.pathname === "/signup" ? "active" : ""}>
                Sign Up
              </Link>

              <Link to="/login" className={location.pathname === "/login" ? "active" : ""}>
                Log In
              </Link>
            </>
          )}
        </div>
        <div onClick={() => setShowSidebar(true)} className={showSidebar ? "sidebar-btn active" : "sidebar-btn"}>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
      </div>
      {showSidebar && <Sidebar close={closeSidebar} links={links} />}

      <Link to="/settings" className="settings_position">
        <FontAwesomeIcon icon={faCog} />
      </Link>
    </>
  );
}
