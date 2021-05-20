import React,{useState, useEffect} from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodoList from "./TodoList";
import { v4 as uuidv4 } from "uuid";
 const TodoContainer = () =>  {
    
    // useEffect(() => {
    //   console.log("test run eddeckt")
    //   const temp = localStorage.getItem("todos")
    //   const loadedTodos = JSON.parse(temp)
    //   if(loadedTodos){
    //     setTodos(loadedTodos)
    //   }
    // },[setTodos])
    const getInitialTodos = () => {
      const temp = localStorage.getItem("todos")
      const savedTodos = JSON.parse(temp)
      console.log("tttttttttttt")
      return savedTodos || []
    }
    const [todos, setTodos] = useState(getInitialTodos())
    useEffect(() => {       
        const temp = JSON.stringify(todos)
        localStorage.setItem("todos", temp)
     
    }, [todos])
    
    // componentWillUnmount() {
    //     console.log("Cleaning up...")
    // }
    const handleChange = (id) => {
        setTodos(prevState=>(
             prevState.map(todo => {
                if(todo.id === id){
                    return{
                        ...todo,
                        completed: !todo.completed
                    }                    
                }
                return todo
            })
        ))
    }
    const addTodoItem = (title) => {
        const newTodo = {
            id: uuidv4(),
            title: title,
            completed: false
        };
        setTodos(
            [...todos, newTodo]
        );
    }
    const delTodo = id => {
      setTodos([
               ...todos.filter(todo => {
                   return todo.id !== id;
               })
            ])
    }
    const updateTodo = (updatedTitle, id) => {
      setTodos(
            todos.map(todo=>{
                if(todo.id === id){
                    todo.title = updatedTitle
                }
                return todo
        })
        )
    }
    
  
   
   
        return (
           <div className="container"> 
           <div>
           <Header/>  
               <InputTodo addTodoItemProps={addTodoItem}/>          
               <TodoList 
               todos = {todos} 
               handleChangeProps={handleChange}
               deleteTodoProps = {delTodo}  
               updateTodoProps = {updateTodo}                      
               />
           </div>                
           </div>
        )
   
}
export default TodoContainer