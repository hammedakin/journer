import React from 'react';
import { Link } from "react-router-dom";
import logo from '../assets/journer1.png';



const Navbar = () => {

    let navLink = [
        // { title: "About Us", to: "about" },
        { title: "Features", to: "/#features" },
        // { title: "FAQs", to: "#" },
    ];

    return (
        <header className='homenav '>

            <nav className="navbar shadow-none navbar-expand-lg fixed-to light-bg " id="navbar">
                <div className="container">
                    <Link to="/" className="mt-2 mb-3 dark-text fit-content">
                        <img src={logo} alt="Logo" />


                    </Link>

                    <a
                        className="navbar-toggler"
                        type="button"
                        data-mdb-toggle="collapse"
                        data-mdb-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon toggler">
                            <i className="bi bi-list-nested h3 dark-text " />
                        </span>
                    </a>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto text-center animated fadeIn align-items-center">
                            {navLink.map(({ title, to }, i) => {
                                return (
                                    <li className="nav-item" key={i}>
                                        <Link ClassName="active" to={`${ to }`}>
                                            {title}
                                        </Link>
                                    </li>
                                );
                            })}

                            {localStorage.getItem('usertoken') === null ? (
                                <>
                                    <li className=" btn-contact">
                                        <Link to="/login" ClassName=" dark-text">
                                            <button className="btn ">
                                                Login
                                            </button>
                                        </Link>
                                    </li>
                                    <li className=" btn-contact">
                                        <Link to="/register">
                                            <button className="btn dark-bg light-text m-2 br-sm">
                                                Get Started
                                            </button>
                                        </Link>
                                    </li>
                                </>
                            ) : (
                                <>

                                    <li className=" btn-contact">
                                        <Link to="/note" ClassName=" dark-text">
                                            <button className="btn dark-bg light-text m-2 br-sm">
                                                Dashboard
                                            </button>
                                        </Link>
                                    </li>

                                    <li className=" btn-contact">
                                        <button
                                            // onClick={HandleLogout} 
                                            className="btn br-sm">
                                            <i className="bx bx-log-out-circle me-2" />
                                            Logout
                                        </button>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;