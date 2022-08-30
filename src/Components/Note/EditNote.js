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
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
        editNote(e);
    }
    // Form Fields


    // Get todays Date and Time
    // Get todays Date and Time

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    let d = new Date()
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();
    let min = d.getMinutes();
    let hour = d.getHours();
    let currentTime = `${padTo2Digits(hour)}:${padTo2Digits(min)}`
    let currentDate = `${date} ${month} ${year}`
    let timestamp = { date: currentDate, time: currentTime }

    // Get Current Date and Time
    // Get Current Date and Time




    //   Edit Note Function
    //   Edit Note Function
    function editNote(e) {
        e.preventDefault();
        if (form.content) {
            setsending(true);
            const data = {
                title: form.title,
                content: form.content,
                pinned: pinned,
                edited: timestamp
                // theme:theme,
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

    return (
        <>
            <Wrapper>
                <Note
                    handleChange={handleChange}
                    data={data}
                    form={form}
                    timestamp={data.timestamp}
                    edited={data.edited}
                    noteId={data?._id}
                    submit={editNote}
                    sending={sending}
                />


            </Wrapper>
        </>
    );
}

export default EditNote;