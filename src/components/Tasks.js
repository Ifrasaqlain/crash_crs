import React from "react";
import Task from "./Task";

const Tasks = ({ listItems, DeleteFunc, ToggleReminder }) => {
  return (
    <div className="taks-wrapper">
      <div style={{ textAlign: "left" }}>
        {listItems.map((tsk, i) => (
          <Task
            key={i}
            task={tsk}
            onDelete={DeleteFunc}
            onToggle={ToggleReminder}
          />
        ))}
      </div>
    </div>
  );
};

export default Tasks;
