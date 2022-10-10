
// Get  Date 
// Get  Date 

export function GetDate(e) {

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let day = e.getDate();
    let month = months[e.getMonth()]
    let year = e.getFullYear();
    let date = `${day} ${month} ${year}`

    return date
}

// Get Date 
// Get Date 

// Get  Time 
// Get  Time 

function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

export function GetTime(e) {

    let min = e.getMinutes();
    let hour = e.getHours();
    let time = `${padTo2Digits(hour)}:${padTo2Digits(min)}`

    return time
}

// Get Date
// Get Date 

// Get  Date n Time 
// Get  Date n Time 

export function GetDateTime(e) {

    let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    let day = e.getDate();
    let month = months[e.getMonth()]
    let year = e.getFullYear();
    let min = e.getMinutes();
    let hour = e.getHours();
    let time = `${padTo2Digits(hour)}:${padTo2Digits(min)}`
    let date = `${day} ${month} ${year}`

    return { date: date, time: time }
}

// Get Date n Time
// Get Date n Time 


// Format Date
// Format Date

export function formatDate(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}
export function formatDateTime(date) {
    return [
        date.getFullYear(),
        padTo2Digits(date.getMonth() + 1),
        padTo2Digits(date.getDate()),
    ].join('-');
}

// Format Date
// Format Date