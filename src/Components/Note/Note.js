import React, { useState, useEffect } from 'react';
import { Loading } from '../Global/Loader';
import NoteFooter from './NoteFooter';
import NoteTop from './NoteTop/NoteTop';

const Note = (props) => {

    const { handleChange, timestamp, edited, data, sending, form, submit, noteId } = props

   

    return (
        <>
            <main className="note p-0">
                {<Loading load={sending} />}

                <NoteTop
                sending={sending}
                submit={submit}
                theme={data?.theme?.color}
                />


                <form>
                    <div className="row justify-content-center text-left">
                        <div className="col-md-12 ">
                            <input
                                type="text"
                                className="input-style fw-bolder"
                                name="title"
                                placeholder="Title..."
                                onChange={handleChange}
                                required
                                value={form.title}
                            />
                        </div>
                        <div className="col-md-12">
                            <textarea
                                type="text"
                                className="input-style textarea-style"
                                name="content"
                                placeholder="Write something down..."
                                rows="3"
                                onChange={handleChange}
                                required
                                value={form.content}
                            ></textarea>
                        </div>
                    </div>
                </form>


                <NoteFooter
                    edited={edited}
                    timestamp={timestamp}
                    noteId={noteId}
                    data={props}
                    // toPin={toPin}
                    form={form}

                />
            </main>
        </>
    );
}

export default Note;