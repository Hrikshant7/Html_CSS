import { useState } from 'react';
const Counter = () => {
    const [count, setCount] = useState(0);

    const handleIncrement = () => {
       setCount(count+1);
    }

    const handleDecrement = () => {
        setCount(count-1);
    }

    return (
        <>
            <h2>Counter without redux</h2>
            <button onClick={handleIncrement}>+</button>
            <p>count: {count}</p>
            <button onClick={handleDecrement}>-</button>
        </>
    )
}


export default Counter;