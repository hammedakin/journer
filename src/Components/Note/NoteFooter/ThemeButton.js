import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { allThemes } from "../data";
import { ClipLoader } from "react-spinners";



const ThemeButton = ({ noteId, theme }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('token'));

    const [sending, setsending] = useState();

    const [showremove, setShowremove] = useState(false);
    const handleCloseremove = () => setShowremove(false);
    const handleShowremove = () => setShowremove(true);

    const [istheme, setistheme] = useState(theme);


    //   Edit Theme Function
    //   Edit Theme Function
    function editTheme(e) {
        let colorIndex = allThemes.findIndex(x => x.color === e)
        let newTheme = allThemes[colorIndex]
        setistheme(newTheme)
        setsending(true);
        const data = {
            theme: newTheme
        }

        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios
            .patch(`${endpoint}/note/theme/${noteId}`, data, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setsending(false);
                } else {
                    setsending(false);
                    setistheme(res.data.note.theme)
                }
            })
            .catch((error) => {
                if (error.response.data) {
                    setsending(false);
                    toast.error(error.response.data.msg);
                } else {
                    setsending(false);
                    toast.error('network error ❌');
                }
            });
    }
    //   Edit Theme Function
    //   Edit Theme Function


    return (

        <>
            <span onClick={e => handleShowremove()}>
                <i className='bi bi-palette h5 sec-bold p-2 br-sm me-2 pry-bold-text' />
            </span>

            <Modal
                show={showremove}
                onHide={handleCloseremove}
                size="sm"
            >
                <Modal.Header closeButton>
                    <h6 className="font-weight-light ml-auto m-0">Themes</h6>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "transparent!important" }}>
                    <div className="">
                        {/* {allThemes.map(({ name, color }, i) => {
                            return (
                                <div className="col-md-12 pry-bold-text font-weight-bold p-1 " key={color}>
                                    <div className="mb-2 row justify-content-between">
                                        <div className="col">
                                            <label
                                                className=""
                                                for={name}
                                            >
                                                <span className="">
                                                    {name}
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-2">
                                            {
                                                sending ?
                                                    <ClipLoader color={"#023676"} loading={sending} speedMultiplier="1.2" size="20" />
                                                    :
                                                    <input
                                                        type="radio"
                                                        className="custom-control-input"
                                                        name="groupOfDefaultRadios"
                                                        id={name}
                                                        value={color}
                                                        onChange={e => editTheme(e.target.value)}
                                                        checked={name == istheme?.name ? true : false}
                                                    />
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })} */}
                        <div className="row text-center">


                            {allThemes.map(({ name, color }, i) => {
                                return (
                                    <div className="col-md-4 col-6 mb-4">
                                        <label class="custom-radio">
                                            <input
                                                type="radio"
                                                className="theme-radio"
                                                name="groupOfDefaultRadios"
                                                id={name}
                                                value={color}
                                                onChange={e => editTheme(e.target.value)}
                                                checked={name == istheme?.name ? true : false}
                                            />
                                            {
                                                sending ?

                                                    <ClipLoader color={"#023676"} loading={sending} speedMultiplier="1.2" size="20" />
                                                    :
                                                    <div className={`${color} br-xlg theme-icon fit-content`}>
                                                        <i
                                                            className={`${name == istheme?.name ? 'bi-check2' : 'bi-palette'}
                                                             bi bx m-0 bx-sm p-2`}
                                                        />
                                                    </div>
                                            }
                                        </label>
                                    </div>

                                )
                            })}
                        </div>

                        {/* <i
                            className={`${color == '' ? 'bi-slash-circle'
                                :
                                <>
                                    {
                                        name == istheme?.name ? 'bi-check2' : "bi-palette"
                                    }
                                </>}
                               bi bx m-0 bx-sm p-2`}
                        /> */}
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ThemeButton;