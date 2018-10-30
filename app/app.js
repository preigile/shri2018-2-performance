import App from "./components/App";

const root = document.getElementById('root');

console.log('app', App());

root.innerHTML = `${App()}`;
