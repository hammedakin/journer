import Header from "../Components/Dashboard/Header";
import AllNotes from "../Components/Note/AllNotes";
import Wrapper from '../Wrapper'


const Dashboard = () => {
    return (
        <Wrapper pagename={'Note'}>

            <main>
                <Header />
                <AllNotes />
            </main>
        </Wrapper>
    );
}

export default Dashboard;