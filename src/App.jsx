import React, { useState } from 'react'
import TodoForm from './Components/TodoForm'
import Todo from './Components/Todo'

export default function App() {

  let [todos , settodos] = useState([])
  let [todoshow , settodoshow] = useState("all")
  let [toggleallcomplete , settoggleallcomplete] = useState(true)

  const addTodo = (todo) => {
    settodos([todo , ...todos])
  }

  function deletetask(deleteid){
    let newtodos = [...todos];
    newtodos = newtodos.filter((todo)=> {return todo.id !== deleteid})
    settodos(newtodos)
  }

  const updatetodoshow =(s)=>{
    settodoshow(s)
  }
  const removeallconpletetodos = ()=>{
    settodos(todos.filter((todo)=> !todo.complete))
  }
  const togglecomplete = (id)=>{
    settodos(todos.map((todo)=>{
      if(todo.id === id){
        return{
          ...todo,
          complete: !todo.complete
        }
      }else{
        return todo
      }
    }))
  }

  if(todoshow === "active"){
    todos = todos.filter((todo)=> !todo.complete)
  }else if(todoshow === "complete"){
    todos = todos.filter((todo)=> todo.complete)
  }

  // function done(index){
  //   let h111 = document.getElementById(index)
  //     h111.classList.toggle('done')
  // }

  return (
    <div className='bg-dark vh-100 flex-column m-auto d-flex justify-content-center align-items-center' >
      <TodoForm onSubmit2={addTodo}/>
      <Todo todos={todos} deletetask={deletetask} togglecomplete={togglecomplete}  />
      <div className=''>
        <button className="btn m-1 btn-warning" onClick={()=>updatetodoshow("all")} >All</button>
        <button className="btn m-1 btn-warning" onClick={()=>updatetodoshow("active")} >Active</button>
        <button className="btn m-1 btn-warning" onClick={()=>updatetodoshow("complete")} >Complete</button>
      </div>
      <button className="btn m-1 btn-warning" onClick={removeallconpletetodos} >remove all complete todos</button>
      <button className="btn m-1 btn-warning" onClick={()=>{
        settodos(
          todos.map((todo)=>({
            ...todo,
            complete: toggleallcomplete
          }))
        )
        settoggleallcomplete(!toggleallcomplete)
      }} >toggle all complete: {`${toggleallcomplete}`}</button>

    </div>

  )
}
