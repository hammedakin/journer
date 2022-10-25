import React from 'react';

const Features = () => {

    const features = [
        {
            icon: "bi-journal",
            title: "Share notes with friends",
            content: " Whether you have a team of 2 or 200, our shared team inboxes keep everyone on the same page and in the loop."
        },
        {
            icon: "bi-file-earmark-lock2",
            title: "Secured",
            content: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        },
        {
            icon: "bi-upload",
            title: "Auto Upload",
            content: "Measure what matters with Untitled’s easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
        },
    ]
    return (
        <section className="features text-center my-5 py-5">
            <div className="container">
                <h1 className=''> Features </h1>
                <div className="row justify-content-between">
                    {features.map(({ icon, title, content }, i) =>
                        <div className="col-lg-3 col-md-4">
                            <div className="my-3">
                                <i className={`bi p-3 bx bx-sm br-lg ${icon} `} />
                            </div>
                            <p className='fw-bold'>{title} </p>
                            <p className='my-3 small'>
                                {content}
                            </p>
                        </div>

                    )}
                </div>
            </div>
        </section>
    );
}

export default Features;