import { combineReducers } from 'redux';
import homeReducer  from '../reducers/homeReducer'
import aboutReducer  from '../reducers/aboutReducer'
import serviceReducer  from '../reducers/serviceReducer'

export default combineReducers({
    homeReducer,
    aboutReducer,
    serviceReducer
});