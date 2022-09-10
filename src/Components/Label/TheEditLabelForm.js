import React, { useState } from 'react';
import { ClipLoader } from 'react-spinners';

const TheEditLabelForm = ({ label, id, deleting, DeleteLabel, labelEdit, sending }) => {


    const [newLabel, setnewLabel] = useState(label);
    const [checkEdit, setcheckEdit] = useState(false);
    const [msg, setmsg] = useState();

    const changeLabel = (e) => {
        setnewLabel(e.target.value)
        if ([...e.target.value].length >= 29) {
            setmsg(
                <p className="m-0 text-danger small text-center ps-4">Enter a shorter label.</p>
            )
        } else {
            setmsg('')
        }
    }

    return (
        <>
            {msg}
            <div className="d-flex align-items-center label-form py-2 px-2"
                onMouseEnter={e => setcheckEdit(true)}
                onMouseLeave={e => setcheckEdit(false)}
                key={id}
            >
                {checkEdit ?
                    <>
                        {deleting ?
                            <ClipLoader
                                className='dark-bold-border'
                                loading={deleting}
                                speedMultiplier="1.5"
                                size="18"
                            />
                            :
                            <i
                                className=' bi bi-trash3 dark-bold-text m-0'
                                onClick={e => DeleteLabel(id)}
                            />
                        }
                    </>
                    :
                    <i className=' bi bi-tag  dark-bold-text m-0' />
                }

                <input
                    type="text"
                    className="input-style h6 fw-light m-0 px-1"
                    name="label"
                    placeholder="Edit label"
                    onChange={(e) => changeLabel(e)}
                    required
                    maxLength="30"
                    value={newLabel}
                    autoComplete="off"
                />

                {checkEdit ?
                    <>
                        {sending ?
                            <ClipLoader
                                className='dark-bold-border'
                                loading={sending}
                                speedMultiplier="1.5"
                                size="18"
                            />
                            :
                            <i className=' bi bi-check2 h5 dark-bold-text m-0'
                                onClick={e => labelEdit(e, id, newLabel)}
                            />
                        }
                    </> :
                    <i className=' bi bi-pencil dark-bold-text m-0'
                    />

                }
            </div>



        </>
    );
}

export default TheEditLabelForm;