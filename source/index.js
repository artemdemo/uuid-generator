import App from './App.svelte';

const app = new App({
    target: document.getElementById('app'),
    props: {
        name: 'world'
    }
});

window.app = app;

if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(function() {
                console.log('Service Worker Registered');
        });
}

export default app;