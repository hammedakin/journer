import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from 'axios';
import { useFetch } from '../../Global/useFetch';
import { ClipLoader } from 'react-spinners';


const ChangePin = ({ noteId }) => {
    const { loading, data, fetchData } = useFetch(`note/${noteId}`)

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('token'));
    const [sending, setsending] = useState(false);
    const [pinned, setpinned] = useState('');

    useEffect(() => {
        if (!loading) {
            setpinned(data.note?.pinned)
        }
    }, [data]);

    function toPin(e) {
        // e.preventDefault();
        setpinned(!pinned)
        // console.log(pinned);
        editNote(e)
    }
    // console.log(data.note?.pinned);

    //   Edit Pin Function
    //   Edit Pin Function
    function editNote(e) {
        e.preventDefault();
        setsending(true);
        const data = {
            pinned: !pinned
        }
        console.log(data);
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios
            .patch(`${endpoint}/note/pin/${noteId}`, data, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setsending(false);
                } else {
                    setsending(false);
                    fetchData()
                    // toast.success(res.data.msg);
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
    }
    //   Edit Pin Function
    //   Edit Pin Function
    // console.log(pinned);

    return (
        <>
            {
                sending ?
                <i
                            className={`  bi h5 sec-bold p-2 br-sm me-2 `}
                        >

                            <ClipLoader color={"#023676"} loading={sending} speedMultiplier="1.2" size="20" />
                        </i>
                    :
                    <a className=''
                        onClick={e => editNote(e)}
                    >
                        <i
                            className={` ${pinned ? '  bi-pin-fill' : '  bi-pin'}  bi h5 sec-bold p-2 br-sm me-2 `}
                        />
                    </a>
            }

        </>
    );
}

export default ChangePin;