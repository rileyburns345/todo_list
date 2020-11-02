import React, {useState} from 'react'

const AddTaskForm = props => {

    const [task, setTask] = useState('')

    const getTask = e => {
        setTask(e.target.value)
    }

    const createTaskObject = (e) => {
        e.preventDefault()
        const resArr = [...props.tasks].concat({
            desc: task, complete: false
        })
        props.setTasks(resArr)
    }

    console.log('task: ', task)
    return (
        <div>
            <h2>Add Task Form</h2>

            <form onSubmit={createTaskObject}>
                <label>Add Task</label>
                <input type="text" onChange={event => getTask(event)}/>
                <button type="subimt">Add</button>
            </form>
        </div>
    )
}

export default AddTaskForm