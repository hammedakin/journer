import React, { useState, useEffect } from 'react';
import DeleteModal from '../Global/DeleteModal';
import ChangePin from './NoteFooter/ChangePin';

const NoteFooter = (props) => {

    const { toPin } = props

    const { handleChange, timestamp, edited, data, sending, form, submit, noteId } = props.data
    console.log(props.data);


    // const [pinned, setpinned] = useState(data.pinned);
    // console.log(pinned);


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





    // Delete FN
    function del(e) {
        alert(e)
    }
    // Delete FN

    return (
        <>
            <div className=" pb-5">
                <nav
                    className="navbar light-bg navbar-expand-sm navbar-light fixed-bottom py-1 border-top shadow-none py-3 bottom-nav"
                    id="navbar main ">
                    <div className="container justify-content-between" id="logo">


                        <li className="list-unstyled text-center" >
                            <a className=''>
                                {/* <i className={`bi h4`} /> */}
                                <div className="small-text">
                                    <small className="my-2">
                                        {edited ? 'Edited ' : ''}
                                        {currentDate === timestamp.date ? timestamp.time : timestamp.date}
                                    </small>
                                </div>
                            </a>
                        </li>
                        <li className="list-unstyled text-center" >

                            {/* <a className=''
                                onClick={e => toPin(e)}
                            >
                                <i
                                    className={` ${pinned ? '  bi-pin-fill' : '  bi-pin'}  bi h5 sec-bold p-2 br-sm me-2 `}
                                />
                            </a> */}
                            <ChangePin  noteId={noteId} />

                            <a className=''>
                                <i className='bi bi-share h5 sec-bold p-2 br-sm me-2' />
                            </a>
                            <a className=''>
                                <i className='bi bi-palette h5 sec-bold p-2 br-sm me-2' />
                            </a>
                            <a className=''>
                                <i className='bi bi-tag h5 sec-bold p-2 br-sm me-2' />

                            </a>
                            <a className=''>
                                <DeleteModal
                                    content={`Are you sure?`}
                                    // Fn={e => del(token)}
                                    noteId={noteId}
                                >
                                    <i className='bi bi-trash3 h5 red-bold-text red-light p-2 br-sm me-2'
                                    />

                                </DeleteModal>

                            </a>
                        </li>

                    </div>
                </nav>
            </div>

        </>
    );
}

export default NoteFooter;