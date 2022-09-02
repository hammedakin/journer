import React from 'react';
import { Link } from 'react-router-dom';

const TopNav = ({theme}) => {

    function openNav() {
        var sidebar = document.getElementById('side_nav');
        if (sidebar.className === "active sidebar") {
            sidebar.className = "sidebar"
        } else {
            sidebar.className = "active sidebar"
        }
    }

    return (
        <>
            <nav className={`navbar navbar-expand-md fixed-top py-3 shadow-none ${theme ? `d-none` : "navbar-light top-nav"} `}>
                <div className="container-fluid">
                    <div className="d-flex align-items-center">
                        <a className="navbar-brand px-1 py-0 me-2 d-md-none d-block" onClick={openNav} >
                            <i className="bi bi-list"></i>
                            =
                        </a>
                        <Link to="" className="navbar-brand px-1 py-0 me-2">
                            NAVBAR
                        </Link>

                    </div>
                    <div className="d-flex">
                    <i className='bx bi bi-person-circle pry-text h4 m-0 me-3' />
                    
                    </div>
                </div>
            </nav>
        </>
    );
}

export default TopNav;