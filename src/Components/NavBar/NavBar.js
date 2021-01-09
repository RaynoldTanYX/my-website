import React from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { NavBarData } from "./NavBarData";
import "./NavBar.css";

function NavBar() {
  const [showNavBar, setShowNavBar] = React.useState(false);
  const enableNavBar = () => setShowNavBar(true);
  const disableNavBar = () => setShowNavBar(false);
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    function handleResize() {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return (_) => {
      window.removeEventListener("resize", handleResize);
    };
  });

  if (dimensions.width < 960) {
    return (
      <>
        <div
          className={showNavBar ? "overlay" : "overlay disabled"}
          onClick={disableNavBar}
        />
        <div className="navbar">
          <Link to="#" className="menu-bars">
            <MenuIcon onClick={enableNavBar} />
          </Link>
          {/* <Link to='/' onClick={disableNavBar}> */}
          <a href="/" className="headerimage">
            <img
              src={require("../../images/logo512.png")}
              className="headerimage"
              alt="Logo"
            />
          </a>
          {/* </Link> */}
          {/* <h1 className='headertext'>Raynold Tan</h1> */}
        </div>
        <nav className={showNavBar ? "nav-menu active" : "nav-menu"}>
          <ul className="nav-menu-items">
            <li className="navbar-toggle">
              <Link to="#" className="menu-bars">
                <CloseIcon onClick={disableNavBar} />
              </Link>
            </li>
            {NavBarData.map((item, index) => {
              return (
                <li key={index} className={item.className}>
                  <Link to={item.path} onClick={disableNavBar}>
                    {item.icon}
                    <span style={{marginLeft: "10px"}}>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </>
    );
  } else {
    return (
      <>
        <div className="navbar">
          <a href="/" className="headerimage">
            <img
              src={require("../../images/logo512.png")}
              className="headerimage"
              alt="Logo"
            />
          </a>
          <ul className="nav-menu-items-wide">
            {NavBarData.map((item, index) => {
              return (
                <li key={index} className={item.className + "-wide"}>
                  <Link to={item.path} onClick={disableNavBar}>
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </>
    );
  }
}

export default NavBar;
