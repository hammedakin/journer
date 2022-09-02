import React from 'react';
import './Nav.css'
import SideNav from './SideNav';
import TopNav from './TopNav';


const Nav = ({theme}) => {

    return (
        <>
            <div className="main-nav-container">
                <TopNav theme={theme} />
                <SideNav />
            </div>
        </>
    );
}

export default Nav;