import React, { useState } from 'react'
import useThunkReducer from "react-hook-thunk-reducer";
import { moreAction, lessAction, fetchRandomNumber } from './reducer/action-creators/counterActionCreators';
import { counterReducer } from './reducer/counterReducer';
import './Counter.scss';


const Counter = () => {
    const [state, dispatch] = useThunkReducer(counterReducer, { count: 0, loading: false });
    const [input, setInput] = useState(0);

    return (
        <div className="center-column">
            {state.loading 
                ? <h1>Loading...</h1>
                : <h1>The count is: {state.count}</h1>
            }
            <input onChange={(e) => setInput(parseInt(e.target.value))} />
            <div className="center-row counter-btns">
                <button onClick={() => dispatch(moreAction(input))}>More</button>
                <button onClick={() => dispatch(lessAction(input))}>Less</button>
                <button onClick={() => dispatch(fetchRandomNumber())}>Random Reset</button>
            </div>
        </div>
    )
};

export default Counter;
