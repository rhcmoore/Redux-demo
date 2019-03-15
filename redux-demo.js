// All necessary Redux components
const redux = require('redux'); // node.js syntax, not React here
const createStore = redux.createStore;
const initialState = {
    counter: 0
}

// Reducer
const rootReducer = (state = initialState, action) => {
    if (action.type === 'INC_COUNTER') {
        return {
            // not mutating data here
            ...state,
            counter: state.counter + 1
        }
    }
    if (action.type === 'ADD_COUNTER') {
        return {
            ...state,
            counter: state.counter + action.value
        }
    }
    return state;
};

// Store
const store = createStore(rootReducer);
console.log(store.getState());

// Subscription - triggered on state update
store.subscribe(()=> {
    console.log('[Subscription]', store.getState());
})

// Dispatching action
store.dispatch({ type: 'INC_COUNTER' }); // increment counter
store.dispatch({ type: 'ADD_COUNTER', value: 10 }); // add specific number to counter, passed with type
console.log(store.getState());

