import axios from 'axios';
import {useDispatch} from "react-redux";

export const login = (credential) => {
    console.log('credential ->', credential);
    return axios.post("http://localhost:8877/authenticate", credential)
        .then((res) => {
            console.log(res);
            useDispatch({
                type: "LOGIN_SUCCESS",
                result: res.data
            });
        })
        .catch((err) => {
            console.log(err);
            useDispatch({
                type: "LOGIN_FAIL",
                statusErr: err.data.status
            });
        });
};

export const isAuthenticated = () => {
    return {type: 'IS_AUTHENTICATED'}
};

export const logout = () => {
    localStorage.removeItem("token");
    return {type: 'DISCONNECT'}
};