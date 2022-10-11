import React, { useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { useFetch } from '../../Global/useFetch';
import { ClipLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';


const ArchiveButton = ({ noteId, archive: archiveState }) => {

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [sending, setsending] = useState(false);
    const [archive, setarchive] = useState(archiveState);

    let navigate = useNavigate()

    //   Edit Archive Function
    //   Edit Archive Function
    function editArchive(e) {
        e.preventDefault();
        setsending(true);
        const data = {
            archive: !archive
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios
            .patch(`${endpoint}/note/archive/${noteId}`, data, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setsending(false);
                } else {
                    setsending(false);
                    setarchive(res.data.note.archive)
                    navigate('/note')
                    setTimeout(() => {
                        toast.success(res.data.msg);
                    }, 100);
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
    //   Edit Archive Function
    //   Edit Archive Function

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
                        onClick={e => editArchive(e)}
                        className={` ${archive ? '  bi-archive-fill' : '  bi-archive'}  bi h5 sec-bold p-2 br-sm me-2 pry-bold-text`}
                    />
            }
        </>
    );
}

export default ArchiveButton;