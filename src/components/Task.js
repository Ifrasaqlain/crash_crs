import React from "react";
import { FaTimes } from "react-icons/fa";

const Task = ({ task, onDelete, onToggle }) => {

  
  return (
    <div className={`div ${task.reminder ? 'reminder':''}`} onDoubleClick={()=>onToggle(task.id)}>
      <h3 className="title">
        {task.txt}
        <FaTimes style={{color:'red', cursor:'pointer'}} onClick={()=> onDelete(task.id)}/>
      </h3>
      <p>{task.day}</p>
    </div>
  );
};

export default Task;
