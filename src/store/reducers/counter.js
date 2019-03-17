import * as actionTypes from "../actions";

const initialState = {
    counter: 0
}

// sets a new state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.INCREMENT:
            const newState = Object.assign({}, state); // copy, but not a deep clone, of state
            newState.counter = state.counter + 1; // change values of new state
            return newState; // return new state object
        case actionTypes.DECREMENT:
            return {
                ...state, // distribute properties/values in new object - IMMUTABLE
                counter: state.counter - 1 // add this property to object or update if present
            }
        case actionTypes.ADD:
            return {
                ...state,
                counter: state.counter + action.val
            }
        case actionTypes.SUBTRACT:
            return {
                ...state,
                counter: state.counter - action.val
            }
        default:
            return state;
    }
}

export default reducer;