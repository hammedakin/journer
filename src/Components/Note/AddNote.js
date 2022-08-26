import React, { useState, useEffect } from 'react';
import Wrapper from '../../Wrapper';
// import { currentDate, currentTime } from '../Global/Global';
import Note from './Note';
import { toast } from 'react-toastify'
import axios from 'axios';


const AddNote = () => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('token'));
    const [sending, setsending] = useState(false);

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

    let data = {}

    // Form Fields
    const [form, setform] = useState({ title: '', content: '' });
    function handleChange(e) {
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
        // createNote(e)
    }
    // Form Fields

    //   Create Note Function
    //   Create Note Function
    function createNote(e) {
        e.preventDefault();
        if (form.content) {
            setsending(true);
            const data = {
                title: form.title,
                content: form.content,
                // color:color,
                // label: form.label,
                // pinned:pinned 
            }
            const headers = {
                'Authorization': `Bearer ${token}`
            }
            axios
                .post(`${endpoint}/note`, data, { headers })
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
            toast.error("note can't be empty 🙁");
        }
    }
    //   Create Note Function
    //   Create Note Function

    return (
        <>
            <Wrapper>
                <Note
                    handleChange={handleChange}
                    timestamp={timestamp}
                    data={data}
                    form={form}
                    submit={createNote}
                    sending={sending}
                />
            </Wrapper>

        </>
    );
}

export default AddNote;