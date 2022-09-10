import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Header from "../Components/Dashboard/Header";
import AllNotes from "../Components/Note/AllNotes";
import Wrapper from '../Wrapper'


const Dashboard = () => {
    let navigate = useNavigate()

    if (!localStorage.getItem('usertoken')) {
        setTimeout(() => {
            toast('Login/Register')
            navigate('/home')

        }, 10);
    }

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