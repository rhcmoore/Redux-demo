import * as actionTypes from "../actions";

const initialState = {
    results: []
}

// sets a new state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.SAVE_RESULT:
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: action.result})  // concat returns new array - IMMUTABLE (not like .push)
            }
        case actionTypes.DELETE_RESULT:
            // ONE OPTION
            // const id = 2; 
            // const newArray = [...state.results]
            // newArray.splice(id, 1)

            // ANOTHER OPTION
            const updatedArray = state.results.filter(result => result.id !== action.resultElId);
            return {
                ...state,
                // results: newArray
                results: updatedArray
            }
        default:
            return state;
    }
}

export default reducer;