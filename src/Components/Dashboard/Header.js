import { useEffect } from "react";
import { useState } from "react";



const Header = () => {
    const [currentDate, setcurrentDate] = useState('');
    const [currentTime, setcurrentTime] = useState('00:00:00');

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    let d = new Date()
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();
    let min = d.getMinutes();
    let hour = d.getHours();
    let sec = d.getSeconds();
    let time = `${padTo2Digits(hour)}:${padTo2Digits(min)}:${padTo2Digits(sec)}`

    useEffect(() => {
        setcurrentDate(`${day}, ${date} ${month} ${year}`)
    }, []);
    function ticky() {
        return new Date().toLocaleTimeString()
    }
    setInterval(() => {
        setcurrentTime(ticky())
    }, 1000);
    return (
        <>
            <section className="header">
                <div className="row justify-content-between border py-4 br-sm light-bg ">
                    <div className="col mb-3">
                        <h3 className="">
                            Hello, {localStorage.getItem('name')}
                            <i className="bi bi-lightning-charge-fill ms-2 text-warning" />
                        </h3>
                    </div>
                    <div className="col-md-5">
                        <div className="text-md-end">
                            <h6 className="fw-bold"> {currentDate}</h6>
                            <p> {currentTime} </p>
                            {/* <p>{time}</p> */}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Header;