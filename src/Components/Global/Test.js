import React, { useState } from 'react';
import DeleteModal from './DeleteModal';

const Test = () => {
    const [token, settoken] = useState('elemi');
    
function del(e) {
    alert(e)
}
    return (
        <>


            <div className="mt-5 text-center">
                <button className="btn btn-success">
                    <DeleteModal
                    content={`Are you sure?`}
                    Fn={e=>del(token)}
                    
                    />
                </button>
            </div>



        </>
    );
}

export default Test;