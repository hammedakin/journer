import React, { useState, useEffect } from 'react';
import Wrapper from '../../Wrapper';
import Note from './Note';
import { useLocation } from "react-router-dom";


const EditNote = () => {

    let location = useLocation()
    const [data] = useState(location.state);

    // Form Fields
    const [form, setform] = useState({ title: data.title, content: data.content });
    function handleChange(e) {
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
        // createNote()
    }
    // Form Fields
    return (
        <>
            <Wrapper>
                <Note
                    handleChange={handleChange}
                    timestamp={data.timestamp}
                    edited={data.edited}
                    form={form}
                    noteId={data?._id}
                />

                
            </Wrapper>
        </>
    );
}

export default EditNote;