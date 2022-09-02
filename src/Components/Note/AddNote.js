import React, { useState, useEffect } from 'react';
import Wrapper from '../../Wrapper';
// import { currentDate, currentTime } from '../Global/Global';
import Note from './Note';
import { toast } from 'react-toastify'
import axios from 'axios';
import { GetDate, GetDateTime } from '../Global/GetDate';


const AddNote = () => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('token'));
    const [sending, setsending] = useState(false);

 
    const [data, setdata] = useState({});
    const [noteId, setnoteId] = useState('');

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
                timestamp: GetDateTime(new Date()),
                edited: GetDateTime(new Date())
                // theme:theme,
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
                        setnoteId(res.data.note._id)
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
                    data={data}
                    form={form}
                    timestamp={GetDateTime(new Date())}
                    edited={GetDateTime(new Date())}
                    submit={createNote}
                    sending={sending}
                    noteId={noteId}
                />
            </Wrapper>

        </>
    );
}

export default AddNote;