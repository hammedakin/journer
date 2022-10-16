import React from 'react';

const EmptyList = ({ text, icon }) => {
    return (
        <>
            <div className="d-flex align-items-center h-100 justify-content-center">
                <div className="text-center dark-bold-text">
                    <i className={`bi display-3 ${icon}`} />
                    <h5 className="mt-2">
                        {text} is empty...
                    </h5>
                </div>
            </div>

        </>
    );
}

export default EmptyList;