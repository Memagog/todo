import React from "react";
import TodoItem from "./ItemTodo";

const TodosList = props => {
    return (
      <ul>
        {props.todos.map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            handleChangeProps={props.handleChangeProps}
            deleteTodoProps={props.deleteTodoProps}
            updateTodoProps={props.updateTodoProps}
          />
        ))}
      </ul>
    )
  }
  export default TodosList