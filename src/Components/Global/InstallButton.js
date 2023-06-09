import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';

const InstallButton = ({ children }) => {
      const [deferredPrompt, setDeferredPrompt] = useState(null);
      useEffect(() => {
            // Listen for the "beforeinstallprompt" event
            const handleBeforeInstallPrompt = (event) => {
                  event.preventDefault();
                  setDeferredPrompt(event);
            };

            window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

            return () => {
                  window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
            };
      }, []);

      const handleInstallClick = () => {
            // if (!deferredPrompt) {
            //       return;
            // }
            if (deferredPrompt) {
                  deferredPrompt.prompt();
                  deferredPrompt.userChoice.then((choiceResult) => {
                        if (choiceResult.outcome === 'accepted') {
                              console.log('User accepted the installation prompt.');
                        } else {
                              console.log('User dismissed the installation prompt.');
                        }
                        setDeferredPrompt(null);
                  });
            } else {
                  toast.success('Journer has been installed.');
            }
            // console.log(!deferredPrompt);
      };

      return (
            <>
                  <span onClick={handleInstallClick}
                  // disabled={!deferredPrompt}
                  >
                        {children}
                  </span>
                  <ToastContainer
                        position="bottom-left"
                        autoClose={1500}
                        theme="dark"
                        className="small"
                        hideProgressBar={true}
                  // transition="slide"

                  />
            </>
      );
};

export default InstallButton;
