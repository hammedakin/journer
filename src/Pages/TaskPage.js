import Header from "../Components/Dashboard/Header";
import AddTask from "../Components/Tasks/AddTask";
// import AllNotes from "../Components/Note/AllNotes";
import Wrapper from '../Wrapper'


const TaskPage = () => {
    return (
        <Wrapper pagename={'Task'}>

            <main>
                {/* <Header /> */}
                <AddTask />

                {/* <AllNotes /> */}
            </main>
        </Wrapper>
    );
}

export default TaskPage;