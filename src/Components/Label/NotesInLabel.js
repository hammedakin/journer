import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper from '../../Wrapper';
import { Loading } from '../Global/Loader';
import { useFetch } from '../Global/useFetch';
import SingleNote from '../Note/SingleNote';


const NotesInLabel = () => {
    const { loading, data } = useFetch('note')

    let location = useLocation()
    // const [labelInfo] = useState(location.state);
    let labelInfo = location.state
    const [newData, setnewData] = useState([]);


    useEffect(() => {
        if (data.note) {
            setnewData(data.note?.filter((x) =>
                x.labels._id?.includes(labelInfo._id)
            ))
        }

    }, [data,location]);

    return (
        <>
            <Wrapper>
                <h5 className="pry-bold-text">
                    <span className="fw-light"> {labelInfo.label} </span> - ({newData?.length})
                </h5>

                {loading &&
                    <>
                        <Loading load={loading} />
                        <div className="my-5 text-center">
                            <h5 className='pry-text'>Loading...</h5>
                        </div>
                    </>

                }
                <div className="row">
                    {newData?.filter((x) => x.pinned === true).map((item) => {
                        const { _id } = item
                        return (

                            <SingleNote
                                column={true}
                                item={item}
                                key={_id}
                            />
                        )
                    }).reverse()}
                    {newData?.filter((x) => x.pinned === false).map((item) => {
                        const { _id } = item
                        return (

                            <SingleNote
                                column={true}
                                item={item}
                                key={_id}
                            />
                        )
                    }).reverse()}
                </div>

            </Wrapper>
        </>
    );
}

export default NotesInLabel;