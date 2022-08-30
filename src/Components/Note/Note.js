import React, { useState, useEffect } from 'react';
import { Loading } from '../Global/Loader';
import { useNavigate } from "react-router-dom";
import NoteFooter from './NoteFooter';
import { ClipLoader } from 'react-spinners';

const Note = (props) => {

    const { handleChange, timestamp, edited, data, sending, form, submit, noteId } = props

    let navigate = useNavigate();

    // Back Button
    function prevPage() {
        navigate(-1)
    }
    // Back Button

    return (
        <>
            <main className="note p-0">
                {<Loading load={sending} />}

                <div className="my-3 p-2 border-bottom pb-3 d-flex justify-content-between align-items-center">
                    <div className="">
                        <i
                            className='bi bi-arrow-left h5 sec-bold p-2 br-sm me-2'
                            onClick={e => prevPage()}
                        />
                    </div>
                    <div className="">
                        {sending ?
                            <span className="h5 sec-bold p-2 br-sm me-0 p-0">
                                <ClipLoader color={"#023676"} loading={sending} speedMultiplier="1.2" size="19" />
                            </span>
                            :
                            <i
                                className='bi bi-check2 h5 sec-bold p-2 br-sm me-0'
                                onClick={e => submit(e)}
                            />
                        }
                    </div>
                </div>



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