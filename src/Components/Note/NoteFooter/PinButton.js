import React, { useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { useFetch } from '../../Global/useFetch';
import { ClipLoader } from 'react-spinners';


const PinButton = ({ noteId, pin }) => {
    const { fetchData } = useFetch(`note/${noteId}`)

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [sending, setsending] = useState(false);
    const [pinned, setpinned] = useState(pin);


    //   Edit Pin Function
    //   Edit Pin Function
    function editPin(e) {
        e.preventDefault();
        setsending(true);
        const data = {
            pinned: !pinned
        }
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
                    setpinned(res.data.note.pinned)
                    // fetchData()
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

    return (
        <>
            {
                sending ?
                    <i
                        className='bi h5 sec-bold p-2 br-sm me-2 pry-bold-text'
                    >
                        <ClipLoader className='loader-pry-border'
                            loading={sending} speedMultiplier="1.2" size="20" />
                    </i>
                    :
                    <i
                        onClick={e => editPin(e)}
                        className={` ${pinned ? '  bi-pin-fill' : '  bi-pin'}  bi h5 sec-bold p-2 br-sm me-2 pry-bold-text`}
                    />
            }

        </>
    );
}

export default PinButton;