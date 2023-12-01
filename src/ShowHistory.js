import Table from "react-bootstrap/esm/Table";

function showHistory(props){
    const showTask = (item) =>{
        return(
            <tr>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.time}</td>
                <td>{item.description}</td>
                <td><button className = "btn btn-danger" onClick={()=>props.delete(item)}>Delete</button></td>
            </tr>
        )
    }

    return(
        <div>
        <h2 className = "task-type">History</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Date</th>
                        <th>Est. Time</th>
                        <th>Description</th>
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






export default showHistory