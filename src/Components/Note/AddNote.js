import React, { useState, useEffect } from 'react';
import Wrapper from '../../Wrapper';
// import { currentDate, currentTime } from '../Global/Global';
import Note from './Note';
import { toast } from 'react-toastify'
import axios from 'axios';
import { GetDate, GetDateTime } from '../Global/GetDate';


const AddNote = () => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [sending, setsending] = useState(false);
    const [noteTheme, setnoteTheme] = useState('');


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
        changeLabel()
    }
    // Form Fields

    // Get Err for long Title
    const [msg, setmsg] = useState('');

    const changeLabel = (e) => {
        if ([...form.title].length >= 999) {
            setmsg(
                <p className="m-0 text-danger small text-center ps-4">Enter a shorter title.</p>
            )
        } else {
            setmsg('')
        }
    }
    // Get Err for long Title

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

    const [timestamp] = useState(GetDateTime(new Date()));

    //   Edit Note Function
    function editNote(e) {
        e.preventDefault();
        if (form.content) {
            setsending(true);
            const data = {
                title: form.title,
                content: form.content,
                edited: timestamp
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
            <Wrapper theme={noteTheme}>
                <Note
                    handleChange={handleChange}
                    data={data}
                    form={form}
                    timestamp={GetDateTime(new Date())}
                    edited={GetDateTime(new Date())}
                    submit={noteId ? editNote : createNote}
                    sending={sending}
                    noteId={noteId}
                    setnoteTheme={setnoteTheme}
                    noteTheme={noteTheme}
                    msg={msg}
                />
            </Wrapper>

        </>
    );
}

export default AddNote;