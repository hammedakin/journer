import React, { useState, useEffect } from 'react';
import DeleteModal from '../Global/DeleteModal';
import ChangePinButton from './NoteFooter/ChangePinButton';
import LabelButtton from './NoteFooter/LabelButtton';
import ShareButton from './NoteFooter/ShareBotton';
import ThemeButton from './NoteFooter/ThemeButton';

const NoteFooter = (props) => {

    const { handleChange, timestamp, edited, data, sending, form, submit, noteId } = props.data


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

    // Get Current Date and Time
    // Get Current Date and Time


    return (
        <>
            <div className=" pb-5">
                <nav
                    className="navbar light-bg navbar-expand-sm navbar-light fixed-bottom py-1 border-top shadow-none py-3 bottom-nav"
                    id="navbar main ">
                    <div className="container justify-content-between" id="logo">


                        <li className="list-unstyled text-center " >
                            <div className="small-text pry-bold-text">
                                <small className="my-2">
                                    {edited ? 'Edited ' : ''}
                                    {currentDate === edited.date ? edited.time : edited.date}
                                </small>
                            </div>
                        </li>
                        <li className="list-unstyled text-center " >


                            <ChangePinButton
                                noteId={noteId}
                                pin={data.pinned} />

                            <ShareButton
                                form={form}
                            />

                            <ThemeButton
                                noteId={noteId}
                                theme={data.theme}
                            />

                            <LabelButtton />

                            <DeleteModal
                                content={`Are you sure?`}
                                // Fn={e => del(token)}
                                noteId={noteId}
                            >
                                <i className='bi bi-trash3 h5 red-bold-text red-light p-2 br-sm me-2 '
                                />
                            </DeleteModal>
                        </li>

                    </div>
                </nav>
            </div>

        </>
    );
}

export default NoteFooter;