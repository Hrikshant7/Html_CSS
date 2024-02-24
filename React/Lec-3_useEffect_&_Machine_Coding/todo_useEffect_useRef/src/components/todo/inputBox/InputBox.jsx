import { useState } from "react";

const InputBox = ({ addTask }) => {

    const [value, setValue] = useState(''); // value = ''

    const handleClick = () => {
        addTask(value);
        setValue('');
    }

    return(
        <div className="inputbox_container">
            <input 
               type="text" 
               placeholder="Enter your task"
               value={value}
               onChange={(event)=>{setValue(event.target.value)}}
            />
            <button onClick={handleClick}> Add task </button>
        </div>
    )
}

export default InputBox;