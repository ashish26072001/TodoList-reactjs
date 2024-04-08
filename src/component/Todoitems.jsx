import styles from './todoitems.module.css';
import TodoItem from"./todoitem"
const TodoItems=({todoItems,onDeleteClick})=>{
return( <div className={styles.todoItems}>
{todoItems.map(item =><TodoItem tododate={item.duedate} todoname={item.name} onDeleteClick={onDeleteClick}></TodoItem>)
    }
   </div> );
};
export default TodoItems;
