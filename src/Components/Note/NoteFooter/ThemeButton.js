import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { allThemes } from "../data";
import { ClipLoader } from "react-spinners";



const ThemeButton = ({ noteId, theme, setnoteTheme }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));

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
                    setnoteTheme(res.data.note.theme.color)
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

                        <div className="row text-center">

                            {sending ?
                                <div className="text-center py-5">

                                    <ClipLoader className='pry-bold-border'
                                        loading={sending} speedMultiplier="1.2" size="50" />
                                </div>
                                :
                                <>
                                    {allThemes.map(({ name, color }, i) => {
                                        return (
                                            <div className="col-md-4 col-6 mb-4" key={name}>
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

                                                    <div className={`${color} br-xlg theme-icon fit-content`}>
                                                        {name == istheme?.name ?
                                                            <i
                                                                className="bi bx m-0 bx-sm p-2 bi-check2"
                                                            />
                                                            :
                                                            <>
                                                                {name == 'None' ?
                                                                    <i
                                                                        className="bi bx m-0 bx-sm p-2 bi-dash-lg border br-xlg"
                                                                    />
                                                                    :

                                                                    <i
                                                                        className="bi bx m-0 bx-sm p-2 bi-palette"
                                                                    />
                                                                }
                                                            </>
                                                        }

                                                    </div>
                                                </label>
                                            </div>
                                        )
                                    })
                                    }
                                </>
                            }

                        </div>


                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default ThemeButton;