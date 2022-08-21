import { ToastContainer } from 'react-toastify';
import Nav from './Components/Navbar/Nav';



const Wrapper = ({ children, display }) => {
    return (
        <>

            <div className=" d-flex">

                <Nav />
                <div className="project-content">
                    <div className="container-fluid">
                        {children}
                </div>
                </div>
            </div>

            <ToastContainer
                position="bottom-left"
                autoClose={1500}
                theme="dark"
                className="small"
                hideProgressBar={true}
            />

        </>
    );
}

export default Wrapper;