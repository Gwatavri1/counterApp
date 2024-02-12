import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { register } from './serviceWorkerRegistration';

// ... other imports if necessary

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

register();

/*

let deferredPrompt;

window.addEventListener('beforeinstallprompt', (e) => {
  // Prevent Chrome 67 and earlier from automatically showing the prompt
  e.preventDefault();
  // Stash the event so it can be triggered later on the Install button event.
  deferredPrompt = e;
  // Update UI to notify the user they can add to home screen
  // You can also implement your logic here to make the 'Install' button visible
}); */

/* Call this function on your 'Install' button event handler
const handleInstallClick = () => {
  // Show the prompt
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      deferredPrompt = null;
    });
  }
};

// Make the function available globally to call it from anywhere, e.g. from a button's onClick event
window.handleInstallClick = handleInstallClick; */
