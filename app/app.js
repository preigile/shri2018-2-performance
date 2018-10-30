import usefulScripts from './scripts/scripts';
import App from "./components/App";

import './styles/styles.css';
import './styles/bootstrap.css';

const root = document.getElementById('root');

console.log('app', App());

root.innerHTML = `${App()}`;

usefulScripts();
