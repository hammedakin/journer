import { Link } from "react-router-dom";
import add from '../assets/add.png'


const AddNoteDiv = ({ column }) => {
    return (
        <>
            <div className={`mb-4 ${column === true ? 'col-lg-3 col-md-4 col-6' : ' col-md-6 col-12'}`}>
                <Link to="/new">
                    <div className="each-note shadow light-bg p-3 text-center">
                        <h4 className="sec-bold-text mt-3">
                            <i className="bi bi-plus" />
                            Add new </h4>
                            <img src={add} width='100%' className="mt-3 " />
                    </div>
                </Link>
            </div>


        </>
    );
}

export default AddNoteDiv;