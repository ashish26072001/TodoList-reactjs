
import Todoheading from "./component/Todoheading";
import Todo from "./component/todo";
import Last from "./component/last";
import "./App.css";

import TodoItems from "./component/Todoitems";
import { useState } from "react";
function App(){
  
   
  const [todoItemss,settodoitemss]=useState([]);
  const handleNewItem=(itemName,itemDueDate)=>{
    const newTodoItems=[...todoItemss,{name:itemName,duedate:itemDueDate},];
    settodoitemss(newTodoItems);

  }
  const handleDeleteItem=(todoItemName)=>{
    const newTodoItems=todoItemss.filter(item=>item.name!==todoItemName);
    settodoitemss(newTodoItems);
  }

  return ( <div className="outerdiv">
  <center className="todo-container">
    
    <Todoheading />
    <Todo onNewItem={handleNewItem}></Todo>
    {todoItemss.length==0&&<Last></Last>}
    <TodoItems todoItems={todoItemss} onDeleteClick={handleDeleteItem}></TodoItems>
  </center> 
  </div>
  );
};
export default App;
