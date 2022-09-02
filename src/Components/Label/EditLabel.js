import React, { useState } from 'react';
import { toast } from 'react-toastify'
import axios from 'axios';
import { ClipLoader } from 'react-spinners';
import { useFetch } from '../Global/useFetch';
import TheEditLabelForm from './TheEditLabelForm';


const EditLabel = ({ loading, data, fetchData }) => {

    
    return (
        <>
            {data.label?.map((item, i) => {
                const { label, _id } = item
                return (
                    <>
                    {loading ?
                            <ClipLoader
                                className='dark-bold-border'
                                loading={loading}
                                speedMultiplier="1.5"
                                size="25"
                            />
                    :
                        <TheEditLabelForm
                            label={label}
                            id={_id}
                            key={_id}
                            fetchData={fetchData}
                        />

                    }

                    </>
                )
            })}
        </>
    );
}

export default EditLabel;