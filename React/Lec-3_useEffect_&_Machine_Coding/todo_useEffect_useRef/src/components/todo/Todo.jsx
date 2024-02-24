
import { useState } from 'react';
import InputBox from "./inputBox/InputBox";
import ListItems from "./listItems/ListItems";

import './todo.css';
// Presentationl/container component design pattern
// when we send the state value from child to parent 
// component via function as props from parent to child, then it is know as Lifting state up.

/**
 * 
    Lifting state up: passing/sharing data from child to parent component.
    React Dev tool: a browser extension that helps to the developers to debug inspect their code and make understanding of components state and props.
 */
const Todo = () => {

   const [tasks, setTasks] = useState([]); // tasks = []

   const newTasks = [...tasks];

   const addTask = (currentTask) => {

      newTasks.push({
        id: Date.now(),
        taskName: currentTask
      });

      setTasks(newTasks);
   }

   const deleteTask = (id) => {
      console.log(id);

      const restOfTasks = tasks.filter((task)=>{
         return task.id !== id;
      });

      setTasks(restOfTasks);
   }

   // Please use referesh part to get the data from local storage

    return(
        <div className='todo-wrapper'>
            <h1>Todo App</h1>

            <InputBox addTask={addTask}/>
            <ListItems tasks={tasks} deleteTask={deleteTask}/> {/** You can update the props via state variable */}
            {/** Either the state or props or both are getting updated then the component will surely re-render */}
        </div>
    )
}

export default Todo;