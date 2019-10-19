import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { App } from './components';
import { ThemeProvider } from './contexts/theme';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase'
import {store, rrfProps} from './redux/store';

import './index.scss';
ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider>
            <ReactReduxFirebaseProvider {...rrfProps}>
                <App />
            </ReactReduxFirebaseProvider>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
);
serviceWorker.unregister();
