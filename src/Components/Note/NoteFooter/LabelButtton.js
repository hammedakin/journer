import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
import { labels } from "../data";
import { useFetch } from "../../Global/useFetch";



const LabelButtton = ({ children }) => {
    const { loading, data, fetchData } = useFetch(`label`)

    const [sending, setsending] = useState();



    const [showremove, setShowremove] = useState(false);
    const handleCloseremove = () => setShowremove(false);
    const handleShowremove = () => setShowremove(true);


    return (

        <>
            <span onClick={e => handleShowremove()}>
                <i className='bi bi-tag h5 sec-bold p-2 br-sm me-2 pry-bold-text' />
            </span>

            <Modal
                show={showremove}
                onHide={handleCloseremove}
                size="sm"
            >
                <Modal.Header closeButton>
                    <h6 className="font-weight-light ml-auto m-0">Labels</h6>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "transparent!important" }}>
                    <div className="">

                        {data.label?.map(({ label, _id }, i) => {
                            return (
                                <div className="col-md-12 pry-bold-text font-weight-bold p-1 " key={_id}>
                                    <div className="mb-2 row justify-content-between">
                                        <div className="col">

                                            <label
                                                className=""
                                                for={label}
                                            >
                                                <span className="">
                                                    {label}
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-2">

                                            <input
                                                type="checkbox"
                                                className=""
                                                name={label}
                                                id={label}
                                                value={label}
                                            // onChange={e => handleChange(e)}
                                            // checked={feature ? true : false}

                                            />
                                        </div>
                                    </div>
                                </div>

                            )
                        })}






                    </div>
                </Modal.Body>



                {/* <div className="modal-footer justify-content-center">
                    {sending ?
                        <i className="bx bx-loader bx-spin bx-sm text-danger" />
                        :
                        <>
                            <a type="button" className="btn btn-outline-danger waves-effect"
                                onClick={e => handleCloseremove()}
                            >No</a>
                            <a href="" className="btn btn-danger waves-effect "
                                onClick={e => DeleteNote(e)}
                            >Yes</a>
                        </>
                    }
                </div> */}
            </Modal>
        </>
    );
}

export default LabelButtton;