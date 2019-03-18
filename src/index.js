import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';
import { Provider } from "react-redux";

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
});

// homebrew middleware for example
const loggerMiddleware = store => {
    return next => {  // function executed to let action continue on to reducer
        return action => { // function executing the work between action and reducer 
            console.log("[Middleware] Dispatching, loggin action:", action); // log the action
            const result = next(action); // lets action continue to reducer
            console.log("[Middleware] next state, logging store.getState()", store.getState());
            return result
        }
    }
}

// 1.2 Advanced store setup https://github.com/zalmoxisus/redux-devtools-extension
const componseEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // compose is a fallback from redux

// second argument is an 'enhancer'/middleware + could be a comma-separated list
const store = createStore(rootReducer, componseEnhancers(applyMiddleware(loggerMiddleware)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();