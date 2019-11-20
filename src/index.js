import React from 'react';
import ReactDOM from 'react-dom';
import App from './javascript/App';
import * as serviceWorker from './serviceWorker';
import {Provider} from './javascript/provider/Provider';
import ScoreProvider from './javascript/provider/ScoreProvider';

import './style/app.scss';

ReactDOM.render(
    <Provider>
        <ScoreProvider>
            <App />
        </ScoreProvider>,
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
