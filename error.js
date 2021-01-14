import React, { useState } from 'react';
import './error.css';



const CounterApplication = () => {

    const [count, setCount] = useState(3);
     
    const counterReset = () => {
        setCount(0);
    }
    
    return (
        <>
        <div className="container">
            <h1>Counter Application</h1>
        <br/><br/>
        <span>{count}</span>
        <br/><br/>
        <button onClick={() => setCount(count + 1)}> Increase </button>
        <button onClick={counterReset}>Reset</button>
        <button onClick={() => setCount(count -1)}>Decrease</button>
        </div>
        
        </>
    )
}


export default CounterApplication;