import React from 'react';
import NavLink from './NavLinks';

const SideNav = ({darktheme, switchTheme }) => {
    function closeNav() {
        var sidebar = document.getElementById('side_nav');
        sidebar.className = "sidebar";
    }
    return ( 
        <>
            <div className="sidebar" id="side_nav">
                <div className="header-box px-2 pt-3 pb-4 d-flex justify-content-between">
                    <h1 className="fs-4">
                        <span className="bg-white pry-text rounded shadow-sm px-2 me-2">
                            CL
                        </span>
                        <span className="pry-text">Learning</span>
                    </h1>
                    <span className=" d-md-none d-block close-btn px-1 py-0 text-white"
                        onClick={closeNav}>
                        <i className="bi bi-x pry-text h1 sec-bold br-sm"></i>
                    </span>
                </div>
               <NavLink
                    darktheme={darktheme}
                    switchTheme={switchTheme}
               />
            </div>
        </>
     );
}
 
export default SideNav;