import React, { createContext, useContext, useReducer, useState } from "react";

const CounterContext = createContext();

const INCREMENT = "COUNTER/INCREMENT";
const DECREMENT = "COUNTER/DECREMENT";

const reducer = (prevState, action) => {
    const { type, payload: value = 1 } = action;
    if (type ===  INCREMENT) {
        return prevState + value;
    }
    else if (type === DECREMENT) {
        return prevState - value;
    }
    return prevState;
};

const actionIncrement = (value) => ({ type: INCREMENT, payload: value });
const actionDecrement = (value) => ({ type: DECREMENT, payload: value });

const App = () => {
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <div>
            <h1 onClick={() => dispatch(actionDecrement(10))}>App9: {state}</h1>
            <CounterContext.Provider value={{ state, dispatch }}>
                <GameBox />
            </CounterContext.Provider>
        </div>
    )
};

const GameBox = () => {
    const {state: counterValue, dispatch} = useContext(CounterContext);
    const onClick = () => {
        dispatch(actionIncrement(5));
    };

    return (
        <div>
            <h2>GameBox</h2>
            <button onClick={onClick}>{ counterValue }</button>
        </div>
    )
}

export default App;
