import React from 'react'
import './Singup.css'
import {useState} from 'react'
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Signup = () => {
    const nevigator = useNavigate()
    const [formData,setFormData] = useState({
        gmail:"",
        password:""
    })
   
    function changeHandler(event){
        const {name,value}=event.target;
        setFormData({
            ...formData,
            [name]:value
            
        })
     

    }

    function submitHandler(event){
        event.preventDefault()
        const gmail_pattern =/^[a-zA-Z0-9._%+-]+@gmail\.com$/;
      

        if(gmail_pattern.test(formData.gmail))
        {
            toast.success("Your Are Loged in")
            setTimeout(() => {
                nevigator("/Home");
              }, 6000);
            setFormData({
                gmail:"",
                password:""
            })
        }

        else{
            toast.error("Please Enter Valid Email or Password")
        }
        console.log(formData);
        
    }
   
  return (
    <div>
    
    <div className='wrapper'>
    <h2>SUPERFLIX</h2>
     <h1>Sign In</h1>
      <div className='form-set-up'>

     <form onSubmit={submitHandler}>

     
     <input type='text' name='gmail' value={formData.gmail} onChange={changeHandler} placeholder='Enter Your Gmail or Phone Number '></input>
     <br></br>

     
     <input type='password' name='password' value={formData.password} onChange={changeHandler} placeholder='Password '></input> <br></br>
     <button  type='submit'>Sign In</button>
   
     </form>
     <h3>OR</h3>
     <button className='code'>Use a Sign In Code </button>

     <p>Forget the password </p>
     <p>New in newtflix <i>Signup  Now</i></p> 
     <p className='t'>This page is protected by Google CAPTCHA to ensure you're not a bot.
     <br></br> Learn more.</p>
     
     </div>
    
     <ToastContainer/>
   
    </div>
    <Footer/> 
    </div>
  )
}

export default Signup
