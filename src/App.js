import React from 'react';
import './App.css';
import {Route, Switch} from 'react-router-dom';
import Home from "./component/Home";
import About from "./component/About";
import Service from "./component/Service";
import Error from "./component/Error";
import Menu from "./component/Menu";

const App = () => {
    return (
        <div className="App">
            <Menu/>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/about' component={About}/>
                <Route path='/service' component={Service}/>
                <Route component={Error}/>
            </Switch>
        </div>
    );
};

export default App;
