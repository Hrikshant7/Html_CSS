const ListItems = ({ tasks, deleteTask }) => {

    return(
        <div className="listitems_container">
            <ul>
                {
                    tasks && tasks.length ? tasks.map((task)=>{
                        return <li 
                           key={task.id} 
                           id={task.id}>
                            {task.taskName}
                            <button onClick={()=>{deleteTask(task.id)}}>X</button>
                        </li>
                    }): null
                }
            </ul>
        </div>
    )
}

export default ListItems;