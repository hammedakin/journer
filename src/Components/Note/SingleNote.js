import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const SingleNote = ({ column, item }) => {
    const { pinned, edited, title, content, labels, theme } = item

    let navigate = useNavigate()

    // Route to Edit
    function toEdit(item) {
        const data = { ...item }
        navigate(
            '/note/edit',
            { state: data }
        )
    }
    // Route to Edit

    return (
        <>
            <div className={`mb-4 ${column === true ? 'col-lg-3 col-md-4 col-6' : ' col-md-6 col-12'}`}>
                <div className={`each-note  hover-shadow br-sm p-3 ${theme.color ? theme.color : 'light-bg note-border'}`}
                    onClick={e => toEdit(item)}
                >
                    <div className="d-flex justify-content-between">
                        <small className="date ">
                            {edited.date}
                        </small>
                        {pinned &&
                            <i
                                className='bi bi-pin-fill small'
                            />
                        }
                    </div>
                    <h6 className="title fw-bolder text-wrap">
                        {title}
                    </h6>
                    <p className="text-wrap content">
                        <div dangerouslySetInnerHTML={{ __html: content }} />
                        {/* {content} */}
                    </p>
                    <div className="note-label d-flex align-self-end">
                        <p className="m-0 me-2 br-sm pry-bold sec-text px-2">{labels.label === "None" ? '' : labels.label}</p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SingleNote;