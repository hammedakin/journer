import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const DeleteModal = ({ children, name, content, Fn, noteId }) => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('token'));
    const [sending, setsending] = useState(false);

    let navigate = useNavigate()
    const [showremove, setShowremove] = useState(false);
    const handleCloseremove = () => setShowremove(false);
    const handleShowremove = () => setShowremove(true);

    //   Delete Note Function
    //   Delete Note Function
    function DeleteNote(e) {
        e.preventDefault();
        setsending(true);
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios
            .delete(`${endpoint}/note/${noteId}`, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setsending(false);
                } else {
                    setsending(false);
                    toast.success(res.data.msg);
                    navigate('/')
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
    //   Delete Note Function
    //   Delete Note Function

    return (
        <>

            <span onClick={e => handleShowremove()}>
                {children}
            </span>
            <div className="delete-modal">

                <Modal
                    show={showremove}
                    onHide={handleCloseremove}
                    size="sm"

                >
                    <div className="modal-header d-flex justify-content-center">
                        <p className="heading m-0 fw-bolder">Confirm</p>
                    </div>
                    <Modal.Body style={{ backgroundColor: "transparent!important" }}>
                        <div className="text-center">

                            <i className="fas fa-times fa-4x animated rotateIn text-danger"></i>
                            <p className="heading">{content}</p>

                        </div>
                    </Modal.Body>
                    <div className="modal-footer justify-content-center">
                        {sending ?
                            <i className="bx bx-loader bx-spin bx-sm text-danger" />
                            :
                            <>
                                <a type="button" className="btn btn-outline-danger waves-effect"
                                    onClick={e => handleCloseremove()}
                                >No</a>
                                <a href="" className="btn btn-danger waves-effect "
                                    onClick={e => DeleteNote(e)}
                                >Yes</a>
                            </>
                        }
                    </div>
                </Modal>
            </div>
        </>
    );
}

export default DeleteModal;