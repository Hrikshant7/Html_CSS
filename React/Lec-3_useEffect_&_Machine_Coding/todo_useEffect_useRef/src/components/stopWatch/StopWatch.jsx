import { useState } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);

    const startHandler = () => {
        console.log('timer started');
    }
    const pauseHandler = () => {
        console.log('timer paused');
    }

    const stopHandler = () => {
        console.log('timer stopped');
    }

    return(
        <>
           <h1>Stop Watch</h1>
           <h3>{time}</h3>
           <button onClick={startHandler}>Start</button>
           <button onClick={pauseHandler}>Pause</button>
           <button onClick={stopHandler}>Stop</button>
        </>
    )
}

export default StopWatch;

