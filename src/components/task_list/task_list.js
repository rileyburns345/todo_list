import React, {useState} from 'react'

const TaskList = props => {

    const deleteTask = i => {
        console.log(i)
        const list = props.tasks.filter((task, j) => i !== j)
        props.setTasks(list)
    }

    const completeTask = i => {
        const list = props.tasks.map((task, j) => {
            if(j === i){
                if (task.complete === true){
                    task.complete = false
                }
                else {
                    task.complete = true
                }
                return task
            }
            else {
                return task
            }
        })
        props.setTasks(list)
    }

    return (
        <div>
            <h4>Task List</h4>
            <ul>
            {
                props.tasks.map((task , i) => {
                    if (task.complete === false) {
                        return (
                        <div>
                            <li style={{color: "black"}}>{task.desc}</li>
                            <input id={i} type="checkbox" onChange={() => completeTask(i)}/>
                            <button onClick={() => deleteTask(i)}>Delete</button>
                        </div>)
                    }
                    else {
                        return (
                        <div>
                            <li style={{color: "red"}}>{task.desc}</li>
                            <input id={i} type="checkbox" onChange={() => completeTask(i)}/>
                            <button onClick={() => deleteTask(i)}>Delete</button>
                        </div>)
                    }
                })
            }
            </ul>
        </div>
    )
}

export default TaskList