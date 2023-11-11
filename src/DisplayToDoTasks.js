import {useState} from "react";
import Table from 'react-bootstrap/Table';

function DisplayToDoTasks(props){





    const showTask = (item) =>{
        return(
            <tr>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.description}</td>
                <td><button className = "btn btn-primary" onClick={() => props.markDone(item)}>Mark-done</button></td>
                <td><button className = "btn btn-danger" onClick={()=>props.delete(item)}>Delete</button></td>
            </tr>
        )
    }

    return(
        <div>
            <h2 className = "task-type">To-Do</h2>
            <Table className="table" striped bordered hover >
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Est. Time</th>
                        <th>Description</th>
                        <th>Mark Done</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(showTask)}
                </tbody>
            </Table>
        </div>
    )

}

export default DisplayToDoTasks