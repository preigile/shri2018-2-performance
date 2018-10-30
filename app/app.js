import App from "./components/App";

// import './scripts/scripts';
import './styles/bootstrap.css';
import './styles/styles.css';

const root = document.getElementById('root');

console.log('app', App());

root.innerHTML = `${App()}`;
