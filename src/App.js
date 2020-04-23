import React from 'react';
import './asset/css/App.css';
import {connect} from 'react-redux';
import {
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import Login from "./component/Login";
import Home from "./component/Home";
import Menu from "./component/Menu";
import Error from "./component/Error";

const PrivateRoute = ({children, isAuthenticated, ...rest}) => {
    return (
        <Route
            {...rest}
            render={() =>
                isAuthenticated ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login"
                        }}
                    />
                )
            }
        />
    );
};

const logout = () => {

};
const App = ({isAuthenticated}) => {
        return (
            <div className="App">
                {isAuthenticated && <Menu logout={logout}/>}
                <Switch>
                    <PrivateRoute isAuthenticated={isAuthenticated}  path='/home'>
                        <Home/>
                    </PrivateRoute>
                    <Route path='/' exact component={Login}/>
                    <Route path='/login' component={Login} />
                    <Route component={Error}/>
                </Switch>

            </div>
        );
};

export default connect( state => ({
    isAuthenticated: state.loginReducer.isAuthenticated
})
)(App);
