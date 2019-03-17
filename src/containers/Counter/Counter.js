import React, { Component } from 'react';
import { connect } from "react-redux";

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = (action, value) => {
        switch (action) {
            case 'inc':
                this.setState((prevState) => { return { counter: prevState.counter + 1 } })
                break;
            case 'dec':
                this.setState((prevState) => { return { counter: prevState.counter - 1 } })
                break;
            case 'add':
                this.setState((prevState) => { return { counter: prevState.counter + value } })
                break;
            case 'sub':
                this.setState((prevState) => { return { counter: prevState.counter - value } })
                break;
            default:
                this.setState((prevState) => { return { counter: prevState.counter + 0 } })
        }
    }

    render() {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter} />
                <CounterControl label="Add 5" clicked={this.props.onAddCounter} />
                <CounterControl label="Subtract 5" clicked={this.props.onSubtractCounter} />
                <hr />
                <button onClick={this.props.onSaveResult}>Save Result</button>
                <ul>
                    {this.props.storedResults.map(result => (
                        <li key={result.id} onClick={() => this.props.onDeleteResult(result.id)}>{result.value}</li>
                    ))}
                </ul>
            </div>
        );
    }
}

// instructions on how state should be mapped to props used in container
const mapStateToProps = state => {
    return {
        ctr: state.counter, // in the form of prop ctr, give value of counter in global state 
        storedResults: state.results
    };
};

// which kinds of actions we dispatch in this container
const mapDispatchToProps = dispatch => {
    // object that defines prop names that hold reference to function, 
    // which when executed dispatch an action
    return {
        onIncrementCounter: () => dispatch({ type: "INCREMENT" }),
        onDecrementCounter: () => dispatch({ type: "DECREMENT" }),
        onAddCounter: () => dispatch({ type: "ADD", val: 5 }),
        onSubtractCounter: () => dispatch({ type: "SUBTRACT", val: 5 }),
        onSaveResult: () => dispatch({ type: "SAVE_RESULT" }),
        onDeleteResult: (id) => dispatch({ type: "DELETE_RESULT", resultElId:id})
    }
}

// connect is a function that returns a hoc
export default connect(mapStateToProps, mapDispatchToProps)(Counter);