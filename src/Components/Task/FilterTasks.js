import React from 'react';
import { useLocation } from 'react-router-dom';
import { GetDate } from '../Global/GetDate';
import EditTask from './EditTask';
import TaskFooter from './TaskFooter';

const FilterTasks = ({ allTasks, allTasksFn }) => {

    let location = useLocation()
    let key = location.hash

    return (
        <>

            <section className="task">
                {
                    allTasks?.map((item) => {
                        const { task, date, time, completed, pinned, _id } = item
                        return (
                            <>
                                <div className="col-lg-8 mx-auto mt-3" key={_id}>
                                    <div className="d-flex justify-content-between ">
                                        <EditTask
                                            allTasksFn={allTasksFn}
                                            taskId={_id}
                                            data={item}
                                        >
                                            <p className="m-0">
                                                {task}
                                            </p>
                                            {(date || time) &&
                                                <small className=" border fit-content br-xlg py-1 px-2 pry-bold-text small">
                                                    {date && GetDate(new Date(date))}
                                                    {(date && time) && ', '}

                                                    {time && time}
                                                </small>
                                            }
                                        </EditTask>
                                        <TaskFooter
                                            allTasksFn={allTasksFn}
                                            taskId={_id}
                                            pin={pinned}
                                            completed={completed}
                                        />
                                    </div>
                                    <hr className='' />
                                </div>
                            </>
                        )

                    }).reverse()
                }
            </section>
        </>
    );
}

export default FilterTasks;