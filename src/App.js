import logo from './logo.svg';
import './App.css';
import React, {useState} from 'react'

import AddTaskForm from './components/add_task_form/add_task_form'
import TaskList from './components/task_list/task_list'

function App() {

  const [tasks, setTasks] = useState([])
  console.log("master task: ", tasks)

  

  return (
    <div className="App">
      <h1>ToDo List</h1>
      <AddTaskForm tasks={tasks} setTasks={setTasks}/>
      <TaskList tasks={tasks} setTasks={setTasks}/>
    </div>
  );
}

export default App;
