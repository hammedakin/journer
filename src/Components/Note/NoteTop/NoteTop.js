import { useNavigate } from "react-router-dom";
import { ClipLoader } from 'react-spinners';



const NoteTop = ({ sending, submit, theme }) => {

    let navigate = useNavigate();

    // Back Button
    function prevPage() {
        navigate(-1)
    }
    // Back Button
    return (
        <>
            <nav
                className={`fixed-top shadow-none bottom-nav py-3 d-flex justify-content-between align-items-center mx-2 ${theme ? 'transparent top-nav' : "light-bg"} `}
            >
                <div className="">
                    <i
                        className='bi bi-arrow-left h5 sec-bold p-2 br-sm me-2'
                        onClick={e => prevPage()}
                    />
                </div>
                <div className="">
                    {sending ?
                        // <span className="h5 sec-bold p-2 br-sm me-0 p-0">
                        // <ClipLoader className='loader-pry-border'
                        //     loading={sending} speedMultiplier="1.2" size="19" />
                        // </span>
                        <button className="btn pry-bold-text shadow-none m-0 p-0" disabled>
                            <span className="h5 sec-bold p-2 br-sm me-0 p-0">
                                <ClipLoader className='loader-pry-border'
                                    loading={sending} speedMultiplier="1.2" size="19" />
                            </span>
                        </button>
                        :
                        <button
                            action="submit"
                            className="border-0 pry-bold-text m-0 p-0"
                        >
                            <i
                                className='bi bi-check2 h5 sec-bold p-2 br-sm me-0'
                            />
                        </button>
                    }
                </div>
            </nav>



        </>
    );
}

export default NoteTop;