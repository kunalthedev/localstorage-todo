import React, {useState} from 'react'
import {Form, FormGroup, Input,InputGroup, InputGroupAddon, Button} from 'reactstrap'
import {v4} from 'uuid'

const TodoForm = ({addTodos}) => {
    const [todoString, setTodoSting] =useState("")

    const handleSubmit= e => {
        e.preventDefault()
        if(todoString === ""){
            return alert("Add some value")
        }
        const todo = {
            id: v4(),
            todoString
        }
        addTodos(todo)
        
        setTodoSting("")
    }

    return (
        <Form onsubmit={handleSubmit}>
            <FormGroup>
                <InputGroup>
                    <Input 
                        type="text"
                        name="todo"
                        id="todo" 
                        placeholder="Add todos..."
                        value={todoString}
                        onchange={e => setTodoSting(e.target.value)}/>
                    <InputGroupAddon type="prepend">
                        <Button className="primary">Add Todo</Button>
                    </InputGroupAddon>
                </InputGroup>
            </FormGroup>
        </Form>
    )
}

export default TodoForm
