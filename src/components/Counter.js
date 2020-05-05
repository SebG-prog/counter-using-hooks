import React, { useState } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState("")

    const handleChangeValue = (e) => {
        if (!isNaN(e.target.value)) {
        setValue(e.target.value)
        setCount(Number(e.target.value))
        } else {
        setMessage("Sorry, but you can only enter numbers here!")
        }
    }
    
    return (
        <div>
            <h3>Starting value for the counter: </h3>
            <input type="text" value={value} onChange={handleChangeValue} />
            <p style={{color:"red"}}>{message}</p>
            <h3>Le compteur est  à : {count} </h3>          
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
}

export default Counter;