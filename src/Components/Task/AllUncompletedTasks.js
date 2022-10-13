import React from 'react';
import { useLocation } from 'react-router-dom';
import { GetDate } from '../Global/GetDate';
import TaskFooter from './TaskFooter';

const AllUncompletedTasks = ({ allTasks, allTasksFn }) => {


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
                                <div className="col-lg-8 mx-auto mt-3 py-3" key={_id}>
                                    <div className="d-flex justify-content-between ">
                                        <div className="">
                                            <p className="m-0">
                                                {task}
                                            </p>
                                            <div className=" border fit-content br-xlg py-1 px-2 pry-bold-text small">
                                               {GetDate(new Date(date))}, {time}
                                            </div>
                                        </div>
                                        <TaskFooter
                                            allTasksFn={allTasksFn}
                                            taskId={_id}
                                            pin={pinned}
                                            completed={completed}
                                        />
                                    </div>
                                </div>
                                <hr />
                            </>
                        )

                    }).reverse()
                }
            </section>
        </>
    );
}

export default AllUncompletedTasks;