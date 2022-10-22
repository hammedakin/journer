import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper from '../../Wrapper';
import EmptyList from '../Global/EmptyList';
import { Loading } from '../Global/Loader';
import { useFetch } from '../Global/useFetch';
import SingleNote from './SingleNote';


const SearchPage = () => {
    const { loading, data } = useFetch('note')

    let location = useLocation()
    const [searched] = useState(location.state);
    const [newData, setnewData] = useState([]);


    useEffect(() => {
        if (data.note) {
            setnewData(data.note?.filter((x) =>
                x.content?.toLowerCase().includes(searched.value?.toLowerCase()) ||
                x.title?.toLowerCase().includes(searched.value?.toLowerCase()) ||
                x.labels.label?.toLowerCase().includes(searched.value?.toLowerCase())
            ))
        }

    }, [data.note]);

    return (
        <>
            <Wrapper pagename={'Search'}>
                <h5 className="pry-bold-text">
                    Search ({newData?.length}) - <span className="fw-light"> {searched.value} </span>
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
                            icon={'bi-search'}
                            text={`No matching notes with (${searched.value})`}
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

export default SearchPage;