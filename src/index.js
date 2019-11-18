import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascript/App';
import * as serviceWorker from './serviceWorker';

import './style/app.scss';

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

serviceWorker.unregister();
