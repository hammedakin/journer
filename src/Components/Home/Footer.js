import React from 'react';
import logo from '../assets/journer1.png';


const Footer = () => {
    return (
        <footer className="footer py-5">

            <div className="container">
                <div className="row align-items-center text-center text-md-start">
                    <div className="col-md-6">

                        <img src={logo} alt="Logo" width="40%" />
                    </div>
                    <div className="col-md-6 small grey-text text-md-end">

                        © 2022 JOURNER All rights reserved.
                        <p className=''>
                            Developed by <a href="http://hammedakin.xyz" target="_blank" rel="noopener noreferrer">Hammed Akin</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};
export default Footer;