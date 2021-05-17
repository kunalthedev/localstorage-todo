import React ,{useEffect, useState} from 'react'
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

import Todos from './Components/Todos'
import TodoForm from './Components/TodoForm'

const App = () => {
  const [todos,setTodos] = useState([])

  useEffect(() => {
    const localTodos = localStorage.getItem('todos')
    console.log({localTodos});
    if(localTodos){
      setTodos(JSON.parse(localTodos))
    }

  }, [])

  const addTodos = async todo => {
    setTodos([...todos, todo])
  }

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  } , [todos])

  const done = id => {
    setTodos(todos.filter(todo => todo.id !== id))
  }


  return (
    <Container fluid>
      <h1>Todo with local storage</h1>
      <Todos todos={todos} markedComplete={done}/>
      <TodoForm addTodos={addTodos} />
    </Container>
  )
}

export default App
