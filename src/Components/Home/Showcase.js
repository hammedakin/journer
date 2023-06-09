import React from 'react';
import note from '../assets/note.png';
import InstallButton from '../Global/InstallButton';

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="col-lg-8">
                            <h1>
                                Enjoy note taking with your journal
                            </h1>
                            <p className='mt-3'>
                                Put down your thoughts down in one app, access them anywhere and any device.
                            </p>

                            <InstallButton>
                                <div className="btn dark-bg light-text my-3 py-1 px-3 br-sm ">
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
                            </InstallButton>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image">

                            <img src={note}
                                alt="Note "
                                className=''
                                width="50%"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default Showcase;