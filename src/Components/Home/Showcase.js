import React from 'react';
import note from '../assets/note.png'

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="col-lg-8">
                            <h1>
                                Enjoy note taking with your friends
                            </h1>
                            <p className='mt-5'>
                                Put down your thoughts down in one app, share
                                with your friends and loved ones.
                            </p>
                            <div className="btn dark-bg light-text mb-3 py-1 px-3 br-sm ">
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
}

export default Showcase;