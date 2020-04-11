import * as Types from "../types/serviceTypes";

const initialState = {
    title: 'Service',
    datas: {
        firstName: 'Jack',
        lastName: 'Better',
        email: 'jack.better@gamil.com'
    }
};

const serviceReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOAD':
            console.log(action);
            return {
                ...state,
                data: action.data
            };
        case Types.SET_TITLE:
            return {
                ...state,
                title: 'Title is changed'
            };
        default :
            return state;
    }
};

export default serviceReducer;