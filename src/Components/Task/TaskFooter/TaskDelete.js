import axios from 'axios';
import React, { useState } from 'react';
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
            'Authorization': `Bearer ${token}`
        }
        axios
            .delete(`${endpoint}/task/${taskId}`, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setload(false);
                } else {
                    setload(false);
                    toast.success(res.data.msg);
                    allTasksFn()
                }
            }).catch((error) => {
                if (error.response.data) {
                    setload(false);
                    toast.error(error.response.data.msg);
                } else {
                    setload(false);
                    toast.error('network error ❌');
                }
            })
    }

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
                        onClick={e => Delete(e)}
                        className='bi bi-trash3 red-bold-text ms-2'
                    />
            }
        </>
    );
}

export default TaskDelete;