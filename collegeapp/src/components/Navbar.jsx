import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { useState } from "react";
import Sidebar from "./Sidebar";

import { faHome, faList, faCog } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  let navigate = useNavigate();
  let user = localStorage.getItem("user");
  let logout = () => {
    localStorage.removeItem("user");
    alert("you have been logged out");
    navigate("/signup");
  };
  //
  //
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
      name: "Settings",
      path: "/settings",
      icon: faCog,
    },
    // {
    //   name: "Signup",
    //   path: "/signup",
    // },
    // {
    //   name: "Login",
    //   path: "/login",
    // },
  ];

  function closeSidebar() {
    setShowSidebar(false);
  }
  return (
    <>
      <div className="Navbar container">
        <Link to="/" className="logo">
          A<span>nurag</span>Kaul
        </Link>
        <div className="Nav-links">
          {links.map((link) => (
            <Link className={location.pathname === link.path ? "active" : ""} to={link.path} key={link.name}>
              {link.name}
            </Link>
          ))}
          {user ? (
            <Link to="/signup" onClick={logout} className={location.pathname === "/signup" ? "active" : ""}>
              Logout
            </Link>
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
    </>
  );
}
