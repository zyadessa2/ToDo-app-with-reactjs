import React from 'react'

export default function Todo(props) {
    

  return <>
    {props.todos.map((todo )=>(
        <div className='d-flex mt-2 border p-1 rounded justify-content-between w-75 text-white '>
            <p style={{textDecoration: todo.complete ? "line-through" : ""}} className='me-5 w-100 lead' onClick={()=>props.togglecomplete(todo.id)} id={todo.id}> {todo.text}</p>
            <button className='btn btn-primary ms-5' onClick={()=>props.deletetask(todo.id)}>x</button>
        </div>
        
    ))}
  </>
}
