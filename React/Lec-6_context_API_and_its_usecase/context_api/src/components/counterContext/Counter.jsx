
import { useCounter } from "../../context/CounterProvider";
const Counter = () => {

    // const [count, setCount] = useState(0);

    const {increment} = useCounter();

    return(
        <>
          {/* <p>{count}</p> */}
          <button onClick={()=>{increment()}}>Increment</button>
        </>
    )

}

export default Counter;