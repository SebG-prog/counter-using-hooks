import React, { useState, useEffect } from 'react';

function Counter() {

    const [count, setCount] = useState(0);
    const [value, setValue] = useState(0)
    const [message, setMessage] = useState("")

    const handleChangeValue = (e) => {
        if (!isNaN(e.target.value)) {
        setValue(e.target.value)
        setCount(Number(e.target.value))
        } else {
        setMessage("That's not a valide number")
        }
    }
    
    return (
        <div>
            <input type="text" value={value} onChange={handleChangeValue} />
            <p>Le compteur est  à : {count} </p>
            <p style={{color:"red"}}>{message}</p>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
}

export default Counter;