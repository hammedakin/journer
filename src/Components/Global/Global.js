import React, { useState, useEffect } from 'react';
// Get todays Date and Time
// Get todays Date and Time
function padTo2Digits(num) {
    return num.toString().padStart(2, '0');
}

let d = new Date()
let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

let date = d.getDate();
let month = months[d.getMonth()]
let year = d.getFullYear();
let min = d.getMinutes();
let hour = d.getHours();


export let currentTime = `${padTo2Digits(hour)}:${padTo2Digits(min)}`

export let currentDate = `${date} ${month} ${year}`


    // Get Current Date and Time
    // Get Current Date and Time