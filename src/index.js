import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore, applyMiddleware} from "redux";
import persistedReducer from "./redux/reducers";
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from "react-redux";
import {loggerMiddleware} from "./redux/middleWare";

const store = createStore(persistedReducer, applyMiddleware(loggerMiddleware));
const persistor = persistStore(store);

ReactDOM.render(
    <Router>
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <App/>
            </PersistGate>
        </Provider>
    </Router>
    ,
    document.getElementById('root')
);
