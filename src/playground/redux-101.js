import { createStore } from 'redux';

//Action generators - function that return action objects

const incrementCount = ({incrementBy=1}={}) => {
    return {
        type: 'INCREMENT',
        incrementBy
    }
};
const decrementCount = ({decrementBy=1}={}) => {
    return {
        type: 'DECREMENT',
        decrementBy
    }
};
const setCount = ({count = 0}={}) => {
    return {
        type: 'SET',
        count
    }
};
const resetCount = () => {
    return {
        type: 'RESET'
    }
};

// Reducers

const countReducer = (state={ count: 0},action) => {
    
    switch (action.type){
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            const decrementBy = typeof action.decrementBy === 'number' ? action.decrementBy : 1;
            return {
                count: state.count - decrementBy
            }
        case 'RESET':
            return {
                count: 0
            }
        case 'SET':
            return {
                count: action.count
            }
        default:
            return state;
    }
}
const store = createStore(countReducer);

store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch(incrementCount({incrementBy: 5}));

store.dispatch(decrementCount({decrementBy: 10}));
store.dispatch(resetCount());

store.dispatch(setCount({count: 101}));


