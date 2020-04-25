import React, { useState,useEffect } from 'react'
import TodoList from './TodoList'
import {Context} from './Context'

export default function App() {
  const [todos,setTodos]= useState([
      {id: 1, title: 'First todo', completed: false},
      {id: 2, title: 'Second todo', completed: false},
    ])
  
  const [todoTitle,setTodoTitle]= useState('');
    
  const addTodo = e =>{
       if( e.key === 'Enter'){   
    setTodos ([...todos,{
        id:Math.floor(Math.random() * Math.floor(1000)),
        title: todoTitle,
        completed: false
    }
     ])
      setTodoTitle('')
       }
  }    

  
  useEffect(()=>{
  const taskList = todos===null ? []: localStorage.getItem('todos');
  setTodos(JSON.parse(taskList))
  }, [])
 
  
  useEffect(()=>{
   localStorage.setItem('todos',JSON.stringify(todos))  
  }, [todos]
  )
    
    const removeTask = id =>{
        setTodos(todos.filter(todo=>{
               return  todo.id!==id            
        }))
    }
    
    const toggleTask = id =>{
        
        setTodos(todos.map(todo=>{
            if(todo.id===id){
            todo.completed = !todo.completed
            }
            return todo
        }))
        
        
        
    }
    
  
  
    return (
    <Context.Provider value={{ 
        removeTask,toggleTask
        }}>    
        
        
      <div className="container">
        <h1>Todo app</h1>

          <div className="input-field">
            <input type="text" 
             value={todoTitle}
             onChange = {e=> setTodoTitle(e.target.value)}
             onKeyPress = {addTodo}
            />
            <label>Todo name</label>
          </div>

          <TodoList todos={todos} />
      </div>
    </Context.Provider>  
    );
  
}