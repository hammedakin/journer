import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios'

export const useFetch = (url) => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [loading, setloading] = useState(false);
    const [data, setdata] = useState([]);

    function fetchData(e) {
        setloading(true);

        // console.log(header);
        axios.get(`${endpoint}/${url}`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        })
            .then((res) => {
                if (res.data.success === false) {
                    toast.warn(res.data.msg);
                    setloading(false);
                } else {
                    setloading(false);
                    setdata(res.data)
                    // toast.success(res.data.msg);
                }
            })
            .catch((error) => {
                if (error.response.data) {
                    setloading(false);
                    toast.error(error.response.data.msg);
                } else {
                    setloading(false);
                    // toast.error('network error ❌');
                }
            });
    }

    useEffect(() => {
        fetchData()
    }, []);

    return { loading, data, fetchData }
}
