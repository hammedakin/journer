import React from 'react';

const EmptyList = ({ text, icon }) => {
    return (
        <>
            <div className="d-flex align-items-center h-100 justify-content-center">
                <div className="text-center dark-bold-text">
                    <i className={`bi display-3 ${icon}`} />
                    <p className="mt-2">
                        {text} 
                    </p>
                </div>
            </div>

        </>
    );
}

export default EmptyList;