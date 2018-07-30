import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter, Route} from 'react-router-dom';
// import {ConnectedRouter} from 'react-router-redux';
import './index.css';
import App from './components/app';
import store from './redux/store';

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter >
            <Route component={App} />
        </BrowserRouter>
    </Provider>,
    document.getElementById('root')
);
