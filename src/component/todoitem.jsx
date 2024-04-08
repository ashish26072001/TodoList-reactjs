import { RiDeleteBin6Line } from "react-icons/ri";
function TodoItem({todoname,tododate,onDeleteClick}){
    return( <div className="container">
    <div className="row kg-row">
      <div className="col-6">{todoname}</div>
      <div className="col-4">{tododate}</div>
      <div className="col-2"><button type="button" className="btn btn-danger kg-button" onClick={()=>onDeleteClick(todoname)}>Delete<RiDeleteBin6Line /></button></div>
    </div>
  </div>);
};
export default TodoItem;