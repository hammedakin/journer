import { ToastContainer } from 'react-toastify';
import Nav from './Components/Navbar/Nav';

const Wrapper = ({ children, display, theme }) => {

    return (
        <>

            <div className=" d-flex">

                <Nav theme={theme} />
                <div className={`project-content  ${theme } `}>
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