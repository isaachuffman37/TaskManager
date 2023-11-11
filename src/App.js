import DisplayDoneTasks from './DisplayDoneTasks';
import './App.css';
import { useState, useEffect } from "react";
import AddTask from './AddTask';
import DisplayToDoTasks from './DisplayToDoTasks';

function App() {
  const[data, setData] = useState({items: []})

  // add the task to the the data
  const addTask = (task) =>{
    let tasks = data["items"]
    tasks.push(task)
    // sets the data so that the paeg rerenders with updated data
    setData({items: tasks})
  }

  // this function deletes the task from data
  const deleteTask = (task) =>{
    let tasks = data["items"]
    const index = tasks.indexOf(task)
    // deletes the task from the list at the index
    tasks.splice(index,1)
    setData({items:tasks})
  }

  // changes the task variable to done
  const markAsDone = (task) =>{
    let tasks = data["items"];
    const index = tasks.indexOf(task);
    // changes to done
    tasks[index].done = true;
    setData({items:tasks})
  }

  //returns the list of the tasks that are not done
  const filterNotDone = (tasks) =>{
    let notDoneTasks = [] 

    for (const task of tasks){
      if (task.done === false ){
        notDoneTasks.push(task)
      }
    }
    return notDoneTasks
  }

  // returns a list of the done tasks
  const filterDone = (tasks) =>{
    let doneTasks = [] 

    for (const task of tasks){
      if (task.done === true){
        doneTasks.push(task)  
      }
    }
    return doneTasks
  }

  // returns the components that I created and the html and css associated with them
  // the properties are elements that can be accessed in the component file
  return (
    <div className="App">
      <h1 className='header'>WELCOME TO THE TASK MANAGER!</h1>
      <AddTask addTask = {addTask}/>
      <DisplayToDoTasks delete= {deleteTask} tasks = {filterNotDone(data["items"])} markDone = {markAsDone}/>
      <DisplayDoneTasks delete = {deleteTask} tasks = {filterDone(data["items"])}/>

      
    </div>
  );
}

// exports the app so that index.js can call it
export default App;
