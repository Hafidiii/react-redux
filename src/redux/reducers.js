import { combineReducers } from 'redux';
import homeReducer  from '../reducers/homeReducer'
import aboutReducer  from '../reducers/aboutReducer'
import serviceReducer  from '../reducers/serviceReducer'
import contactReducer  from '../reducers/contactReducer'
import {reducer as formReducer} from 'redux-form';

export default combineReducers({
    homeReducer,
    aboutReducer,
    serviceReducer,
    contactReducer,
    form: formReducer
});