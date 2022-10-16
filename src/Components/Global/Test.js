import React, { useState, useEffect } from "react";
import { setData } from "./LocalStorage";


function App() {
    // const [permission, setpermission] = useState(localStorage.getItem('perm'));
  
    // console.log(permission);
    function notify() {
        Notification.requestPermission().then((perm) => {
            if (perm === 'granted') {
                new Notification('New Notify')
                // alert('hre')
            }
        })
    }
    return (
        <>
            <button onClick={notify}>
                click
            </button>
        </>
    );


}
export default App;