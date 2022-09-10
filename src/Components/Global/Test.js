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

            {/* <OrderList>
                {item.items.map(({ id, packitem, quanitity }) => <ListItems key={id}>{packitem} </ListItems>
                )}
            </OrderList> */}

            {/* {allThemes.map(({ name, color }, i) => {
                            return (
                                <div className="col-md-12 pry-bold-text font-weight-bold p-1 " key={color}>
                                    <div className="mb-2 row justify-content-between">
                                        <div className="col">
                                            <label
                                                className=""
                                                for={name}
                                            >
                                                <span className="">
                                                    {name}
                                                </span>
                                            </label>
                                        </div>
                                        <div className="col-2">
                                            {
                                                sending ?
                                                    <ClipLoader                                 className='pry-bold-border'
 loading={sending} speedMultiplier="1.2" size="20" />
                                                    :
                                                    <input
                                                        type="radio"
                                                        className="custom-control-input"
                                                        name="groupOfDefaultRadios"
                                                        id={name}
                                                        value={color}
                                                        onChange={e => editTheme(e.target.value)}
                                                        checked={name == istheme?.name ? true : false}
                                                    />
                                            }
                                        </div>
                                    </div>
                                </div>
                            )
                        })} */}
        </>
    );
}

export default Test;