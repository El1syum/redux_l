import React from 'react';
import {useDispatch, useSelector} from "react-redux";

const App = () => {
    const dispatch = useDispatch()
    const cash = useSelector(state => state.cash)

    const addCash = (cash) => {
        dispatch({type:'ADD', payload: cash})
    }

    const wasteCash = (cash) => {
        dispatch({type:'GET_CASH', payload: cash})
    }

    return (
        <div>
            <div>{cash}</div>
            <div style={{display: 'flex'}}>
                <button onClick={() => addCash(Number(prompt()))}>Add</button>
                <button onClick={() => wasteCash(Number(prompt()))}>Waste</button>
            </div>
        </div>
    );
};

export default App;