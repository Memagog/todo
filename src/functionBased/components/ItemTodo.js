import React, {useState, useEffect} from "react";
import styles from "./TodoItem.module.css"
import {BsTrashFill} from 'react-icons/bs'
import {RiPencilLine} from 'react-icons/ri'
const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  }
  
const TodoItem=(props)=>{
 const [editing, setEditing] = useState(false)
 useEffect(() => {
     return () => {
       console.log("RaxMontyirovali")
     }
 }, [])
  const handleEditing = () => {
    setEditing(true)
    console.log("hey child")    
  }
  const handleUpdateDone = (event) => {
   if(event.key === "Enter") {
     setEditing(false)
   }
  }
   
      let viewMode = {}
      let editMode = {}

      if(editing){
        viewMode.display = "none"
      } else {
        editMode.display = "none"
      }
    return (
       
        <li className={styles.item}>
          <div onClick={handleEditing} style={viewMode}><RiPencilLine/></div>
          <input type="text" 
          style={editMode} 
          className={styles.textInput} 
          value={props.todo.title}
          onChange={(e)=>{
            props.updateTodoProps(e.target.value, props.todo.id)
          }}
          onKeyDown={handleUpdateDone}
          />
          <input
            type="checkbox"
            className={styles.checkbox}
            checked={props.todo.completed}
            onChange={() =>props.handleChangeProps(props.todo.id)}
          />
          
          <button onClick={() => props.deleteTodoProps(props.todo.id)}>
            <BsTrashFill style={{ color: "orangered", fontSize: "16px" }} />
          </button>
          <span style={props.todo.completed ? completedStyle : null}>
          {props.todo.title}
          </span>
          
        </li>
      

      )
    
}

export default TodoItem;