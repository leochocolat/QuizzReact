import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascript/App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './javascript/provider/ThemeProvider';


import './style/app.scss';

ReactDOM.render(
    <ThemeProvider>
        <App />
    </ThemeProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
