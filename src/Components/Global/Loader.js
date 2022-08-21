import './Loader.css'


const Loader = () => {
    return (
        <>
            <div className="loader"></div>
        </>
    );
}



export const Loading = ({ load }) => {
    return (
        <>
            {load && <Loader />}
        </>
    )
}

