import { useState} from "react";

function AddTask(props){
    const [name, setName] = useState("")
    const [date, setDate] = useState("")
    const [time, setTime] = useState("")
    const [description, setDescription] = useState("")
    const [done, setDone] = useState(false)
    const [display, setDisplay] = useState(true)

    const addTaskToData = () => {
        props.addTask({name:name, date:date, time: time, description: description, done: done, display: display})
        setName("")
        setDescription("")
        setDate("")
        setTime("")
    }

    

    return (
        <div>
            <label className= "label" htmlFor="task-name">Name:</label>
            <input id = "task-name" value= {name} type = "text"  onChange={(e)=> setName(e.target.value)}></input>

            <label className= "label" htmlFor="task-date">Date:</label>
            <input id = "task-date" value = {date} onChange={(e)=> setDate(e.target.value)} type = "text"></input>

            <label className= "label" htmlFor="task-time">Est.Time:</label>
            <input id = "task-time" type = "text" value={time} onChange={(e)=> setTime(e.target.value)}></input>

            <label className= "label" htmlFor="task-description"> Description: </label>
            <textarea id = "task-description" type = "text" value={description} onChange={(e)=> setDescription(e.target.value)}></textarea>

            <br></br>
            <button id = "add-task-button"  className = "btn btn-success" onClick={()=>addTaskToData()}>Add Task</button>

        </div>
    )


}

export default AddTask