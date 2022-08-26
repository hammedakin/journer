import React, { useState, useEffect } from 'react';
import Wrapper from '../../Wrapper';
import Note from './Note';
import { useLocation } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from 'axios';


const EditNote = () => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('token'));
    const [sending, setsending] = useState(false);
    let location = useLocation()
    const [data] = useState(location.state);
    const [noteId, setnoteId] = useState(data._id);
    const [pinned, setpinned] = useState(data.pinned);

    // Form Fields
    const [form, setform] = useState({ title: data.title, content: data.content });
    function handleChange(e) {
        // console.log('here');
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
        editNote(e);
    }
    // Form Fields

    //   Edit Note Function
    //   Edit Note Function
    function editNote(e) {
        e.preventDefault();
        if (form.content) {
            setsending(true);
            const data = {
                title: form.title,
                content: form.content,
                pinned: pinned
                // color:color,
                // label: form.label,
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            axios
                .patch(`${endpoint}/note/${noteId}`, data, { headers })
                .then((res) => {
                    if (res.data.success === false) {
                        toast.warn(res.data.msg);
                        setsending(false);
                    } else {
                        setsending(false);
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
        } else {
            setsending(false);
            toast.error("note can't be empty 🙁");
        }
    }
    //   Edit Note Function
    //   Edit Note Function


    // function toPin(e) {
    //     e.preventDefault();
    //     setpinned(!pinned)
    //     editNote(e)
    // }

    return (
        <>
            <Wrapper>
                <Note
                    handleChange={handleChange}
                    timestamp={data.timestamp}
                    edited={data.edited}
                    form={form}
                    noteId={data?._id}
                    data={data}
                    submit={editNote}
                    sending={sending}
                    // toPin={toPin}
                />


            </Wrapper>
        </>
    );
}

export default EditNote;