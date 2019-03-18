import * as actionTypes from "./actionTypes";

// useful for async code
export const increment = () => {
    return {
        type: actionTypes.INCREMENT
    }
};

export const decrement = () => {
    return {
        type: actionTypes.DECREMENT
    }
};

export const add = (value) => {
    return {
        type: actionTypes.ADD,
        val: value // ref Counter.js mapDispatchToProps methods and inputs
    }
};

export const subtract = (value) => {
    return {
        type: actionTypes.SUBTRACT,
        val: value
    }
};