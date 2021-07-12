import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css'
import * as serviceWorker from './serviceWorker';
import { defineCustomElements } from '@ionic/pwa-elements/loader';

/* This is the app's index, this calls the render function on the App component and includes any other packages & libraries we need */

ReactDOM.render(<App />, document.getElementById('root'));

defineCustomElements(window);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
