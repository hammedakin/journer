import React from 'react';
import './Nav.css'
import SideNav from './SideNav';
import TopNav from './TopNav';


const Nav = ({theme, darktheme, switchTheme}) => {

    return (
        <>
            <div className="main-nav-container">
                <TopNav theme={theme} />
                <SideNav
                    darktheme={darktheme}
                    switchTheme={switchTheme}
                />
            </div>
        </>
    );
}

export default Nav;