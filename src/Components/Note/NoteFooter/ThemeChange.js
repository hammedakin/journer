import React from 'react';
import { ClipLoader } from "react-spinners";


const ThemeChange = (props) => {
    const { name, color, sending, editTheme, istheme } = props

    console.log(sending);
    return (
        <>
            <div className="col-md-4 col-6 mb-4">
                <label class="custom-radio">
                    <input
                        type="radio"
                        className="theme-radio"
                        name="groupOfDefaultRadios"
                        id={name}
                        value={color}
                        onChange={e => editTheme(e.target.value)}
                        checked={name == istheme?.name ? true : false}
                    />

                    {sending ?
                        <ClipLoader className='pry-bold-border'
                            loading={sending} speedMultiplier="1.2" size="20" />
                        :
                        <div className={`${color} br-xlg theme-icon fit-content`}>
                            <i
                                className={`${name == istheme?.name ? 'bi-check2' : 'bi-palette'}
                                     bi bx m-0 bx-sm p-2`}
                            />
                        </div>
                    }
                </label>
            </div>

        </>
    );
}

export default ThemeChange;