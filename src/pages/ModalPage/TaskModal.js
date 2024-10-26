import React, { useState } from 'react';
import './TaskModal.css';

const TaskModal = ({  onClose }) => {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('');
  const [checklist, setChecklist] = useState(['']);
  const [dueDate, setDueDate] = useState('');
  const [tasks, setTasks] = useState([{ name: '', checked: false }]);
  const [totalChecklist,sertTotalCheckList]=useState(0)
  // Function to handle adding a new task to the checklist
  const handleAddTask = () => {
    setChecklist([...checklist, '']);
  };

  // Function to handle change in each checklist item
  const handleTaskChange = (index, value) => {
    const updatedChecklist = [...checklist];
    updatedChecklist[index] = value;
    setChecklist(updatedChecklist);
  };
  const handleCheckboxChange = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].checked = !updatedTasks[index].checked;
    setTasks(updatedTasks);
  };

  // Function to handle deleting a checklist item
  const handleDeleteTask = (index) => {
    const updatedChecklist = checklist.filter((_, i) => i !== index);
    setChecklist(updatedChecklist);
  };

  // Function to handle due date change (for simplicity, using input type="date")
  const handleDueDateChange = (e) => {
    setDueDate(e.target.value);
  };

  // Function to handle the form submission (POST method)
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create the task data object
    const taskData = {
      title,
      priority,
      checklist: checklist.filter(task => task.trim() !== ""), // Exclude empty tasks
      dueDate,
    };

    try {
      // Example POST request
      const response = await fetch('/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(taskData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log('Task created successfully:', result);
        onClose(); // Close the modal after success
      } else {
        console.error('Failed to create task:', response.statusText);
      }
    } catch (error) {
      console.error('Error while creating task:', error);
    }
  };



  return (
    <div className="modal-overlay">
      <div className="modal-content">
        
        <form onSubmit={handleSubmit}>
          <label>Title *</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Task Title"
            required
          />

          
          <div className="priority-options">
          <label>Select Priority *</label>
            <button
              type="button"
              className={`priority-btn ${priority === 'high' ? 'active' : ''}`}
              onClick={() => setPriority('high')}
            >
              <span
                  className="dot"
                  
                ></span>
              HIGH PRIORITY
            </button>
            <button
              type="button"
              className={`priority-btn ${priority === 'moderate' ? 'active' : ''}`}
              onClick={() => setPriority('moderate')}
            >
              <span
                  className="dot"
                  
                ></span>
              MODERATE PRIORITY
            </button>
            <button
              type="button"
              className={`priority-btn ${priority === 'low' ? 'active' : ''}`}
              onClick={() => setPriority('low')}
            >
              <span
                  className="dot"
                  
                ></span>
              LOW PRIORITY
            </button>
          </div>

          <label>Checklist (0/{checklist.length}) *</label>
          {checklist.map((task, index) => (
            <div key={index} className="checklist-item">
                   <input
                type="checkbox"
                checked={task.checked}
                onChange={() => handleCheckboxChange(index)}
              />
              <input
                type="text"
                value={task}
                onChange={(e) => handleTaskChange(index, e.target.value)}
                placeholder="Add a task"
              />
              <button
                type="button"
                className="delete-task"
                onClick={() => handleDeleteTask(index)}
              >
                🗑
              </button>
            </div>
          ))}
          <button
            type="button"
            className="add-task-btn"
            onClick={handleAddTask}
          >
            + Add New
          </button>

        

          <div className="modal-footer">
            <div className="">
            <label>Select Due Date *</label>
          <input
            type="date"
            value={dueDate}
            onChange={handleDueDateChange}
            required
          />

            </div>
            <div className="">
            <button
              type="button"
              className="cancel-btn"
              onClick={onClose}
            >
              Cancel
            </button>
            </div>
            <div className="">
                   <button
              type="submit"
              className="save-btn"
            >
              Save
            </button>
            </div>
      
         
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskModal;
