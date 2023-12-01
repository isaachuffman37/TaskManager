import DisplayDoneTasks from './DisplayDoneTasks';
import ShowHistory from './ShowHistory';
import './App.css';
import { useState, useEffect } from "react";
import AddTask from './AddTask';
import DisplayToDoTasks from './DisplayToDoTasks';
import axios from 'axios';

function App() {
  const[data, setData] = useState({items: []})

  // add the task to the the data
  // const addTask = (task) =>{
    // let tasks = data["items"]
    // var datas = JSON.stringify({
    //   "collection": "tasks",
    //   "database": "tasks",
    //   "dataSource": "Cluster0",
    //   "document" : task,
    // });
    // const requestOptions = {
    //   method: "POST",
    //   headers: {
    //     'Content-Type': 'application/json',
    //     'Access-Control-Request-Headers': '*',
    //     'apiKey': 'eD5zuukFrs09RcsTN7MEgdNRWnQbzVcgajfhnhkgP4xo45Mr4GVWEhhJUgmqBAK9',
    //   },
    //   body: datas,
    // };
    // fetch('https://us-west-2.aws.data.mongodb-api.com/app/data-hicfs/endpoint/data/v1/action/insertOne', requestOptions)
    //   .then((response) => response.json())
    //   .then((task) => {
    //     tasks.push(task);
    //     setData({ items: tasks });
    //   });
    // sets the data so that the paeg rerenders with updated data
  

  // var datas = JSON.stringify({
  //     "collection": "tasks",
  //     "database": "tasks",
  //     "dataSource": "Cluster0",
  //     "projection": {
  //         "_id": 1
  //     }
  // });
              
  // var config = {
  //     method: 'post',
  //     url: 'https://us-west-2.aws.data.mongodb-api.com/app/data-hicfs/endpoint/data/v1/action/findOne',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Access-Control-Request-Headers': '*',
  //       'api-key': 'c9Su2mYzvoAbqpiisJh3HWOWt9MOAVX61nPLzi9e1wrGmvvFYNIJOqstvsJR53z4',
  //     },
  //     data: datas
  // };
              
  // axios(config)
  //     .then(function (response) {
  //         console.log(JSON.stringify(response.data));
  //     })
  //     .catch(function (error) {
  //         console.log(error);
  //     });
  // }

  useEffect(() => {
    fetch("http://localhost:3000/items")
      .then((response) => response.json())
      .then((data) => setData({items:data}));
  }, []);

  const addTask = (task) =>{
    let tasks = data["items"]
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    };
    fetch("http://localhost:3000/items", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        tasks.push(data);
        setData({ items: tasks });
      });
  }



  // this function deletes the task from data
  const deleteTask = (task) =>{
    let tasks = data["items"]
    const requestOptions = {
      method: "DELETE"
    }
    fetch(`http://localhost:3000/items/${task.id}`, requestOptions).then((response)=>{
      if (response.ok) {
        const idx = tasks.indexOf(task);
        tasks.splice(idx,1);
        setData({items: tasks})
      }
    })
    // const index = tasks.indexOf(task)
    // // deletes the task from the list at the index
    // tasks.splice(index,1)
    // setData({items:tasks})
  }

  // changes the task variable to done
  const markAsDone = (task) =>{
    let tasks = data["items"];

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "name": task.name,
          "date": task.date,
          "time" : task.time,
          "description": task.description,
          "done": true,
          "display": task.display
        }
      ),
    };
    fetch(`http://localhost:3000/items/${task.id}`, requestOptions)
      .then((response) => {
        if (response.ok){
          const index = tasks.indexOf(task);
          // changes to done
          tasks[index].done = true;
          setData({items:tasks})
        }
        else{
          console.log("PUT error occurred")
        }
        });
      
  }
  const changeDisplay = (task) =>{
    let tasks = data["items"];

    const requestOptions = {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(
        {
          "name": task.name,
          "date": task.date,
          "time" : task.time,
          "description": task.description,
          "done": task.done,
          "display": false
        }
      ),
    };
    fetch(`http://localhost:3000/items/${task.id}`, requestOptions)
      .then((response) => {
        if (response.ok){
          const index = tasks.indexOf(task);
          // changes to done
          tasks[index].display = false;
          setData({items:tasks})
        }
        else{
          console.log("PUT error occurred")
        }
        })};

  //returns the list of the tasks that are not done
  const filterNotDone = (tasks) =>{
    let notDoneTasks = [] 

    for (const task of tasks){
      if (task.done === false && task.display == true){
          notDoneTasks.push(task)
        }
      
    }
    return notDoneTasks
  }



  // returns a list of the done tasks
  const filterDone = (tasks) =>{
    let doneTasks = [] 

    for (const task of tasks){
      if (task.done === true && task.display === true){
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
      <DisplayToDoTasks delete= {changeDisplay} tasks = {filterNotDone(data["items"])} markDone = {markAsDone}/>
      <DisplayDoneTasks delete = {changeDisplay} tasks = {filterDone(data["items"])}/>
      <ShowHistory delete = {deleteTask} tasks = {data["items"]}/>

      
    </div>
  );
  }

// exports the app so that index.js can call it
export default App;
