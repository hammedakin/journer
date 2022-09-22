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
                            <i className="bi bi-list h5 sec-bold pry-bold-text p-2 py-2 br-sm" />

                        </a>
                      

                    </div>
                    <div className="d-flex">
                        <a className="navbar-brand px-1 py-0 me-2 d-md-none d-block" onClick={openNav} >
                            <i className="bi bi-person-circle h5 sec-bold pry-bold-text p-2 py-2 br-sm" />

                        </a>
                    </div>

                </div>
            </nav>


        </>
    );
}

export default TopNav;