import React from 'react';


const DarkModeToggle = ({ darktheme, switchTheme }) => {

    return (
        <>
            <li className="mb-2">
                <a
                    className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between pointer"
                    onClick={switchTheme}
                >
                    <span className="">
                        <i
                            className={`bi ${darktheme === 'dark' ? 'bi-sun' : 'bi-moon'}`}
                        /> {darktheme === 'dark' ? 'Light Mode' : 'Dark Mode'}
                    </span>

                </a>
            </li>
        </>
    );
}

export default DarkModeToggle;