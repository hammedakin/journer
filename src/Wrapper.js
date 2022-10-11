import { ToastContainer } from 'react-toastify';
import useLocalStorage from 'use-local-storage'
import ProtectUser from './protectUser';
import Navbar from './Components/Nav/Navbar';

const Wrapper = ({ children, pagename ,theme }) => {

    const [darktheme, setdarktheme] = useLocalStorage('darktheme' ? 'dark' : 'light');
    const switchTheme = () => {
        const newTheme = darktheme === 'light' ? 'dark' : 'light';
        setdarktheme(newTheme)
    }

    return (
        <ProtectUser>
            <div className="dark-text" data-theme={darktheme}>
                <Navbar 
                theme={theme} 
                darktheme={darktheme}
                switchTheme={switchTheme}
                pagename={pagename}
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

        </ProtectUser>
    );
}

export default Wrapper;