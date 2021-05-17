import React from 'react'
import {ListGroup, ListGroupItem} from 'reactstrap'
import {FaCheckDouble} from 'react-icons/fa'

const Todos = ( { todos, markedComplete } ) => {
    return (
        <ListGroup className="mt-5 mb-2 icons">
            {todos.map(todo => (
                <ListGroupItem key={todo.id}>
                {todo.todoString}
                <span className="float-right" onClick={()=> markedComplete(todo.id)}><FaCheckDouble /></span>
                </ListGroupItem>
            ))}
        </ListGroup>
    )
}

export default Todos
