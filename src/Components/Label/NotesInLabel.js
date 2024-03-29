import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Wrapper from '../../Wrapper';
import EmptyList from '../Global/EmptyList';
import { Loading } from '../Global/Loader';
import { useFetch } from '../Global/useFetch';
import SingleNote from '../Note/SingleNote';


const NotesInLabel = () => {
    const { loading, data } = useFetch('note')

    let navigate = useNavigate()
    let location = useLocation()
    let labelInfo = location.state
    const [newData, setnewData] = useState([]);


    useEffect(() => {
        if (labelInfo === null) {
            navigate('/note')
            setTimeout(() => {
                toast.error('select a label!')
            }, 100);
        }
        if (data.note) {
            setnewData(data.note?.filter((x) =>
                x.labels._id?.includes(labelInfo?._id)
            ))
        }

    }, [data, location]);

    return (
        <>
            <Wrapper pagename={'Label'}>
                <h5 className="pry-bold-text">
                    <i className='bi bi-chevron-left me-1 pointer'
                        onClick={() => navigate(-1)}
                    />
                    <span className="fw-light"> {labelInfo?.label} </span> - ({newData?.length})
                </h5>

                {loading &&
                    <>
                        <Loading load={loading} />
                        <div className="my-5 text-center">
                            <h5 className='pry-text'>Loading...</h5>
                        </div>
                    </>

                }

                {!loading && !newData?.length ?
                    <div className="py-5">
                        <EmptyList
                            icon={'bi-tag'}
                            text={`No notes with this label (${labelInfo?.label})`}
                        />
                    </div>
                    : null
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