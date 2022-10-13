import React from "react";
import "./Nav.css";
import SideNav from "./SideNav";



const Navbar = ({ theme, darktheme, pagename, switchTheme }) => {

  // Open Navbar 
  const openNav = (e) => {
    document.getElementById("mySidenav").style.width = "300px";
  };
  // Open Navbar 

  return (
    <>
      <div className="">
        <nav
          className={`navbar bottom-border navbar-expand-sm navbar-light fixed-top py-3 shadow-none ${theme ? `d-none` : "navbar-light top-nav"} `}
          id="navbar main"
        >

          <div className="container-fluid">
            <div className="d-flex align-items-center">
              <a className="navbar-brand px-1 py-0 me-2 d-md-none d-block" onClick={openNav} >
                <i className="bi bi-list h5 sec-bold pry-bold-text p-2 py-2 br-sm" />

              </a>
              <h5 className="pry-bold-text font-weight-light pagename container">
                {pagename}
              </h5>
            </div>
            <div className="d-flex">
              <a className="navbar-brand px-1 py-0 me-2 d-block" href="#">
                <i className="bi bi-person-circle h5 sec-bold pry-bold-text p-2 py-2 br-sm" />

              </a>
            </div>

          </div>
        </nav>
        <SideNav
          darktheme={darktheme}
          switchTheme={switchTheme}
        />
      </div>

    </>
  );
};

export default Navbar;
