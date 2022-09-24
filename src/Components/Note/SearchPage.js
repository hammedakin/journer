import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Wrapper from '../../Wrapper';
import SingleNote from './SingleNote';


const SearchPage = () => {
    let location = useLocation()
    const [data] = useState(location.state);

    return (
        <>
            <Wrapper>
                <h5 className="pry-bold-text">
                    Search - <span className="fw-light"> {data.value} </span> 
                </h5>

                <div className="row">
                    {data.searched?.map((item) => {
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