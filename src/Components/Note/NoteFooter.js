import React, { useState, useEffect } from 'react';
import DeleteModal from '../Global/DeleteModal';
import { GetDate, GetTime } from '../Global/GetDate';
import PinButton from './NoteFooter/PinButton';
import LabelButtton from './NoteFooter/LabelButtton';
import ShareButton from './NoteFooter/ShareBotton';
import ThemeButton from './NoteFooter/ThemeButton';
import ArchiveButton from './NoteFooter/ArchiveButton';

const NoteFooter = (props) => {

    const { handleChange, timestamp, edited, data, sending, form, submit, noteId, noteTheme, setnoteTheme } = props.data

    return (
        <>
            <div className=" pb-5">
                <nav
                    className={`navbar navbar-light fixed-bottom py-1 border-top shadow-none py-3 note-nav bottom-nav ${noteTheme ? noteTheme : "light-bg"} `}
                    id="navbar main ">
                    <div className="container justify-content-between">
                        <li className="list-unstyled text-center " >
                            <div className="small-text pry-bold-text">
                                <small className="my-2">
                                    {edited ? 'Edited ' : ''}
                                    {GetDate(new Date()) === edited?.date ? edited?.time : edited?.date}
                                </small>
                            </div>
                        </li>
                        <li className="list-unstyled text-center" >

                            {noteId &&
                                <>
                                    <ArchiveButton
                                        noteId={noteId}
                                        archive={data?.archive} />

                                    <PinButton
                                        noteId={noteId}
                                        pin={data?.pinned} />

                                    <ShareButton
                                        form={form}
                                    />

                                    <ThemeButton
                                        noteId={noteId}
                                        theme={data?.theme}
                                        setnoteTheme={setnoteTheme}
                                    />

                                    <LabelButtton
                                        noteId={noteId}
                                        label={data?.labels}
                                    />

                                    <DeleteModal
                                        content={`Are you sure?`}
                                        noteId={noteId}
                                    >
                                        <i className='bi bi-trash3 h5 red-bold-text red-light p-2 br-sm me-2 '
                                        />
                                    </DeleteModal>
                                </>

                            }
                        </li>

                    </div>
                </nav>
            </div>

        </>
    );
}

export default NoteFooter;