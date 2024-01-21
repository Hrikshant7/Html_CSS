/**
 *  Real World Scenario:
 *    - Problem: a web page which you built in react then there might be the complex UI exist,
 *               which contains the heavier assests like images/videos or complex logic as well.
 * 
 *    - Solution:
 *       - start with skeleton or loader to show UI.
 *       - render the loader
 *       - As soon as you get the data from server then render the actual data and close the loader.
 * 
 * 
 * 
 */

import { useEffect, useState } from "react";

const UseEffectRequestAPI = () => {

    const [data, setData] = useState(null);
    const [val, setVal] = useState(1);

    const fetchUser = async() => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/users/${val}`);
        const userData  = await res.json();
        setData(userData);
    }

    // fetchUser();
    useEffect(()=>{
        fetchUser();
    }, [val]);

    return(
        <>
           <h2> Making API request to get the 
            dynamic data and render the data on load</h2>

            { 
               !data ? (<h2>Loading...</h2>):

                (
                    <>
                    <h2>Name:{data.name}</h2>
                    <h2>Email:{data.email}</h2>
                    <h2>User Name:{data.username}</h2>
                    </>
                )
            }
        </>
    )
}

export default UseEffectRequestAPI;