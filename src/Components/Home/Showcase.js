import React from 'react';
import circle from '../assets/circle.svg'
import note from '../assets/note.png'

const Showcase = () => {
    return (
        <section className="showcase">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <div className="title">
                            <h1>
                                Enjoy note taking with your friends
                            </h1>
                            <p className='mt-5'>
                                Put down your thoughts down in one app, share
                                with your friends and loved ones.
                            </p>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="image">

                            <img src={note}
                                alt="spiral Circle"
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