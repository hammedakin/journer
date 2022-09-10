import React, { useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';

const AddLabel = ({ fetchData }) => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('token'));
    const [sending, setsending] = useState(false);
    const [label, setlabel] = useState('');

    let max = [...label];

    //   Create Note Function
    //   Create Note Function
    function labelCreate(e) {
        e.preventDefault();
        if (label) {
            setsending(true);
            const data = {
                label: label
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            axios
                .post(`${endpoint}/label`, data, { headers })
                .then((res) => {
                    if (res.data.success === false) {
                        toast.warn(res.data.msg);
                        setsending(false);
                    } else {
                        setsending(false);
                        toast.success(res.data.msg);
                        setlabel('')
                        fetchData()
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

    return (
        <>

            <form>
                {max.length === 30 ?
                    <p className="m-0 text-danger small text-center ps-4">Enter a shorter label.</p>
                    : <></>}
                <div className="d-flex align-items-center label-add-form py-2 px-2">
                    {label ?
                        <i
                            className=' bi bi-x h5 dark-bold-text m-0'
                            onClick={e => setlabel('')}
                        /> :
                        <i className=' bi bi-plus h5 dark-bold-text m-0' />
                    }
                    <input
                        type="text"
                        className="input-style h6 fw-light m-0 px-1"
                        name="label"
                        placeholder="Create new label"
                        onChange={(e) => setlabel(e.target.value)}
                        required
                        maxLength="30"
                        value={label}
                        autoComplete="off"
                    />

                    {label &&
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
                                    onClick={(e) => labelCreate(e)}
                                />
                            }
                        </>
                    }

                </div>

            </form>



        </>
    );
}

export default AddLabel;