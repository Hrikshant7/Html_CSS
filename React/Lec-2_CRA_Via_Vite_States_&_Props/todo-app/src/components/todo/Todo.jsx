
import { React } from 'react';
import InputBox from "../inputBox/InputBox";
import ListItems from "../listItems/ListItems";

import './todo.css';

const Todo = () => {
    return(
        <>
            <h1>Todo App container</h1>
        
            <div className='todo-wrapper'>
                <InputBox />
                <ListItems />
            </div>
        </>
    )
}

export default Todo;