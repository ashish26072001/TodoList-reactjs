import { useState } from "react";
import { IoBagAdd } from "react-icons/io5";

function Todo({onNewItem}){
  const[todoName,setTodoName]=useState();
  const[dueDate,setDueDate]=useState();
  const handleNameChange=(event)=>{
    setTodoName(event.target.value); 

  }
  const handleDateChange=(event)=>{
    setDueDate(event.target.value);
  }
  const handleAddButtonclicked=()=>{
    onNewItem(todoName,dueDate);
    setTodoName("");
    setDueDate("");
  }
return  <div className="container text-center">
<div className="row kg-row">
  <div className="col-6"><input type="text" placeholder="Enter Todo Here" onChange={handleNameChange} value={todoName}/></div>
  <div className="col-4"><input type="date" onChange={handleDateChange} value={dueDate}/></div>
  <div className="col-2"><button type="button" className="btn btn-success kg-button" onClick={ handleAddButtonclicked}>Add<IoBagAdd /></button></div>
  
</div>
</div>
}
export default Todo; 