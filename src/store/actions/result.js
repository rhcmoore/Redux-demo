import * as actionTypes from "./actionTypes";

// async code HAS to go here
// shouldn't *heavily* prepare the state update

export const saveResult = (res) => {
    // Could change res here before returning
    return {
        type: actionTypes.SAVE_RESULT,
        result: res
    }
};

export const storeResult = (res) => {
    return (dispatch, getState) => {
        setTimeout(() => { // stand-in for HTTP request
            const oldCounter = getState().ctr.counter; // retrieving state before updating
            console.log(oldCounter);
            dispatch(saveResult(res)); // only synchronous actions may edit state in store
        }, 2000);
    }
};

export const deleteResult = (resElId) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: resElId
    }
};