import React, { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import { Modal } from "react-bootstrap";
import { labels } from '../Components/Note/data';
import AddLabel from '../Components/Label/AddLabel';
import EditLabel from '../Components/Label/EditLabel';
import { useFetch } from '../Components/Global/useFetch';

const Label = ({ children }) => {
    const { loading, data, fetchData } = useFetch(`label`)

    const [showremove, setShowremove] = useState(false);
    const handleCloseremove = () => setShowremove(false);
    const handleShowremove = () => setShowremove(true);

    return (
        <>
            <span onClick={e => handleShowremove()}>
                {children}
            </span>


            <Modal
                show={showremove}
                onHide={handleCloseremove}
                size="sm"
                backdrop="static"

            >
                <Modal.Header closeButton>
                    <h6 className="font-weight-light ml-auto m-0">Labels</h6>
                </Modal.Header>
                <Modal.Body style={{ backgroundColor: "transparent!important" }} className="px-0 pt-0" >

                    <div className="label">

                        <AddLabel
                            loading={loading}
                            data={data}
                            fetchData={fetchData}
                        />

                        <EditLabel
                            loading={loading}
                            data={data}
                            fetchData={fetchData}
                        />

                    </div>

                </Modal.Body>
            </Modal>
        </>
    );
}

export default Label;