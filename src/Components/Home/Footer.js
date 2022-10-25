import React from 'react';
import logo from '../assets/logo.svg'


const Footer = () => {
    return (
        <footer className="footer py-5">

            <div className="container">
                <div className="row align-items-center text-center text-md-start">
                    <div className="col-md-6">

                    <img src={logo} alt="Logo" width="30%" />
                    </div>
                    <div className="col-md-6 small grey-text text-md-end">

                        © 2022 JOURNER All rights reserved.
                    {/* <p className=''>
                    </p> */}
                    </div>
                </div>
            </div>
        </footer>
    );
}
export default Footer;