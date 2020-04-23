import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as loginAction from '../action/loginActions'
import axios from "axios";

class Login extends Component {

    state = {
        username: '',
        password: '',
        showAlert: false
    };

    handleUsernameChange = e => {
        this.setState({username: e.target.value});
    };

    handlePwdChange = e => {
        this.setState({password: e.target.value});
    };

    handleSubmit = e => {
        e.preventDefault();
        return axios.post("http://localhost:8877/authenticate", this.state)
            .then((res) => {
                if (res.data.status) {
                    localStorage.setItem("token", res.data.jwt);
                    this.props.isAuthenticated();
                    this.props.history.push("/home")
                } else {
                    this.setState({
                        showAlert: true
                    })
                }
            });
    };


    render() {
        const {username, pwd, showAlert} = this.state;
        return (
            <div className="auth-wrapper">
                <div className="auth-inner">
                    {showAlert === true &&
                    <h6 className="auth-title"> Authentication Failed!</h6>}
                    <form onSubmit={this.handleSubmit}>
                        <h3>Sign In</h3>
                        <div className="form-group">
                            <label>Login</label>
                            <input value={username} onChange={this.handleUsernameChange} type="text"
                                   className="form-control"
                                   placeholder="Enter username"/>
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input value={pwd} onChange={this.handlePwdChange} type="password"
                                   className="form-control"
                                   placeholder="Enter password"/>
                        </div>

                        <button type="submit" className="btn btn-primary btn-block">Submit</button>
                        <p className="forgot-password text-right">
                            <a href="#">Forgot password?</a>
                        </p>
                    </form>
                </div>
            </div>
        );
    }
}

export default connect(state => ({
    loading: state.loginReducer.loading
}), {
    isAuthenticated: loginAction.isAuthenticated
})(Login);