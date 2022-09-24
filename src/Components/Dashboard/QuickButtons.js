import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const QuickButton = ({ fetchData, loading, setcolumn, column, data }) => {
    const [search, setsearch] = useState(false);
    const [searchValue, setsearchValue] = useState('');
    let navigate = useNavigate()
    function Reload() {
        fetchData()
    }
    // change 

    const columnChange = () => {
        const newColumn = column === false ? true : false;
        setcolumn(newColumn)
    }
    function searchChange() {
        setsearch(!search)
    }
    // change 

    const searchNote = (e) => {
        e.preventDefault()
        const searched = data.note?.filter((x) => x.content.toLowerCase().includes(searchValue.toLowerCase()))
        console.log(searched);
        navigate('/search',
            { state: {searched, value: searchValue} }

        )
    }

    return (
        <>
            <div className="pry-text text-end d-flex justify-content-end my-3">
                {search &&
                    <div className="col">
                        <form className='search me-3' onSubmit={(e)=>searchNote(e)}>
                            <input
                                type="search"
                                className='input-style br-sm'
                                placeholder="search"
                                onChange={(e) => setsearchValue(e.target.value)}
                                required
                                autoComplete="false"
                            />
                        </form>
                    </div>
                }

                <i className={`bi ${search ? 'bi-x' : 'bi-search'} h5  sec-bold p-2 br-sm me-3`} onClick={searchChange}></i>

                <span className="h5 sec-bold p-2 br-sm me-3 p-0" onClick={Reload}>
                    <i className={`bi bx bi-arrow-clockwise ${loading && 'bx bx-spin transparent'}`} ></i>
                </span>

                <i className={`bi h5  sec-bold p-2 br-sm ${column === true ? 'bi-view-stacked' : 'bi-columns-ga bi-grid'}`} onClick={columnChange}></i>
            </div>

        </>
    );
}

export default QuickButton;