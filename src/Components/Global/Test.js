import React, { useState } from 'react';
import { PACK_DATA } from './data';
import DeleteModal from './DeleteModal';
const Test = () => {
    const [token, settoken] = useState('elemi');
    
function del(e) {
    alert(e)
}
const [item] = PACK_DATA.filter((x)=>x.title.includes('techBro'))
console.log(item);
    return (
        <>
            {/* <div className="mt-5 text-center">
                <button className="btn btn-success">
                    <DeleteModal
                    content={`Are you sure?`}
                    Fn={e=>del(token)}
                    
                    />
                </button>
            </div> */}



        </>
    );
}

export default Test;