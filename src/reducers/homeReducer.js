const initialState = {
    title: 'Home'
};

const homeReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET TITLE':
            return {
                ...state,
                title: !state.title.endsWith('Page') ? state.title.concat(' Page') : state.title
            };
        case 'GET TITLE':
            return {

            };
        default : return state;
    }

};

export default homeReducer;