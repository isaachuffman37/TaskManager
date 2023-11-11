import DisplayDoneTasks from './DisplayDoneTasks';
import './App.css';
import { useState, useEffect } from "react";
import AddTask from './AddTask';
import DisplayToDoTasks from './DisplayToDoTasks';

function App() {
  const[data, setData] = useState({items: []})

  const addTask = (task) =>{
    let tasks = data["items"]
    tasks.push(task)
    setData({items: tasks})
  }

  const deleteTask = (task) =>{
    let tasks = data["items"]
    const index = tasks.indexOf(task)
    tasks.splice(index,1)
    setData({items:tasks})
  }

  const markAsDone = (task) =>{
    let tasks = data["items"];
    const index = tasks.indexOf(task);
    tasks[index].done = true;
    setData({items:tasks})
  }

  const filterNotDone = (tasks) =>{
    let notDoneTasks = [] 

    for (const task of tasks){
      if (task.done === false ){
        notDoneTasks.push(task)
      }
    }
    return notDoneTasks
  }


  const filterDone = (tasks) =>{
    let doneTasks = [] 

    for (const task of tasks){
      if (task.done === true){
        doneTasks.push(task)  
      }
    }
    return doneTasks
  }


  return (
    <div className="App">
      <h1 className='header'>WELCOME TO THE TASK MANAGER!</h1>
      <AddTask addTask = {addTask}/>
      <DisplayToDoTasks delete= {deleteTask} tasks = {filterNotDone(data["items"])} markDone = {markAsDone}/>
      <DisplayDoneTasks delete = {deleteTask} tasks = {filterDone(data["items"])}/>

      
    </div>
  );
}

export default App;
