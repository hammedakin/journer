import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import FilterTasks from './FilterTasks';
import EmptyList from "../Global/EmptyList";

const AllTasks = ({ loading, allTasks, allTasksFn, name }) => {
    let location = useLocation()

    let key = location.hash || '#uncompleted'

    const links = [
        {
            id: 'important',
            name: <i className='bi bi-star-fill' />
        },
        {
            id: 'all',
            name: 'All'
        },
        {
            id: 'uncompleted',
            name: 'Uncompleted'
        },
        {
            id: 'completed',
            name: 'Completed'
        },
    ]

    return (
        <>
            <section className=" mt-4 alltasks">
                <div className="first d-flex">
                    {links?.map(({ name, id }) =>
                        <Link
                            to={`/task/#${id}`} className='dark-bold-text '
                            key={id}>
                            <div className={`mx-2 pb-2 ${key === `#${id}` ? 'active-task' : null}`}>
                                {name}
                            </div>
                        </Link>
                    )}

                </div>
                {!loading && !allTasks?.length ?
                    <div className="py-5">
                        <EmptyList
                            icon={'bi-list-task'}
                            text={`No ${name === "All" ? '' : name} task`}
                        />
                    </div>
                    : null
                }
                <FilterTasks
                    allTasks={allTasks}
                    allTasksFn={allTasksFn}
                />
            </section>

        </>
    );
}

export default AllTasks;