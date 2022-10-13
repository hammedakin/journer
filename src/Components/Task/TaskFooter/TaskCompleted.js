import axios from 'axios';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ClipLoader } from 'react-spinners';
import { toast } from 'react-toastify';

const TaskCompeleted = ({ taskId, done, allTasksFn }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [load, setload] = useState(false);
    const [completed, setcompleted] = useState(done);


    function editStatus(e) {
        e.preventDefault();
        setload(true);
        const data = {
            completed: !completed
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios
            .patch(`${endpoint}/task/completed/${taskId}`, data, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setload(false);
                } else {
                    setload(false);
                    setcompleted(res.data.task.completed)
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
                        className='bi ms-2'
                    >
                        <ClipLoader className='loader-pry-border'
                            loading={load} speedMultiplier="1.2" size="15" />
                    </i>
                    :
                    <i
                        onClick={e => editStatus(e)}
                        className={` ${completed ? ' bi-check2 pry-text' : ' bi-circle'} bi ms-2`}
                    />
            }
            {/* <i className='bi bi-circle ms-2' /> */}
        </>
    );
}

export default TaskCompeleted;