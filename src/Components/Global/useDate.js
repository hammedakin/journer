export const useDate = (timestamp) => {

    // Get todays Date and Time
    // Get todays Date and Time

    function padTo2Digits(num) {
        return num.toString().padStart(2, '0');
    }

    let d = timestamp;
    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let day = d.getDate();
    let month = months[d.getMonth()]
    let year = d.getFullYear();
    let min = d.getMinutes();
    let hour = d.getHours();
    let time = `${padTo2Digits(hour)}:${padTo2Digits(min)}`
    let date = `${day} ${month} ${year}`
    // let timestamp = { date: currentDate, time: currentTime }

    // Get Current Date and Time
    // Get Current Date and Time

    return { date, time }
}
