
export function setArr(title, arr) {
    localStorage.setItem(title, JSON.stringify(arr))
}
export function getArr(title) {
    JSON.parse(localStorage.getItem(title))
}
export function setData(title, data) {
    localStorage.setItem(title, data)
}
// export function getData(title) {
//     localStorage.getItem(title)
//     console.log(title);
// }
export function removeData(title) {
    localStorage.removeItem(title)
}
