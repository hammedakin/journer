import React from 'react';
import note from '../assets/note1.png'
import Install from '../Global/Install';


const Quote = () => {
    return (
        <section className="quote mt-5 pt-5 dark-bg light-text text-center text-md-start">
            <div className="container">
                <div className="row align-items-center justify-content-between" >
                    <div className="col-md-7 ">
                        <p className="small">
                            Download JORNER
                        </p>
                        <h1 className="mt-4">
                            Join over 20,000+ users
                            and make your life easier.
                        </h1>
                        <Install>

                        <div className="btn light-bg dark-text mb-3 py-1 px-3 br-sm ">
                            <div className="d-flex align-items-center">
                                <span>
                                    <i className='bi bi-github me-2 h5' />
                                </span>
                                <span>
                                    <small>
                                        INSTALL
                                    </small>
                                    <p className="fw-bold m-0">
                                        JOURNER
                                    </p>
                                </span>
                            </div>
                        </div>
                        </Install>
                    </div>
                    <div className="col-md-4">
                        <div className="image">

                            <img src={note}
                                alt="Note "
                                className=''
                                width="100%"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Quote;