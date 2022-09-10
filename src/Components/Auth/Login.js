import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify'
import { setData } from '../Global/LocalStorage';

const Login = () => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [sending, setsending] = useState(false);
    let navigate = useNavigate()

    // Form Fields
    const [form, setform] = useState({});
    function handleChange(e) {
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
    }
    // Form Fields


    //   Login Function
    //   Login Function
    function register(e) {
        e.preventDefault();
        if (form.email && form.pword) {
            setsending(true);
            const data = {
                email: form.email,
                password: form.pword,
            }
            axios
                .post(`${endpoint}/auth/login`, data)
                .then((res) => {
                    if (res.data.success === false) {
                        toast.warn(res.data.msg);
                        setsending(false);
                    } else {
                        setsending(false);
                        setData('usertoken', res.data.token)
                        setData('name', res.data.name)
                        navigate("/")
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



    // Password Show Function 
    const [eye, seteye] = useState(false);

    function myInput() {
        var x = document.getElementById("security");
        if (x.type === "password") {
            x.type = "text";
        } else {
            x.type = "password";
        }
        seteye(!eye)
    }
    // Password Show Function

    return (
        <>
            <div className="auth">
                <div className="container">
                    <div className="col-md-8 mx-auto">
                        <div className="container py-4 border br-md">
                            <div className="my-2 text-center text-sm-left">
                                <h3>
                                    Login
                                </h3>
                                <p>
                                    Login an account to continue your journey.
                                </p>
                            </div>


                            <form >
                                <div className="row justify-content-center text-left mt-5">

                                    <div className="col-md-10  ">
                                        <label className="mb-0"> Email:</label>
                                        <div className="input-group">
                                            <input
                                                type="email"
                                                className=" input-style input-line"
                                                name="email"
                                                placeholder="example@example.com"
                                                onChange={handleChange}
                                                required
                                                autoComplete="false"
                                            />
                                        </div>
                                    </div>

                                    <div className="col-md-10  ">
                                        <label className="mb-0"> Password:</label>
                                        <div className="input-group">
                                            <input
                                                type="password"
                                                className=" input-style input-line pword-input"
                                                name="pword"
                                                placeholder="************"
                                                onChange={handleChange}
                                                required
                                                autoComplete="false"
                                                id="security"
                                            />

                                            <a
                                                className={`bi toggle-eye ${eye ? "bi-eye-slash" : "bi-eye"}`}
                                                id="togglePassword"
                                                onClick={myInput}
                                            >
                                            </a>
                                        </div>
                                    </div>

                                    <div className="col-md-10 mx-auto text-center">
                                        <div className="user-btn mb-4 mr-auto text-center">
                                            {sending ? (
                                                <>
                                                    <button type="submit" className="btn btn-pry m-0 w-100" disabled>
                                                        <i className="bx bx-loader bx-spin bx-sm white-text" />
                                                    </button>
                                                </>
                                            ) : (
                                                <>
                                                    <button
                                                        type="submit"
                                                        className="btn btn-pry m-0 w-100" p
                                                        onClick={(e) => register(e)}
                                                    >
                                                        Submit
                                                    </button>
                                                </>
                                            )}
                                        </div>
                                        <div className="text-center">
                                            <small>
                                                Forgot your password?
                                                <span className="pry-text pointer"> Reset it here.</span>
                                            </small>
                                            <hr className="w-75 mx-auto m-2" />
                                            <small>
                                                Don't have an account?
                                                <Link to="/register" className="pry-text"> Sign Up</Link>

                                            </small>
                                        </div>
                                    </div>
                                </div>
                            </form>

                        </div>
                    </div>
                </div>
            </div >
            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                theme="dark"
                className="small"
                hideProgressBar={true}
            // transition="slide"

            />
        </>
    );
}

export default Login;