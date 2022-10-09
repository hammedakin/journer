import React, { useState, useEffect } from 'react';
import Wrapper from '../../Wrapper';
import Note from './Note';
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify'
import axios from 'axios';
import { GetDateTime } from '../Global/GetDate';


const EditNote = () => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [sending, setsending] = useState(false);
    let location = useLocation()
    const [data] = useState(location.state);
    const [noteId, setnoteId] = useState(data?._id);
    const [noteTheme, setnoteTheme] = useState(data?.theme.color);
    const [msg, setmsg] = useState('');

    // Form Fields
    const [form, setform] = useState({ title: data?.title, content: data?.content });

    function handleChange(e) {
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
        editNote(e);
        changeLabel()
    }
    // Form Fields

    let navigate = useNavigate()
    useEffect(() => {
        if (location.state === null) {
            navigate('/note')
        }
    }, []);

    // Get Err for long Title

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


    const [timestamp] = useState(GetDateTime(new Date()));

    //   Edit Note Function
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
                    timestamp={data?.timestamp}
                    edited={data?.edited}
                    noteId={data?._id}
                    submit={(e) => editNote(e)}
                    sending={sending}
                    setnoteTheme={setnoteTheme}
                    noteTheme={noteTheme}
                    msg={msg}
                />


            </Wrapper>
        </>
    );
}

export default EditNote;