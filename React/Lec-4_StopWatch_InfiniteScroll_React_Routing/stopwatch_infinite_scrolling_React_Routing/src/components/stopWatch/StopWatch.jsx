import { useState, useRef, useEffect } from "react";

const StopWatch = () => {
    const [time, setTime] = useState(0);
    //const [timerId, setTimerId] = useState(0); -> This not right solution, 
    //because on every state variable value updation the whole comp will get re-rendered.

    // useRef(): it is used to preserve/persist the data across multiple re-rendering.
                 // return a mutuable object which persist through the component re-rendering within its ref.
                // ref.current -> timerId.current
    const myRef = useRef(null);

    useEffect(()=>{
        return () =>{
            clearInterval(myRef.current);
        }
    }, []);

    // useEffect(()=>{
    //     return () =>{
    //         clearInterval(myRef.current);
    //     }
    // }, [val]);

    const startHandler = () => {
        console.log('timer started');
        console.log(myRef, myRef.current);

    
        myRef.current = setInterval(()=>{
            //1. incementing the time state varibale value by 1
            //setTime(time+1);
            //2. When you want to update next state then you need to use prev state value ->
                 // use cb based syntax of setTime() -> set methods
            // setTime((prevTime) => {
            //     return prevTime + 1;
            // });
            setTime(prevTime => prevTime + 1);
        }, 1000);

    }
    const pauseHandler = () => {
        console.log('timer paused');
        clearInterval(myRef.current);
    }

    const resetHandler = () => {
        console.log('timer has been reset');
        clearInterval(myRef.current);
        setTime(0);
    }

    return(
        <>
           <h1>Stop Watch</h1>
           <h3>{time}</h3>
           <button onClick={startHandler}>Start</button>
           <button onClick={pauseHandler}>Pause</button>
           <button onClick={resetHandler}>Reset</button>
        </>
    )
}

export default StopWatch;

