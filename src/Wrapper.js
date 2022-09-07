import { ToastContainer } from 'react-toastify';
import Nav from './Components/Navbar/Nav';
import useLocalStorage from 'use-local-storage'

const Wrapper = ({ children, display, theme }) => {

    const [darktheme, setdarktheme] = useLocalStorage('darktheme' ? 'dark' : 'light');
    const switchTheme = () => {
        const newTheme = darktheme === 'light' ? 'dark' : 'light';
        setdarktheme(newTheme)
    }
    return (
        <>
            <div className=" d-flex dark-text" data-theme={darktheme}>
                <Nav 
                theme={theme} 
                // darktheme={darktheme}
                switchTheme={switchTheme}
                />
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