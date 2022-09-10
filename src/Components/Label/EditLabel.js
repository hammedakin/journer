import React, { useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import TheEditLabelForm from './TheEditLabelForm';


const EditLabel = ({ loading, data, fetchData }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [deleting, setdeleting] = useState(false);

    const [sending, setsending] = useState(false);

    //  Edit Label Function
    //  Edit Label Function
    function labelEdit(e, id, newLabel) {
        e.preventDefault();
        if (newLabel) {
            setsending(true);
            const data = {
                label: newLabel
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            axios
                .patch(`${endpoint}/label/${id}`, data, { headers })
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
    //  Edit Label Function
    //  Edit Label Function


    //   Delete Label Function
    //   Delete Label Function
    function DeleteLabel(id) {
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
            {loading ?
                <div className="py-5 text-center">
                    <ClipLoader
                        className='dark-bold-border'
                        loading={loading}
                        speedMultiplier="1.5"
                        size="25"
                    /> Loading...
                </div>
                :
                <>
                    {
                        data.label?.map((item, i) => {
                            const { label, _id } = item
                            return (
                                <TheEditLabelForm
                                    label={label}
                                    id={_id}
                                    key={_id}
                                    fetchData={fetchData}
                                    DeleteLabel={DeleteLabel}
                                    deleting={deleting}

                                    sending={sending}
                                    labelEdit={labelEdit}
                                />
                            )
                        })
                    }
                </>
            }
        </>
    );
}

export default EditLabel;