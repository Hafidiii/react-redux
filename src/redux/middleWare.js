export const loggerMiddleware = store => next => action => {
    console.log("Dispatching: ", action.type);
    next(action);
};

export const confirmationMiddleware = store => next => action => {
    if (action.shouldConfirm) {
        //show alert
    } else {
        next(action);
    }
};