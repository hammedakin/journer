import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeData } from '../Global/LocalStorage';
import { toast } from "react-toastify";

const NavbarLink = () => {
    let navigate = useNavigate()

    const link = [
        {
            name: 'Revising'
        },
        {
            name: 'Testing'
        },
        {
            name: 'Revising and Testing'
        },
        {
            name: 'Query'
        },
        {
            name: 'Okay then'
        },
        {
            name: 'RevisWe go againing'
        },
    ]


    function logout() {
        removeData('name')
        removeData('token')
        toast.success('logout successful, redirecting...')
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }

    return (
        <>

            <ul className="list-unstyled px-2">
                <li className="mb-2 active">
                    <NavLink tag={Link}
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between" to={`/`}>

                        <span className=""> <i className="bi bi-book"></i> Note </span>
                        <span className="pry-bold br-sm text-white py-0 px-2">
                            02
                        </span>
                    </NavLink>
                </li>
                <li className="mb-2 ">
                    <NavLink tag={Link}
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between" to={`/`}>

                        <span className=""> <i className="bi bi-book"></i> Tasks </span>
                        <span className="pry-bold br-sm text-white py-0 px-2">
                            02
                        </span>
                    </NavLink>
                </li>
                {link.map(({ name }, i) => {
                    return (
                        <li className="mb-2 " key={i}>
                            <a
                                href="#!"
                                className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between "
                            >
                                <span className="text-truncate"> <i className="bi bi-tag"></i> {name} </span>
                                <span className="pry-bold br-sm text-white py-0 px-2">
                                    01
                                </span>
                            </a>
                        </li>
                    )
                })}

                <li className="mb-2 ">
                    <NavLink tag={Link}
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between" to={`/settings`}>

                        <span className=""> <i className="bi bi-book"></i> Settings </span>
                        <span className="pry-bold br-sm text-white py-0 px-2">
                            02
                        </span>
                    </NavLink>
                </li>
                <li className="mb-2 ">
                    <a
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between">

                        <span className=""> <i className="bi bi-moon-fill"></i> Dark Mode </span>
                  
                    </a>
                </li>
                <li className="mb-2 ">
                    <div
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between"
                    >
                        <span className="text-truncate pointer"
                        onClick={e=>logout(e)}
                        > <i className="bi bi-tag"></i> Logout </span>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default NavbarLink;