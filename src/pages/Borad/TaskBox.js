import React, { useState } from 'react';
import { SlArrowDown, SlArrowUp } from "react-icons/sl";
import { TfiLayers } from "react-icons/tfi";
import './TaskBox.css'; // Import styles for the task box

const TaskBox = ({ task }) => {
  const [checklistVisible, setChecklistVisible] = useState(false);

  // Toggle checklist visibility
  const toggleChecklist = () => {
    setChecklistVisible(!checklistVisible);
  };
  const completedTasksCount = task.checklist.filter(item => item.done).length;
  

  return (
    <div className="task-box-container">
        <span
                  className={`priority-label ${task.priority === 'HIGH PRIORITY' 
                    ? 'high-priority' 
                    : task.priority === 'MODERATE PRIORITY' 
                    ? 'medium-priority' 
                    : 'low-priority'}`}
                  
                ></span>
          <span className='priority-text'>{task.priority}</span>
          <h4 className="task-title">{task.title}</h4>
       
      <div className="task-box-header">
       
       
        
        <p className="checklist-info">Checklist ({completedTasksCount}/{task.checklist.length})</p>
        <div className="task-box-icons">
          <button className="toggle-btn" onClick={toggleChecklist}>
            {checklistVisible ? <SlArrowUp /> : <SlArrowDown />}
          </button>
        </div>
      </div>

      {checklistVisible && (
        <div className="task-checklist">
          <p>Checklist ({task.checklist.filter(item => item.done).length}/{task.checklist.length})</p>
          {task.checklist.map((item) => (
            <div className="checklist-item" key={item.id}>
              <input type="checkbox" checked={item.done} readOnly />
              <label>{item.text}</label>
            </div>
          ))}
        </div>
      )}

      <div className="task-footer">
        <span className="task-date">{task.date}</span>
        <div className="task-status-container">
          {task.status.map((status, index) => (
            <span className="task-status" key={index}>{status}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TaskBox;
