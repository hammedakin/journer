import React from 'react';

const Features = () => {

    const features = [
        {
            icon: "bi-file-earmark-lock2",
            title: "Secured",
            content: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
        },
        {
            icon: "bi-pin",
            title: "Pin Important Notes",
            content: "Notes that matters and are important can be pinned at the top of your jornal, you will access them first."
        },
        {
            icon: "bi-tag",
            title: "Notes Labels",
            content: "All notes can be given special tags, it helps when you want to filter certain notes of the same label."
        },
        {
            icon: "bi-archive",
            title: "Archive",
            content: "Notes that are not important but are relevant can be archived. Archived note will not appear in your notes but they are stored in archive."
        },
        {
            icon: "bi-journal",
            title: "Share notes with friends",
            content: "Notes in your journal can be shared"
        },
        {
            icon: "bi-list-task",
            title: "Tasks",
            content: "You can plan your schedule ahead of time by creating tasks."
        },
    ]
    return (
        <section className="features text-center my-5 py-5">
            <div className="container" id='features'>
                <h1 className=''> Features </h1>
                <div className="row justify-content-between">
                    {features.map(({ icon, title, content }, i) =>
                        <div className=" col-md-4" key={i}>
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