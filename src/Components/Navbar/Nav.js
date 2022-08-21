import React from 'react';
import './Nav.css'
import SideNav from './SideNav';
import TopNav from './TopNav';
const Nav = () => {

    return (
        <>
            <div className="main-nav-container">
                <TopNav />
                <SideNav />
            </div>
        </>
    );
}

export default Nav;