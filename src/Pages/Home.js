import { Link, Navigate } from 'react-router-dom'
import Contact from '../Components/Home/Contact';
import Features from '../Components/Home/Features';
import Footer from '../Components/Home/Footer';
import Quote from '../Components/Home/Quote';
import Showcase from '../Components/Home/Showcase';

const Home = () => {

    if (localStorage.getItem('usertoken')) {
        return <Navigate to="/note" replace />
    }
    return (
        <>
            {/* <div className="d-flex mt-5 pt-5 align-items-center justify-content-center">
                <Link to="/login">
                    <button className="btn pry light-text">
                        Login
                    </button>

                </Link>
                <Link to="/register">
                    <button className="btn pry light-text ms-4">
                        Register
                    </button>

                </Link>
            </div> */}

            <main className="home">
                <Showcase />
                <Features />
                <Contact />
                <Quote />
                <Footer />
            </main>
        </>
    );
}

export default Home;