import { useDispatch, useSelector } from "react-redux";
import { counterInputAction } from '../../redux/slice/CounterInputSlice';
const CounterInputWithRedux = () => {

    const counterObj = useSelector((store) => {
        return store.counterInput;
    });

    const {count , delta } = counterObj;

    console.log(counterObj);

    const dispatch = useDispatch();

    const handleIncrement = () => {
      dispatch(counterInputAction.increment());
    }

    const handleDecrement = () => {
      dispatch(counterInputAction.decrement());
    }

    const changeHandler = (event) => {
        const val = Number(event.target.value);
        dispatch(counterInputAction.udpdateDelta(val));
    }

    return (
        <>
            <h2>Counter Input With Redux</h2>
            <button onClick={handleIncrement}>+</button>
            <p>count: {count}</p>
            <button onClick={handleDecrement}>-</button>
            <input 
              type="text"
              value={delta}
              onChange={changeHandler}
            />
        </>
    )
};

export default CounterInputWithRedux;