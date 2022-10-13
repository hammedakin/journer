import React, { useState, useEffect } from 'react';
import { Loading } from '../Global/Loader';
import { useNavigate } from "react-router-dom";

const NewNote = (props) => {

    const { handleChange, timestamp, edited, data } = props
    const { content, label, title, token } = data
    console.log(data);
    const [test, settest] = useState(true);


    let navigate = useNavigate();
    // Back Button
    function prevPage() {
        navigate(-1)
    }
    // Back Button

    // Get todays Date and Time
    // Get todays Date and Time
    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    let d = new Date()
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();
    let min = d.getMinutes();
    let hour = d.getHours();


    let currentTime = `${padTo2Digits(hour)}:${padTo2Digits(min)}`

    let currentDate = `${date} ${month} ${year}`


    // Get Current Date and Time
    // Get Current Date and Time



    // Form Fields
    const [form, setform] = useState({ title: '', content: '' });
    function handleChange(e) {
        setform((inputs) => ({
            ...inputs,
            [e.target.name]: e.target.value,
        }));
        createNote()
    }
    // Form Fields



    function createNote(e) {
        e.preventDefault();
        if (form.title && form.content) {
            setsending(true);
            const data = {
                title: form.title,
                content: form.content,
                timestamp: timestamp,
                // color: color,
                // apptoken: apptoken,
                // usertoken: token,
            }

            axios.post(`${endpoint}/editItem`, data)
                .then((res) => {
                    if (res.data.success === false) {
                        toast.warn(res.data.msg);
                        setsending(false);
                    } else {
                        setsending(false);
                        toast.success(res.data.msg);
                    }
                })
                .catch((error) => {
                    setsending(false);
                    toast.error("network error ❌!");
                });
        } else {
            setsending(false);
            toast.error("Empty Fields!");
        }
    }











    // console.log(content, title, timestamp);
    // console.log(data);



    return (
        <>
            <main className="note p-0">
                {<Loading load={test} />}

                <div className="my-3 p-2 border-bottom pb-3 d-flex justify-content-between align-items-center">
                    <div className="">
                        <i
                            className='bi bi-arrow-left h5 sec-bold p-2 br-sm me-2'
                            onClick={e => prevPage()}
                        />
                    </div>
                    <div className="">
                        <i className='bi bi-check2 h5 sec-bold p-2 br-sm me-2' />
                    </div>
                </div>










                <form>
                    <div className="row justify-content-center text-left">
                        <div className="col-md-12 ">
                            <input
                                type="text"
                                className="input-style h5 fw-bold"
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
                                name="note"
                                placeholder="Write something down..."
                                rows="3"
                                onChange={handleChange}
                                required
                                value={form.content}
                            ></textarea>
                        </div>
                    </div>
                </form>








                <div className=" pb-5">
                    <nav
                        className="navbar light-bg navbar-expand-sm navbar-light fixed-bottom py-1 border-top shadow-none py-3 note-nav"
                        id="navbar main ">
                        <div className="container justify-content-between" id="logo">


                            <li className="list-unstyled text-center" >
                                <a className=''>
                                    <i className={`bi h4`} />
                                    <div className="small-text">
                                        <small className="my-2">
                                            {edited ? 'Edited ' : 'Added '}
                                            {currentDate === timestamp.date ? timestamp.time : timestamp.date}
                                        </small>
                                    </div>
                                </a>
                            </li>
                            <li className="list-unstyled text-center" >
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
                                    <i className='bi bi-trash3 h5 red-bold-text red-light p-2 br-sm me-2' />

                                </a>
                            </li>

                        </div>
                    </nav>
                </div>
            </main>
        </>
    );
}

export default NewNote;