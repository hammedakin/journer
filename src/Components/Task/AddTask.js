import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify'
import { formatDate, GetTime } from '../Global/GetDate';
import { Loading } from '../Global/Loader';

const AddTask = ({ allTasksFn }) => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [sending, setsending] = useState(false);
    const [form, setform] = useState({ task: '', date: formatDate(new Date()), time: GetTime(new Date()) });
    let navigate = useNavigate()

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
                .post(`${endpoint}/task`, data, { headers })
                .then((res) => {
                    if (res.data.success === false) {
                        toast.warn(res.data.msg);
                        setsending(false);
                    } else {
                        setsending(false);
                        toast.success(res.data.msg);
                        allTasksFn()
                        setform({ task: '', date: formatDate(new Date()), time: GetTime(new Date()) })
                        navigate('/task/#uncompleted')
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
            {sending && <Loading load={sending} />}
            <section className="auth m-0 border py-2 br-sm">
                <div className="container">
                    <form onSubmit={(e) => createTask(e)} autoComplete="false">
                        <div className="row justify-content-cente text-left">

                            <div className="col-md-6 col-lg-8 ">
                                {/* <label className="mb-0"> Task:</label> */}
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className=" input-style input-line"
                                        name="task"
                                        placeholder="Enter task"
                                        onChange={handleChange}
                                        value={form.task}
                                        required
                                        autoComplete="false"
                                    />
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-3 col-6 ">
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
                            <div className="col-lg-2 col-md-3 col-6 ">
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

                        </div>
                    </form>
                </div>
            </section>

        </>
    );
}

export default AddTask;