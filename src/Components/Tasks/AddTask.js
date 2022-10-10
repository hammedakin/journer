import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import { setData } from '../Global/LocalStorage';
import { formatDate, GetDate, GetTime } from '../Global/GetDate';

const AddTask = () => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [sending, setsending] = useState(false);
    const [form, setform] = useState({ task: '', date: formatDate(new Date()), time: GetTime(new Date()) });
    const [eye, seteye] = useState(false);

    // Form Fields
    function handleChange(e) {
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
    }
    // Form Fields


    //   Login Function
    //   Login Function
    function login(e) {
        e.preventDefault();
        if (form.email && form.pword) {
            setsending(true);
            const data = {
                email: form.email,
                password: form.pword,
            }
            axios
                .post(`${endpoint}/task/login`, data)
                .then((res) => {
                    if (res.data.success === false) {
                        toast.warn(res.data.msg);
                        setsending(false);
                    } else {
                        setsending(false);
                        setData('usertoken', res.data.token)
                        setData('name', res.data.name)
                        // navigate('/note')
                        setTimeout(() => {
                            toast.success(res.data.msg);
                        }, 10);
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
    //   Login Function
    //   Login Function

    return (
        <>
            <section className="auth">
                <div className="container">
               
                    <form onSubmit={(e) => login(e)} autoComplete="false">
                        <div className="row justify-content-cente text-left">

                            <div className="col-md-6  ">
                                <label className="mb-0"> Task:</label>
                                <div className="input-group">
                                    <input
                                        type="text"
                                        className=" input-style input-line"
                                        name="task"
                                        placeholder="enter task"
                                        onChange={handleChange}
                                        value={form.task}
                                        required
                                        autoComplete="false"
                                    />
                                </div>
                            </div>
                            <div className="col-md-3  ">
                                <label className="mb-0"> Date:</label>
                                <div className="input-group">
                                    <input
                                        type="date"
                                        className=" input-style input-line"
                                        name="date"
                                        onChange={handleChange}
                                        value={form.date}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="col-md-3  ">
                                <label className="mb-0"> Time:</label>
                                <div className="input-group">
                                    <input
                                        type="time"
                                        className=" input-style input-line"
                                        name="time"
                                        onChange={handleChange}
                                        value={form.time}
                                        required
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