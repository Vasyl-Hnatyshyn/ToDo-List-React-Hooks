import React, {useContext} from 'react'
import {Context} from './Context'


export default function TodoItem({title, id, completed}) {

const {removeTask,toggleTask}=useContext(Context);    
    
    
const visual = ['todo'];
    
if (completed) {
    visual.push('completed')
}  
    
  return (
    <li className={visual.join(' ')}>
      <label>
        <input
          className="one"
          type="checkbox"
          checked = {completed}
          onChange={()=>toggleTask(id)}
          
        />
        <span>{title}</span>

        <i className="material-icons red-text"
          onClick={()=>removeTask(id)}>
          delete
        </i>
      </label>
    </li>
  )
}