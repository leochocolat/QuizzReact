import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascript/App';
import * as serviceWorker from './serviceWorker';
import ThemeProvider from './javascript/provider/ThemeProvider';
import ScoreProvider from './javascript/provider/ScoreProvider';


import './style/app.scss';

ReactDOM.render(
    <ThemeProvider>
    <ScoreProvider>
        <App />
    </ScoreProvider>,
    </ThemeProvider>,
    document.getElementById('root')
);

serviceWorker.unregister();
