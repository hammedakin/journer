import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../Components/Dashboard/Header";
import AllNotes from "../Components/Note/AllNotes";
import Wrapper from '../Wrapper'


const Dashboard = () => {
    return (
        <Wrapper>

            <main>
                <Header />
                <AllNotes />
            </main>
        </Wrapper>
    );
}

export default Dashboard;