import React,{useState} from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css';
import LoginSignUp from './pages/loginSignUpPages/LoginSignUp';
import Sidebar from './pages/Sidebar/sidebar';
import BoardPage from './pages/Borad/BoardPage';
import AnalyticsPage from './pages/Analytics/AnalyticsPage';
import Settingspage from './pages/Settings/Settingspage';

function App() {
  const [loggedin,sertLoggedIn]=useState(true)
  if(!loggedin){
    return(
     
         <LoginSignUp />
    
      

    )
  }
  return (
    <Router>
      { loggedin? (
         <div className='container'>
               <Sidebar />
             <div className='main-content'>
                
              
               <Routes>
                 <Route path="/" element={<BoardPage  />} />
                 <Route path="/analytics" element={<AnalyticsPage  />} />
                 <Route path="/settings" element={<Settingspage  />} />
              </Routes>
          
          
                </div>
             
          </div> 

      ):(
        <Routes>
            <Route path="/" element={<LoginSignUp  />} />
        </Routes>
      )

      }
    </Router>

   
  );
}

export default App;
