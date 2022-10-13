import TaskPin from './TaskFooter/TaskPin';
import TaskCompleted from './TaskFooter/TaskCompleted';
import TaskDelete from './TaskFooter/TaskDelete';

const TaskFooter = ({ taskId, pin, completed, allTasksFn }) => {

    return (
        <>
            <div className="col-1 m-0 p-0">
                <TaskCompleted
                    taskId={taskId}
                    done={completed}
                    allTasksFn={allTasksFn}
                />
                <TaskPin
                    taskId={taskId}
                    pin={pin}
                    allTasksFn={allTasksFn}
                />
                <TaskDelete
                    taskId={taskId}
                    allTasksFn={allTasksFn}
                />

           </div>
        </>
    );
}

export default TaskFooter;