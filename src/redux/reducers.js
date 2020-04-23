import { combineReducers } from 'redux';
import homeReducer  from '../reducers/homeReducer'
import loginReducer  from '../reducers/loginReducer'
import {reducer as formReducer} from 'redux-form';
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web

const reducers = combineReducers({
    homeReducer,
    loginReducer,
    form: formReducer
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export default persistedReducer;