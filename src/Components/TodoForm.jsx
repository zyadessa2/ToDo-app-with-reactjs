import React, { useState } from 'react'
import shortid from 'shortid';


export default function TodoForm(props) {
    let inputtodo = document.querySelector('.inputtodo')
    const [ text , settext] = useState('')
    const handleform = (e)=>{
        e.preventDefault();
        props.onSubmit2({
            id: shortid.generate(),
            text: text,
            complete: false,
        })
        settext('')
    };

  return <>
  <form onSubmit={handleform} className='  w-75 mb-3 d-flex '>
    <input type="text" value={text} placeholder='to do here' className='form-control inputtodo' onChange={(e) => {settext(e.target.value)}}/>
    <button onClick={handleform} className='btn btn-primary w-50 ms-2'>add task</button>
  </form>
  </>
}
