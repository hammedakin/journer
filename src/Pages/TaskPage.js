import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Loading } from "../Components/Global/Loader";
import { useFetch } from "../Components/Global/useFetch";
import AddTask from "../Components/Task/AddTask";
import AllTasks from "../Components/Task/AllTasks";
import Wrapper from '../Wrapper'


const TaskPage = () => {

    let location = useLocation()
    let key = location.hash || '#uncompleted'
    const { loading, data: allTask, fetchData } = useFetch('task')
    const [name, setname] = useState('Uncompleted');

    const [data, setData] = useState([]);

    useEffect(() => {
        if (key === '') {
            setname('Uncompleted')
            setData(allTask?.task)
        }
        if (key === '#all') {
            setname('All')
            setData(allTask?.task)
        }
        if (key === '#completed') {
            setname('Completed')
            setData(allTask?.task?.filter((tasks) => tasks?.completed === true))
        }
        if (key === '#important') {
            setname('Important')
            setData(allTask?.task?.filter((tasks) => tasks?.pinned === true))
        }
        if (key === '#uncompleted') {
            setname('Uncompleted')
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
                    name={name}
                    loading={loading}
                />
            </main>
        </Wrapper>
    );
}

export default TaskPage;