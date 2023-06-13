import { Link, Navigate } from 'react-router-dom'
import Contact from '../Components/Home/Contact';
import Features from '../Components/Home/Features';
import Footer from '../Components/Home/Footer';
import Navbar from '../Components/Home/Navbar';
import Quote from '../Components/Home/Quote';
import Showcase from '../Components/Home/Showcase';

const Home = () => {

    return (
        <>
                <main className="home">
                <Navbar/>
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