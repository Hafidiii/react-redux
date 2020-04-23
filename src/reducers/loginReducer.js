const LOGIN = 'LOGIN';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAIL = 'LOGIN_FAIL';
const IS_AUTHENTICATED = 'IS_AUTHENTICATED';
const DISCONNECT = 'DISCONNECT';

const initialState = {
    loading: false,
    loaded: true,
    isAuthenticated: false
};

const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                loading: true,
                loaded: false,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                token: action.result.jwt,
                loading: false,
                loaded: true,
            };
        case LOGIN_FAIL:
            return {
                ...state,
                statusErr: action.statusErr,
                loading: false,
                loaded: true,
            };
        case IS_AUTHENTICATED:
            return {
                ...state,
                isAuthenticated: true
            };
        case DISCONNECT:
            return {
                ...state,
                isAuthenticated: false
            };
        default:
            return state
    }
};


export default loginReducer