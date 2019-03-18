import * as actionTypes from "../actions/actionTypes";
import { updateObject } from "../utility";

const initialState = {
    results: []
}

const deleteResult = (state, action) => {
    const updatedArray = state.results.filter(result => result.id !== action.resultElId);
    return updateObject(state, {results: updatedArray});
};

// pure, sync code only
// Reducers update the state - core Redux function

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RESULT : return updateObject(state, {results: state.results.concat({ id: new Date(), value: action.result }) }) // concat returns new array - IMMUTABLE (not like .push)
        case actionTypes.DELETE_RESULT : return deleteResult(state, action);
        default:
            return state;
    }
};

export default reducer;