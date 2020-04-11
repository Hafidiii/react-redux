const LOAD = 'redux-form-examples/contactReducer/LOAD';

const contactReducer = (state = {}, action) => {
    switch (action.type) {
        case LOAD:
            console.log(action);
            return {
                data: action.data
            }
        default:
            return state
    }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data })

export default contactReducer