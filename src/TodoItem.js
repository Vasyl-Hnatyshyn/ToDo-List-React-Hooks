import React, { useState } from 'react'


export default function TodoItem({title, id, completed}) {
    
     
const [checked, setChecked] = useState(completed);
    
    
const visual = ['todo'];
    
if (checked) {
    visual.push('completed')
}  
    
  return (
    <li className={visual.join(' ')}>
      <label>
        <input
          type="checkbox"
          checked = {checked}
          onChange={()=>setChecked(!checked)}
          
        />
        <span>{title}</span>

        <i
          className="material-icons red-text"
        >
          delete
        </i>
      </label>
    </li>
  )
}