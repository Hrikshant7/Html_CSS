

/**
 *  To understand the useEffect() - > built-in hook which will be used in functional component. 
 *     - need to the life cycle method of a component:
 *        - majorly component life cycle is divided into 3 parts/stages:
 *           1. mount: 
 *                 - Occurs when the FC is intially created and render on the real DOM.
 *                 - 2 things happen - (component created  and intially rendering takes place)
 *                 - useEffect(()=> {
 *                    // write the logic
 *                   }, []) //if array dependecy is empty then it will execute only once
 *           2. update:
 *                 - when either state or props or both is getting updated then component gets re-render.
 *                 - useEffect(()=> {
 *                    // write the logic
 *                   }, [dep1, dep2, ... depN]); if there is chnage in 
 *                  any one of the dependencies then your useEffect() is going to invoke again
 *           3. unmount:
 *                 - if you want to perform clean up activity (set data as null, detach the events, usage of clearInterval);
 *                 - useEffect(()=>{
 *                     return () => {
 *                       // here you perform the cleanup activity.
 *                     }
 *                   }, [])
 * 
 */

import { useEffect, useState } from "react";

const UseEffectUseCases = () => {

    // console.log('before rendering');

    const [count, setCount] = useState(0);

    const handleIncrement = () => {
        setCount(count+1);
    }

    useEffect(()=>{

        // Problem stmt: Let say you have to get data from server and render that dynamic data on load,
        //  logic of fetching data from server, you can here.
       console.log('Component get mounted');

       return ()=>{
        // perform the cleanup activity
        console.log('component unmounted');
       }

    }, []);

    useEffect(()=>{
       console.log('Component get updated', count+1);

    //    return ()=>{
    //     // perform the cleanup activity
    //     console.log('component unmounted');
    //    }
    }, [count]);

    return (
        // console.log('during renerding!'),
        <>
           <h1> Componnet life cycle stages</h1>
           <p>Count: {count}</p>
           <button onClick={handleIncrement}>+</button>
        </>
    )
}
export default UseEffectUseCases;

