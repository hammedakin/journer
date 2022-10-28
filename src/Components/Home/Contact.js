import React from 'react';
import group from '../assets/group.png'

const Contact = () => {
    return (
        <section className="contact py-5 my-5 text-center">
            <div className="container">
                <div className="py-5 grey-bg br-sm">
                    <img src={group} alt="Group avatar"
                    className='mb-4'
                    />
                    <p className="fw-bold mb-2">
                        Do you have any questions?
                    </p>
                    <p>We are available 24/7 to answer any question you have about Journer</p>
                    <button className="btn dark-bg light-text ">
                        Send a message
                    </button>
                </div>
            </div>
        </section>
    );
}

export default Contact;