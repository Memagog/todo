import React from "react";
import TodoItem from "./Item/TodoItem";

class TodoList extends React.Component {
    render(){
        return (
            <div>
                <ul>
                    {
                    this.props.todos.map(todo=>(
                        <TodoItem 
                        key={todo.id} 
                        todo={todo}
                        handleChangeProps={this.props.handleChangeProps}
                        deleteTodoProps={this.props.deleteTodoProps}
                        updateTodoProps={this.props.updateTodoProps}
                        />           
                    ))
                    }
                </ul>
            </div>
        )
    }
}
export default TodoList;