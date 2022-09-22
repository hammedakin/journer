import React, { useState } from "react";
import { Modal } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";
// import { labels } from "../data";
import { useFetch } from "../../Global/useFetch";
import { ClipLoader } from "react-spinners";



const LabelButtton = ({ noteId, label }) => {
    const { loading, data: allLabels, fetchData } = useFetch(`label`)

    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));

    const [showremove, setShowremove] = useState(false);
    const handleCloseremove = () => setShowremove(false);
    const handleShowremove = () => setShowremove(true);

    const [chosenLabel, setchosenLabel] = useState(label);
    const [sending, setsending] = useState(false);

    //   Edit Theme Function
    //   Edit Theme Function
    function editLabel(e) {
        let newLabel = {}
        if (e === "None") {
            newLabel = { label: "None", _id: "none" }
            setchosenLabel(newLabel)
        } else {
            let labelIndex = allLabels.label.findIndex(x => x.label === e)
            newLabel = allLabels.label[labelIndex]
            setchosenLabel(newLabel)
        }
        // console.log(newLabel);
        setsending(true);
        const data = {
            labels: newLabel
        }
        const headers = {
            'Authorization': `Bearer ${token}`
        }
        axios
            .patch(`${endpoint}/note/label/${noteId}`, data, { headers })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setsending(false);
                } else {
                    setsending(false);
                    console.log(res.data);
                    setchosenLabel(res.data.note.labels)
                }
            })
            .catch((error) => {
                if (error.response.data) {
                    setsending(false);
                    toast.error(error.response.data.msg);
                } else {
                    setsending(false);
                    toast.error('network error ❌');
                }
            });
    }
    //   Edit Theme Function
    //   Edit Theme Function

    return (

        <>
            <span onClick={e => handleShowremove()}>
                <i className='bi bi-tag h5 sec-bold p-2 br-sm me-2 pry-bold-text' />
            </span>

            <Modal
                show={showremove}
                onHide={handleCloseremove}
                size="sm"
                onEnter={fetchData}
            >
                <Modal.Header closeButton>
                    <h6 className="font-weight-light ml-auto m-0">Labels</h6>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "transparent!important" }}>
                    <div className="">
                        {sending ?
                            <div className="text-center py-5">

                                <ClipLoader className='pry-bold-border'
                                    loading={sending} speedMultiplier="1.2" size="50" />
                            </div>
                            :
                            <>
                        <div className="col-md-12 pry-bold-text font-weight-bold p-1 ">
                            <div className="mb-2 row justify-content-between">
                                <div className="col">
                                    <label
                                        className=""
                                        for="None"
                                    >
                                        <span className="">
                                            None
                                        </span>
                                    </label>
                                </div>
                                <div className="col-2">

                                    <input
                                        type="radio"
                                        className=""
                                        name="groupOfDefaultRadios"
                                        id="None"
                                        value="None"
                                        onChange={e => editLabel(e.target.value)}
                                        checked={"None" == chosenLabel?.label ? true : false}

                                    />
                                </div>
                            </div>
                        </div>
                        {allLabels.label?.map(({ label, _id }, i) => {
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
                                                type="radio"
                                                className=""
                                                name="groupOfDefaultRadios"
                                                id={label}
                                                value={label}
                                                onChange={e => editLabel(e.target.value)}
                                                checked={label == chosenLabel?.label ? true : false}

                                            />
                                        </div>
                                    </div>
                                </div>

                            )
                        })}
                            </>
                        }

                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}

export default LabelButtton;