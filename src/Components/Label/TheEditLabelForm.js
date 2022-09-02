import React, { useState } from 'react';
import { toast } from 'react-toastify'
import { ClipLoader } from 'react-spinners';
import { axios } from "axios";

const TheEditLabelForm = ({ label, id, fetchData }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('token'));
    const [sending, setsending] = useState(false);
    const [deleting, setdeleting] = useState(false);
    const [thelabel, setthelabel] = useState(label);
    const [checkEdit, setcheckEdit] = useState(false);

    //   Create Label Function
    //   Create Label Function
    function labelEdit(e) {
        e.preventDefault();
        if (thelabel) {
            setsending(true);
            const data = {
                label: thelabel
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            axios
                .post(`${endpoint}/label/${id}`, data, { headers })
                .then((res) => {
                    if (res.data.success === false) {
                        toast.warn(res.data.msg);
                        setsending(false);
                    } else {
                        setsending(false);
                        toast.success(res.data.msg);
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
            toast.error("label can't be empty 🙁");
        }
    }
    //   Create Note Function
    //   Create Note Function



    //   Delete Label Function
    //   Delete Label Function
    function DeleteLabel(e) {
        e.preventDefault();
        setdeleting(true);
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios
            .delete(`${endpoint}/label/${id}`, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setdeleting(false);
                } else {
                    setdeleting(false);
                    toast.success(res.data.msg);
                    fetchData()
                }
            })
            .catch((error) => {
                if (error.response.data) {
                    setdeleting(false);
                    toast.error(error.response.data.msg);
                } else {
                    setdeleting(false);
                    toast.error('network error ❌');
                }
            });
    }
    //   Delete Label Function
    //   Delete Label Function



    return (
        <>
            <div className="d-flex align-items-center label-form py-2 px-2"
                onMouseEnter={e => setcheckEdit(true)}
                onMouseLeave={e => setcheckEdit(false)}
                key={id}
            >
                {checkEdit ?
                    <>
                        {deleting ?
                            <ClipLoader
                                className='dark-bold-border'
                                loading={deleting}
                                speedMultiplier="1.5"
                                size="18"
                            />
                            :
                            <i
                                className=' bi bi-trash3 dark-bold-text m-0'
                                onClick={e => DeleteLabel(e)}
                            />
                        }
                    </>
                    :
                    <i className=' bi bi-tag  dark-bold-text m-0' />
                }

                <input
                    type="text"
                    className="input-style h6 fw-light m-0 px-1"
                    name="label"
                    placeholder="Edit label"
                    onChange={(e) => setthelabel(e.target.value)}
                    required
                    maxLength="30"
                    value={thelabel}
                    autoComplete="off"
                />

                {checkEdit ?
                    <>
                        {sending ?
                            <ClipLoader
                                className='dark-bold-border'
                                loading={sending}
                                speedMultiplier="1.5"
                                size="18"
                            />
                            :
                            <i className=' bi bi-check2 h5 dark-bold-text m-0'
                                onClick={e => labelEdit(e)}
                            />
                        }
                    </> :
                    <i className=' bi bi-pencil dark-bold-text m-0'
                    />

                }
            </div>



        </>
    );
}

export default TheEditLabelForm;