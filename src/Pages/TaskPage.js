import React, { useState, useEffect } from 'react';
import axios from "axios";
import { useLocation } from "react-router-dom";
import { Loading } from "../Components/Global/Loader";
import { useFetch } from "../Components/Global/useFetch";
import AddTask from "../Components/Task/AddTask";
import AllTasks from "../Components/Task/AllTasks";
import Wrapper from '../Wrapper'
import { toast } from 'react-toastify';


const TaskPage = () => {
    const [endpoint] = useState(process.env.REACT_APP_ENDPOINT);
    const [token] = useState(localStorage.getItem('usertoken'));
    const [loading, setloading] = useState(false);
    const [allTask, setallTask] = useState([]);
    let location = useLocation()
    let key = location.hash || '#uncompleted'
    // const { loading: allTaskLoad, data: allTasks, fetchData: allTasksFn } = useFetch('task')

    function fetchData(e) {
        setloading(true);
        axios.get(`${endpoint}/task`, {
            headers: {
                'Authorization': `Bearer ${token}`
            },
        }).then((res) => {
            if (res.data.success === false) {
                toast.warn(res.data.msg);
                setloading(false);
            } else {
                setloading(false);
                setallTask(res.data)
                // toast.success(res.data.msg);
            }
        }).catch((error) => {
            if (error.response.data) {
                setloading(false);
                toast.error(error.response.data.msg);
            } else {
                setloading(false);
            }
        });
    }
    useEffect(() => {
        fetchData()
    }, []);



    const [data, setData] = useState([]);

    useEffect(() => {
        if (key === '') {
            setData(allTask?.task)
        }
        if (key === '#all') {
            setData(allTask?.task)
        }
        if (key === '#completed') {
            setData(allTask?.task?.filter((tasks) => tasks?.completed === true))
        }
        if (key === '#important') {
            setData(allTask?.task?.filter((tasks) => tasks?.pinned === true))
        }
        if (key === '#uncompleted') {
            setData(allTask?.task?.filter((tasks) => tasks?.completed === false))
        }
    }, [location, allTask?.task]);


    return (
        <Wrapper pagename={'Task'}>
            {(loading)
                && <Loading load={loading} />}
            <main>

                <AddTask
                    allTasksFn={fetchData}
                />
                <AllTasks
                    allTasks={data || allTask?.task?.filter((tasks) => tasks?.completed === false)}
                    allTasksFn={fetchData}

                />
            </main>
        </Wrapper>
    );
}

export default TaskPage;