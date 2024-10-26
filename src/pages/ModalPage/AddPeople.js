import React, { useState } from 'react';
import './Addpeople.css';
import { RxCross2 } from "react-icons/rx";
const AddPeopleModal = ({  onAddPeopleClose }) => {
    const [email,setEmail]=useState(null)
    const [isValid, setIsValid] = useState(true);
    const [openSecondModal,setOpenSecondaryModal]=useState(false)


    const validateEmail = (input) => {
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(input);
      };
      const handleChange = (e) => {
        const inputValue = e.target.value;
        setEmail(inputValue);
        
        
        if (validateEmail(inputValue)) {
          setIsValid(true); 
        } else {
          setIsValid(false); 
          setEmail(null)
        }
      };
  const handleSubmit = () => {
    if(isValid){
        setOpenSecondaryModal(true)
    }
   
   console.log("clicked")
  


  };



  return (
    <div className="modal-overlay">
        {
           openSecondModal?(
           <div className="card1">
            <div className="card-content1">
              <p className="card-heading2"><p className="mail-text">{email} </p> is added to board </p>
              
            </div>
            <div className="card-button-wrapper1">
              
              <button className="card-button-Add primary" onClick={onAddPeopleClose}>Okey, got it</button>
            </div>
          
          </div>):(
              <div className="card1">
              <div className="card-content1">
                <p className="card-heading1">Add People to the board</p>
                <input type="text" name="email" id="" value={email} className="input-feild" placeholder='Enter the Email' onChange={handleChange}></input>
                {!isValid && <p style={{ color: 'red' }}>Please enter a valid email.</p>} 
              </div>
              <div className="card-button-wrapper1">
                <button className="card-button-cancel secondary" onClick={onAddPeopleClose}>Cancel</button>
                <button className="card-button-Add primary" onClick={handleSubmit}>Add Email</button>
              </div>
            
            </div>
          ) 
        }
      
    </div>
  );
};

export default AddPeopleModal;
