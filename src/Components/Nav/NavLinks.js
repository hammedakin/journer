import React from 'react';
import { Link, NavLink, useNavigate } from "react-router-dom";
import { removeData } from '../Global/LocalStorage';
import { toast } from "react-toastify";
import { labels } from '../Note/data';
import Label from '../../Pages/Label';
import DarkModeToggle from './DarkModeToggle';
import { useState } from 'react';
import { useFetch } from '../Global/useFetch';

const NavLinks = ({ darktheme, switchTheme }) => {
    const { loading, data: allLabels, fetchData } = useFetch(`label`)
    const [showLabel, setshowLabel] = useState(false);

    let navigate = useNavigate()

    function logout() {
        removeData('name')
        removeData('usertoken')
        toast.success('logout successful, redirecting...')
        setTimeout(() => {
            navigate('/login')
        }, 1000);
    }


    const searchNote = (e) => {
        navigate(`/label/${e._id}`,
            { state: e }
        )
    }

    return (
        <>

            <ul className="list-unstyled px-2">
                <li className="mb-2 active">
                    <NavLink tag={Link}
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between" to={`/app`}>

                        <span className=""> <i className="bi bi-book"></i> Note </span>
                        <span className="pry-bold br-sm light-text py-0 px-2">
                            02
                        </span>
                    </NavLink>
                </li>
                <li className="mb-2 ">
                    <NavLink tag={Link}
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between" to={`/app`}>

                        <span className=""> <i className="bi bi-book"></i> Tasks </span>
                        <p className="pry-bold br-sm light-text m-0 p-0 px-1"
                            style={{ fontSize: '10px' }}
                        >
                            soon
                        </p>

                    </NavLink>
                </li>
                {allLabels.label?.length === 0 ? <></> :
                    <>
                        <li className="mb-2 ">
                            <a
                                className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between pointer"
                                onClick={() => setshowLabel(!showLabel)}
                            >
                                <span className=""> <i className="bi bi-tag"></i> Labels </span>
                                <i className={`bi  ${showLabel ? 'bi-chevron-down' : 'bi-chevron-right'}`} />

                            </a>
                        </li>
                        {showLabel &&
                            <>
                                {allLabels.label?.map((item, i) => {
                                    const { label, _id } = item
                                    return (
                                        <li className="mb-2 px-2" key={_id}>
                                            <a
                                                className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between pointer"
                                                onClick={(e) => searchNote(item)}

                                            >
                                                <span className="text-truncate"> <i className="bi bi-tag"></i> {label} </span>

                                            </a>
                                        </li>
                                    )
                                })}
                            </>
                        }
                    </>
                }
                <li className="mb-2">
                    <Label
                        fetchData={fetchData}
                    >
                        <span
                            className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between pointer"
                        >
                            <span className="text-truncate"> <i className="bi bi-tag"></i> Create Label </span>
                        </span>
                    </Label>
                </li>


                <DarkModeToggle
                    darktheme={darktheme}
                    switchTheme={switchTheme}
                />

                <li className="mb-2 ">
                    <div
                        className="pry-bold-text text-decoration-none d-block px-3 py-2 d-flex justify-content-between"
                    >
                        <span className="text-truncate pointer"
                            onClick={e => logout(e)}
                        > <i className="bi bi-tag"></i> Logout </span>
                    </div>
                </li>
            </ul>
        </>
    );
}

export default NavLinks;