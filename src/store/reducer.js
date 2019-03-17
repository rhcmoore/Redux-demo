const initialState = {
    counter: 0,
    results: []
}

// sets a new state
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            const newState = Object.assign({}, state); // copy, but not a deep clone, of state
            newState.counter = state.counter + 1; // change values of new state
            return newState; // return new state object
        case "DECREMENT":
            return {
                ...state, // distribute properties/values in new object - IMMUTABLE
                counter: state.counter - 1 // add this property to object or update if present
            }
        case "ADD":
            return {
                ...state,
                counter: state.counter + action.val
            }
        case "SUBTRACT":
            return {
                ...state,
                counter: state.counter - action.val
            }
        case "SAVE_RESULT":
            return {
                ...state,
                results: state.results.concat({id: new Date(), value: state.counter})  // concat returns new array - IMMUTABLE (not like .push)
            }
        case "DELETE_RESULT":
            // ONE OPTION
            // const id = 2; 
            // const newArray = [...state.results]
            // newArray.splice(id, 1)

            // ANOTHER OPTION
            const id = 2; 
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