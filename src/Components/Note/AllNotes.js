import { useState } from "react";
import { Loading } from "../Global/Loader";
import AddNoteDiv from "./AddNoteDiv";
import { note } from "./data";
import { useNavigate } from "react-router-dom";
import { useFetch } from "../Global/useFetch";
const AllNotes = () => {
    let navigate = useNavigate()
    // Get All Note
    const { loading, data, fetchData } = useFetch('note')

    const [column, setcolumn] = useState(true);

    // change column
    function columnChange() {
        setcolumn(!column)
    }
    function Reload() {
        fetchData()
    }
    // change column

    // Route to Edit
    function toEdit(item) {
        const data = { ...item }
        navigate(
            '/edit',
            { state: data }
        )
    }
    // Route to Edit

    const allnotes = data.note?.filter((x) => x.pinned === false).map((item) => {
        // const allnotes = note?.map((item) => {
        const { timestamp, edited, title, content, _id, labels, theme, updatedAt } = item
        return (
            <div className={`mb-4 ${column === true ? 'col-lg-3 col-md-4 col-6' : ' col-md-6 col-12'}`} key={_id}>
                <div className={`each-note  hover-shadow br-sm p-3 ${theme.color ? theme.color : 'light-bg note-border'}`}
                    onClick={e => toEdit(item)}
                >
                    <small className="date ">
                        {edited.date}
                    </small>
                    <h6 className="title fw-bolder text-wrap">
                        {title}
                    </h6>
                    <p className="text-wrap content">
                        {content}
                    </p>
                    <div className="note-label d-flex align-self-end">
                        {labels?.map((item, i) => {
                            return <p className="m-0 me-2 br-sm pry-bold sec-text px-2" key={i}>{item}</p>
                        })}
                    </div>
                </div>
            </div>
        )
    }).reverse();
    const allpinned = data.note?.filter((x) => x.pinned === true).map((item) => {
        // const allnotes = note?.map((item) => {
        const { timestamp, edited, title, content, _id, labels, theme, updatedAt } = item
        return (
            <div className={`mb-4 ${column === true ? 'col-lg-3 col-md-4 col-6' : ' col-md-6 col-12'}`} key={_id}>
                <div className={`each-note  hover-shadow br-sm p-3 ${theme.color ? theme.color : 'light-bg note-border'}`}
                    onClick={e => toEdit(item)}
                >
                    <div className="d-flex justify-content-between">
                    <small className="date ">
                        {edited.date}
                    </small>
                    <i
                        className='bi bi-pin-fill small'
                    />
                    </div>
                    <h6 className="title fw-bolder text-wrap">
                        {title}
                    </h6>
                    <p className="text-wrap content">
                        {content}
                    </p>
                    <div className="note-label d-flex align-self-end">
                        {labels?.map((item, i) => {
                            return <p className="m-0 me-2 br-sm pry-bold sec-text px-2" key={i}>{item}</p>
                        })}
                    </div>
                </div>
            </div>
        )
    }).reverse();

    return (
        <>
            {<Loading load={loading} />}

            <section className="allnotes mt-2">
                <div className="pry-text text-end d-flex justify-content-end my-3">
                    <span className="h5 sec-bold p-2 br-sm me-3 p-0">
                        <i className={`bi bx bi-arrow-clockwise ${loading && 'bx bx-spin transparent'}`} onClick={Reload}></i>
                    </span>

                    <i className={`bi h5  sec-bold p-2 br-sm ${column === true ? 'bi-view-stacked' : 'bi-columns-ga bi-grid'}`} onClick={columnChange}></i>
                </div>
                <div className="row">
                    <AddNoteDiv column={column} />
                    {allpinned}
                    {allnotes}
                </div>
            </section>

        </>
    );
}

export default AllNotes;