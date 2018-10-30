import usefulScripts from './scripts/scripts';
import App from "./components/App";

import './styles/bootstrap.css';
import './styles/styles.css';

const root = document.getElementById('root');

console.log('app', App());

root.innerHTML = `${App()}`;

usefulScripts();
