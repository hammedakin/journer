import {Link } from 'react-router-dom'

const Home = () => {
    return ( 
        <>
            <div className="d-flex mt-5 pt-5 align-items-center justify-content-center">
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
        </div>
        </>
     );
}
 
export default Home;