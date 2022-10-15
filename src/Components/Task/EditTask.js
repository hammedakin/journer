import React, { useState } from 'react';
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import axios from 'axios';
import { formatDate, GetTime } from '../Global/GetDate';

const EditTask = ({ children, allTasksFn, taskId, data }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [sending, setsending] = useState(false);
    const [form, setform] = useState({
        task: data.task, date: formatDate(new Date(data.date)), time: data.time
    });

    const [showremove, setShowremove] = useState(false);
    const handleCloseremove = () => setShowremove(false);
    const handleShowremove = () => setShowremove(true);

    // Form Fields
    function handleChange(e) {
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
    }
    // Form Fields

    function createTask(e) {
        e.preventDefault();
        if (form.task) {
            setsending(true);
            const data = {
                task: form.task,
                date: form.date,
                time: form.time,
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            axios
                .patch(`${endpoint}/task/${taskId}`, data, { headers })
                .then((res) => {
                    if (res.data.success === false) {
                        toast.warn(res.data.msg);
                        setsending(false);
                    } else {
                        setsending(false);
                        toast.success(res.data.msg);
                        allTasksFn()
                        handleCloseremove()
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
        } else {
            setsending(false);
            toast.error("empty fields!");
        }
    }




    return (
        <>

            <div className='col pointer' onClick={e => handleShowremove()}>
                {children}
            </div>
            <Modal
                show={showremove}
                onHide={handleCloseremove}
                size="md"
                backdrop="static"
            // onExited={fetchData}

            >
                <Modal.Header closeButton>
                    <h6 className="font-weight-light ml-auto m-0">Edit Task</h6>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "transparent!important" }} className="px-0 pt-0" >

                    <section className="auth m-0 border py-2 br-sm">
                        <div className="container">
                            <form onSubmit={(e) => createTask(e)} autoComplete="false">
                                <div className="row justify-content-cente text-left">

                                    <div className="col-md-12 col-lg-12 ">
                                        {/* <label className="mb-0"> Task:</label> */}
                                        <div className="input-group">
                                            <textarea
                                                type="text"
                                                className=" input-style input-line"
                                                name="task"
                                                placeholder="Enter task"
                                                onChange={handleChange}
                                                value={form.task}
                                                required
                                                autoComplete="false"
                                            ></textarea>
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        {/* <label className="mb-0"> Date:</label> */}
                                        <div className="input-group">
                                            <input
                                                type="date"
                                                className=" input-style input-line"
                                                name="date"
                                                onChange={handleChange}
                                                value={form.date}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-6 ">
                                        {/* <label className="mb-0"> Time:</label> */}
                                        <div className="input-group">
                                            <input
                                                type="time"
                                                className=" input-style input-line"
                                                name="time"
                                                onChange={handleChange}
                                                value={form.time}
                                            />
                                        </div>
                                    </div>
                                    <div className="col-12 text-center">
                                        {sending ?
                                            <button disabled className="btn btn-pry">
                                                Updating...
                                            </button> :
                                            <button className="btn btn-pry">
                                                Update
                                            </button>


                                        }
                                    </div>
                                </div>
                            </form>
                        </div>
                    </section>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default EditTask;