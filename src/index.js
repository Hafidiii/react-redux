import React from 'react';
import ReactDOM from 'react-dom';
import './theme/css/index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router} from 'react-router-dom';
import {createStore} from "redux";
import combineReducers from "./redux/reducers";
import {Provider} from "react-redux";

const store = createStore(combineReducers);

ReactDOM.render(

      <Router>
          <Provider store={store}>
          <App/>
          </Provider>
      </Router>
 ,
  document.getElementById('root')
);

