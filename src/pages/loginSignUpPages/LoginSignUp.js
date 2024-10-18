import React, { useState } from 'react';
import './loginSignup.css';
import img from '../../image/art.png';
import { VscEye } from "react-icons/vsc";
import { MdOutlineEmail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { CiUser } from "react-icons/ci";

const LoginSignUp = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true); // State to toggle between Login and Register forms


  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  
  };

  const loginSchema = Yup.object({
    email: Yup.string().email("Invalid Email id").required("Enter Email Id"),
    password: Yup.string()
      .required("Enter Your Password")
      .min(6, "Password must be at least 6 characters long")
      .matches(/[A-Z]/, "Password must contain at least one uppercase letter")
    .matches(/[!@#$%^&*(),.?":{}|<>]/, "Password must contain at least one special character")
  });

  const loginformik = useFormik({
    initialValues: {
      email: "",
      password: ""
    },
    validationSchema: loginSchema,
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
    <div className="main-content">
      <ToastContainer autoClose={3000}/>
      <div className="content-left">
        <div className="box-content">
          <img src={img} alt="Hero-image" />
          <h1>Welcome aboard my friend</h1>
          <p>Just a couple of clicks and we start</p>
        </div>
      </div>

      <div className="content-right">
        {
          isLogin ? (
            <form className="form_container" onSubmit={loginformik.handleSubmit} method="POST">
          <div className="title_container">
            <p className="title">{isLogin ? "Login to your Account" : "Register a new Account"}</p>
          </div>
          <br />
          <div className="input_container">
            <span className="icon"><MdOutlineEmail /></span>
            <input
              placeholder="Email"
              name="email"
              type="text"
              className="input_field"
              id="email_field"
              value={loginformik.values.email}
              onChange={loginformik.handleChange}
              onBlur={loginformik.handleBlur}
            />
          </div>
          {loginformik.touched.email && loginformik.errors.email ? (
            <div className="error_message" >{loginformik.errors.email}</div>
          ) : null}

          <div className="input_container">
            <span className="icon"><RiLockPasswordLine /></span>
            <input
              placeholder="Password"
              name="password"
              type={showPassword ? "text" : "password"}
              className="input_field"
              id="password_field"
              value={loginformik.values.password}
              onChange={loginformik.handleChange}
              onBlur={loginformik.handleBlur}
            />
            <span 
              className="icon-eye" 
              onClick={togglePasswordVisibility}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          {loginformik.touched.password && loginformik.errors.password ? (
            <div className="error_message" >{loginformik.errors.password}</div>
          ) : null}
          
      
         

          

          <button title={isLogin ? "Sign In" : "Register"} type="submit" className="sign-in_btn">
            <span>{isLogin ? "Sign In" : "Register"}</span>
          </button>

          <div className="separator">
            <span>{isLogin ? "Have no account yet?" : "Already have an account?"}</span>
          </div>

          <button 
            type="button" 
            onClick={toggleForm} 
            className="sign-in_ggl"
          >
            <span>{isLogin ? "Register" : "Login"}</span>
          </button>
        </form>

          ): (
            <form className="form_container" onSubmit={registerformik.handleSubmit} method="POST">
            <div className="title_container">
              <p className="title">{isLogin ? "Login to your Account" : "Register a new Account"}</p>
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
                placeholder="Email"
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
                placeholder="Password"
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
                  placeholder="Confirm Password"
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
            
  
           
  
            <button title={isLogin ? "Sign In" : "Register"} type="submit" className="sign-in_btn">
              <span>{isLogin ? "Sign In" : "Register"}</span>
            </button>
  
            <div className="separator">
              <span>{isLogin ? "Have no account yet?" : "Already have an account?"}</span>
            </div>
  
            <button 
              type="button" 
              onClick={toggleForm} 
              className="sign-in_ggl"
            >
              <span>{isLogin ? "Register" : "Login"}</span>
            </button>
          </form>

          )
        }
       
      </div>
    </div>
  );
};

export default LoginSignUp;
