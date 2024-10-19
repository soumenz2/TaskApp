import React,{useState} from 'react'
import { VscEye } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CiUser } from "react-icons/ci";
import './SettingsPage.css'

const Settingspage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const registerSchema = Yup.object({
    username: Yup.string().required("Enter Username "),
    email:Yup.string().required("Enter Your Email"),
    password: Yup.string()
      .required("Enter Your Password")
      .min(6, "Password must be at least 6 characters long"),
    confirmPassword: Yup.string()
      .required("Enter Your Password")
      .min(6, "Password must be at least 6 characters long")

  });

  const registerformik = useFormik({
    initialValues: {
      username: "",
      email:"",
      password: "",
      confirmPassword:""
    },
    validationSchema: registerSchema,
    onSubmit: async (values) => {
      
      try {
        
        

      } catch (err) {
        if (err.response) {
          const errorMessage = err.response.data.msg;
          toast.error(errorMessage)
          console.log(errorMessage);
         
        } else {
          
          toast.error("Login failed")
        }
      }
    }
  });
  return (
    <div className=''>
      <ToastContainer />
      <form className="form_container" onSubmit={registerformik.handleSubmit} method="POST">
            <div className="title_container">
              <p className="title">Settings</p>
            </div>
            <br />
            <div className="input_container">
              <span className="icon"><CiUser /></span>
              <input
                placeholder="Name"
                name="username"
                type="text"
                className="input_field"
                id="user_field"
                value={registerformik.values.username}
                onChange={registerformik.handleChange}
                onBlur={registerformik.handleBlur}
               
              />
            </div>
            <div className="input_container">
              <span className="icon"><MdOutlineEmail /></span>
              <input
                placeholder=" Update Email"
                name="email"
                type="text"
                className="input_field"
                id="email_field"
                value={registerformik.values.email}
                onChange={registerformik.handleChange}
                onBlur={registerformik.handleBlur}
              />
            </div>
  
            <div className="input_container">
              <span className="icon"><RiLockPasswordLine /></span>
              <input
                placeholder="Old Password"
                name="password"
                type={showPassword ? "text" : "password"}
                className="input_field"
                id="password_field"
                value={registerformik.values.password}
                onChange={registerformik.handleChange}
                onBlur={registerformik.handleBlur}
              />
              <span 
                className="icon-eye" 
                onClick={togglePasswordVisibility}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
  
            
              <div className="input_container">
                <span className="icon"><RiLockPasswordLine /></span>
                <input
                  placeholder="New Password"
                  name="confirm_password"
                  type={showPassword ? "text" : "password"}
                  className="input_field"
                  id="confirm_password_field"
                  value={registerformik.values.confirmPassword}
                  onChange={registerformik.handleChange}
                  onBlur={registerformik.handleBlur}
                />
                <span 
                className="icon-eye" 
                onClick={toggleConfirmPasswordVisibility}
              >
                {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
              </div>
            
  
           
  
            <button title="Update"  type="submit" className="sign-in_btn">
              <span>Update</span>
            </button>
  
          </form>
    </div>
  )
}

export default Settingspage