import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeData } from '../Global/LocalStorage';
import { toast } from "react-toastify";
import { labels } from '../Note/data';
import Label from '../../Pages/Label';
import DarkModeToggle from './DarkModeToggle';

const NavbarLink = ({darktheme, switchTheme }) => {
    let navigate = useNavigate()

 

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
                        <span className="pry-bold br-sm light-text py-0 px-2">
                            02
                        </span>
                    </NavLink>
                </li>
                <li className="mb-2 ">
                    <NavLink tag={Link}
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between" to={`/`}>

                        <span className=""> <i className="bi bi-book"></i> Tasks </span>
                        <p className="pry-bold br-sm light-text m-0 p-0 px-1"
                        style={{fontSize:'10px'}}
                        >
                            soon
                        </p>
                        {/* <span className="pry-bold br-sm light-text py-0 px-2">
                            02
                        </span> */}
                    </NavLink>
                </li>
                {/* {labels.map(({ name }, i) => {
                    return (
                        <li className="mb-2 " key={i}>
                            <a
                                href="#!"
                                className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between "
                            >
                                <span className="text-truncate"> <i className="bi bi-tag"></i> {name} </span>
                                <span className="pry-bold br-sm light-text py-0 px-2">
                                    01
                                </span>
                            </a>
                        </li>
                    )
                })} */}
                <li className="mb-2">
                    <Label>
                    <span
                        // href=""
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between pointer"
                    >
                        <span className="text-truncate"> <i className="bi bi-tag"></i> Create Label </span>
                    </span>
                    </Label>
                </li>


                {/* <li className="mb-2 ">
                    <NavLink tag={Link}
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between" to={`/settings`}>

                        <span className=""> <i className="bi bi-gear"></i> Settings </span>
                    </NavLink>
                </li> */}

                <DarkModeToggle
                    darktheme={darktheme}
                    switchTheme={switchTheme}
                />
              
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