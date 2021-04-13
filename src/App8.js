import React, { createContext, useContext, useState } from "react";

// const App = () => {
//     const [value, setValue] = useState(0);
//     const onIncrement = () => {
//         setValue(prevValue => prevValue + 1);
//     }

//     return (
//         <div>
//             App: {value}
//             <button onClick={onIncrement}>+1</button>
//             <Level3 value={value} onIncrement={onIncrement}/>
//         </div>
//     );
// };

// const Level3 = ({ value, onIncrement }) => {
//     return (
//         <div>
//             Level3: {value}
//             <button onClick={onIncrement}>+1</button>
//         </div>
//     );
// };

const CounterContext = createContext();

const App = () => {
    const [value, setValue] = useState(0);
    const onIncrement = () => {
        setValue(prevValue => prevValue + 1);
    }

    return (
        <div>
            App: {value}
            <button onClick={onIncrement}>+1</button>
            <CounterContext.Provider value={{ value, onIncrement }}>
                <Level3 />
            </CounterContext.Provider>
        </div>
    );
};

const Level3 = () => {
    const { value, onIncrement } = useContext(CounterContext);
    return (
        <div>
            Level3: {value}
            <button onClick={onIncrement}>+1</button>
        </div>
    );
};

export default App;
