import React,{useState} from 'react'
import './BoardPage.css'
import { BsPeople } from "react-icons/bs";
import { SlArrowDown } from "react-icons/sl";
import { TfiLayers } from "react-icons/tfi";
import { FaPlus } from "react-icons/fa6";
import TaskBox from './TaskBox';
function getDate() {
  const today = new Date();
  const month = today.getMonth() + 1;
  const year = today.getFullYear();
  const date = today.getDate();
  return `${month}/${date}/${year}`;
  
}
const tasks = [
  {
    id: 1,
    priority: "HIGH PRIORITY",
    title: "Hero section",
    checklist: [
      { id: 1, text: "Task to be done", done: true },
      { id: 2, text: "Task to be done", done: false },
      { id: 3, text: "Task to be done ede lorem Ipsum is a Dummy text t", done: false },
    ],
    date: "Feb 10th",
    status: ["Progress", "To-Do", "Done"],
  },
  {
    id: 2,
    priority: "MODERATE PRIORITY",
    title: "Typography change",
    checklist: [
      { id: 1, text: "Task to be done", done: false },
      { id: 2, text: "Task to be done", done: false },
    ],
    date: "Feb 12th",
    status: ["To-Do"],
  },
];


const BoardPage = () => {
  const [currentDate, setCurrentDate] = useState(getDate());
  return (
    <div>
      <div className="section1">
        <div className="">
          <h3>Welcome! Soumen</h3>
        </div>
        <div className="">
        <p>{currentDate}</p>
        </div>
      </div>
      <div className="section2">
      <div className="sub-section">
        <div className=""><h2 className="">Board</h2></div>
        <div className="">
        <button className="button1">
        <BsPeople />
          <p className="">Add People</p>
        </button>
        </div>
       
      </div>
      <div className="sub-section1">
        
       
        <label class="dropdown">

  <div class="dd-button">
  This Week
  </div>

  <input type="checkbox" class="dd-input" id="test" />

  <ul class="dd-menu">
    <li>Today</li>
    <li>This Week</li>
    <li>This Month</li>
    <li class="divider"></li>
   
  </ul>
  
</label>
      </div>
      </div>
     
      <div className="section3">
        <div className="section-box">
          <div className="hedaer-box">
            <div className=""><h4 className="">Backlog</h4></div>
            <div className="">
          <TfiLayers />
          </div>
          </div>
          {tasks.map((task, index) => (
            <TaskBox key={task.id} task={task} />
          ))}
          

        </div>
        <div className="section-box">
        <div className="hedaer-box">
            <div className=""><h4 className="">To Do</h4></div>
            <div className="">
            <FaPlus />
          <TfiLayers />
          </div>
          </div>
        </div>
        <div className="section-box">
        <div className="hedaer-box">
            <div className=""><h4 className="">In Progrss</h4></div>
            <div className="">
              
          <TfiLayers />
          </div>
          </div>
        </div>
        <div className="section-box">
        <div className="hedaer-box">
            <div className=""><h4 className="">Completed</h4></div>
            <div className="">
          <TfiLayers />
          </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BoardPage