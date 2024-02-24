import { useCounter } from "../../context/CounterProvider";

const GrandChild = () => {


    const {count} = useCounter();
    return (
        <>
          <h1>
            {count}
          </h1>
        </>
    )
}

export default GrandChild;