const { produce } = require("immer");
const lo = require("lodash");

const fruits = ["오렌지", "사과", "레몬", "바나나"]

const newFruits = produce(fruits, draft => {
    draft.splice(1, 2, "딸기");
});

console.log(newFruits)

const baseState = [
    {todo: "Learn ES6+", done: true},
    {todo: "Try immer", done: false},
];

console.log(baseState);

const newBaseState = lo.cloneDeep(baseState);
newBaseState[1]["done"] = true;
newBaseState.push({todo: "Tweet about it"});

console.log(newBaseState);

const newState1 = [
    ...baseState.map((tweet, index) => 
        index === 1 ? {...tweet, done: true} : tweet),
    { todo: "Tweet about it"},
];

console.log(newState1);

const newState2 = produce(baseState, draft => {
    draft[1].done = true;
    draft.push({ todo: "Tweet about it"});
});

console.log(newState2);
