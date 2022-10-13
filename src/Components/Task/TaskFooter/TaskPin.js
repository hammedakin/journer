import axios from 'axios';
import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const TaskPin = ({ taskId, pin, allTasksFn }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [load, setload] = useState(false);
    const [pinned, setpinned] = useState(pin);

    
    function editPin(e) {
        e.preventDefault();
        setload(true);
        const data = {
            pinned: !pinned
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios
            .patch(`${endpoint}/task/pin/${taskId}`, data, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setload(false);
                } else {
                    setload(false);
                    setpinned(res.data.task.pinned)
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
                        onClick={e => editPin(e)}
                        className={` ${pinned ? ' bi-star-fill pry-text' : ' bi-star'} bi ms-2`}
                    />
            }
        </>
    );
}

export default TaskPin;