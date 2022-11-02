import React from 'react';


const Install = ({ children }) => {
    let deferredPrompt;

    window.addEventListener('beforeinstallprompt', (e) => {
        deferredPrompt = e;
    });


    const install = () => {
        window.addEventListener("beforeinstallprompt", (e) => {
            // Prevent Chrome 67 and earlier from automatically showing the prompt
            e.preventDefault();
            // Stash the event so it can be triggered later.
            deferredPrompt = e;

            // Show the prompt
            deferredPrompt.prompt();
            // Wait for the user to respond to the prompt
            deferredPrompt.userChoice.then((choiceResult) => {
                if (choiceResult.outcome === "accepted") {
                    console.log("User accepted the A2HS prompt");
                } else {
                    console.log("User dismissed the A2HS prompt");
                }
                deferredPrompt = null;
            });
        });
    }

    window.addEventListener('appinstalled', () => {
        // Clear the deferredPrompt so it can be garbage collected
        deferredPrompt = null;
        // Optionally, send analytics event to indicate successful install
        console.log('PWA was installed');
    });

    return (
        <>
            {/* <button onClick={() => install()}>
                click
            </button> */}
            <span
                onClick={() => alert('coming soon... ')}
            >
                {children}
            </span>

        </>
    );
}

export default Install;