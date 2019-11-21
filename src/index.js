import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascript/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from './javascript/provider/Provider';

import './style/app.scss';

ReactDOM.render(
    <Provider>
        <App />
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
