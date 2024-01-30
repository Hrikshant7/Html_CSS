import Counter from "./components/counterContext/Counter"
import Child from "./components/propsDrillingProblem/Child"
import GrandChild from "./components/propsDrillingProblem/GrandChild"
import Parent from "./components/propsDrillingProblem/Parent"
import CounterProvider from "./context/CounterProvider"

function App() {
  return (
    <>
     <CounterProvider>
        <Parent />
        <Counter />
        {/* <Child /> */}
        {/* <GrandChild /> */}
      </CounterProvider>
    </>
  )
}

export default App
