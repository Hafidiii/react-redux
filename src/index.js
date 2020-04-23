import React from 'react';
import ReactDOM from 'react-dom';
import './asset/css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router} from 'react-router-dom';
import {createStore} from "redux";
import persistedReducer from "./redux/reducers";
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from "react-redux";

const store = createStore(persistedReducer);
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
