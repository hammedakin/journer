import axios from 'axios';
import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const TaskDelete = ({ taskId, pin, allTasksFn }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [load, setload] = useState(false);


    function Delete(e) {
        e.preventDefault();
        setload(true);
        const headers = {
            'Authorization': `Bearer ${ token }`
        };
        axios
            .delete(`${ endpoint }/task/${ taskId }`, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setload(false);
                } else {
                    toast.success(res.data.msg);
                    allTasksFn();
                    handleClose();
                    setload(false);

                }
            }).catch((error) => {
                if (error.response.data) {
                    setload(false);
                    toast.error(error.response.data.msg);
                } else {
                    setload(false);
                    toast.error('network error ❌');
                }
            });
    }


    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            {
                load ?
                    <i
                        className='bi px-2'
                    >
                        <ClipLoader className='loader-pry-border'
                            loading={load} speedMultiplier="1.2" size="15" />
                    </i>
                    :
                    <i
                        onClick={e => handleShow(e)}
                        className='bi bi-trash3 red-bold-text ms-2'
                    />
            }
            <Modal
                show={show}
                onHide={handleClose}
                size="sm"
            >
                <div className="modal-header d-flex justify-content-center">
                    <p className="heading m-0 fw-bolder">Confirm</p>
                </div>
                <Modal.Body style={{ backgroundColor: "transparent!important" }}>
                    <div className="text-center">
                        <i className="bi bi-box-arrow-right fa-4x animated rotateIn text-danger"></i>
                        <p className="heading">Are you sure you want delete?</p>
                    </div>
                </Modal.Body>
                <div className="modal-footer justify-content-center">
                    {load ?
                        <i className="bx bx-loader bx-spin bx-sm text-danger" />
                        :
                        <>
                            <button type="button" className="btn btn-outline-danger waves-effect"
                                onClick={e => handleClose()}
                            >No</button>
                            <button href="" className="btn btn-danger waves-effect "
                                onClick={e => Delete(e)}
                            >Yes</button>
                        </>
                    }
                </div>
            </Modal>
        </>
    );
};

export default TaskDelete;