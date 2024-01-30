import { useState } from "react";
import CounterContext from "./CounterContext";
import { useContext } from "react";

const CounterProvider = ({children}) =>{

    const [count, setCount] = useState(0);

    const increment = () => {
       setCount(count+1);
    }

    const decrement = () => {
        setCount(count+1);
    }

    const data = "hello ashwani"

    // const data = useFetch();
    return(
        <CounterContext.Provider value={{count, increment, decrement, data}}>
          {children}
        </CounterContext.Provider>
    )
}

export const useCounter = () => {
    return useContext(CounterContext);
}

export default CounterProvider;