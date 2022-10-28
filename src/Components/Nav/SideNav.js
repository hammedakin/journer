import React, { useState, useEffect } from 'react';
import NavLinks from './NavLinks';


const SideNav = ({ darktheme, switchTheme }) => {


  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
    }
    window.addEventListener('resize', handleWindowResize);
    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function getWindowSize() {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  }
  const closeNav = (e) => {
    document.getElementById("mySidenav").style.width = "0";
  };
  if (document.getElementById("mySidenav")) {

    if (window.innerWidth > 767) {
      document.getElementById("mySidenav").style.width = "250px";
    } else {
      document.getElementById("mySidenav").style.width = "0";
    }
  }

  return (
    <>
      <nav className="">
        <div id="mySidenav" className="sidenav">
          <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
            <h1 className="fs-4">

              <span className="pry-text ms-3">Journer </span>
            </h1>
            <span className=" d-md-none d-block close-btn px-1 py-0 text-white"
              onClick={closeNav}>
              <i className="bi bi-x pry-bold-text h1 sec-bold br-sm"></i>
            </span>
          </div>

          <NavLinks
            darktheme={darktheme}
            switchTheme={switchTheme}
          />

          <hr style={{ backgroundColor: "whitesmoke" }} className="m-3" />
        </div>
      </nav>
    </>
  );
};

export default SideNav;
