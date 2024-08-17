import React from 'react';
import './frist.css';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate } from 'react-router-dom';




const First_page = () => {

  const nevigate =useNavigate();
    const[formData,setFormData]=useState({
        gmail:"",
        password:"",
   })

   function fillForm(event){
    const {name,value}=event.target;
    setFormData({
        ...formData,
        [name]:value
    })
    
   }
   function sumitHandler(event){

    event.preventDefault();
    const gmailPattern = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
   

 if(gmailPattern.test(formData.gmail))
  
  
    {
        toast.success("your email is saved ")
        nevigate('/getstarted')

        // form me se data hatane ke liye 
        setFormData({
            gmail:"",
            password:""
        })
   }

   else{
    toast.error("plese ptovide the valid email")
   }

}
   

    // Toggle visibility of the dropdown
 const [isDropdownVisible, setDropdownVisible] = useState(false);

 function clickHandler() {
      setDropdownVisible(!isDropdownVisible);
    
    }


    function signup(){ 
    nevigate('/signup')
}



  return (
    <div className='frist'>

       <div className='background'>


      <div className='upper'>
      <div className='logoimg'>
        <h1 >SUPERFLIX</h1>
        </div>

        <div className='buttons'>
           <button className='lang'  onClick={clickHandler}> Language</button>
           
                  
            <button  className='login' onClick={signup}>Signup</button>
        </div>
        
      </div>
     
      <div className={`language ${isDropdownVisible ? 'visible' : 'hidden'}`}>
        <button  className='dropdown-item'>Hindi</button>
        <button  className='dropdown-item'>English</button>
      </div>

      <div className='mid'>
        <h1>Unlimited movies, TV shows and more</h1>
        <p>Watch anywhere. Cancel anytime.</p>
        <p>Ready to watch? Enter your email to create or restart your membership.</p>

        <div className='mid_form'>

        <form onSubmit={sumitHandler}>
        <input type="text" name='gmail' onChange={fillForm} value={FormData.gmail} placeholder='Enter Your  mail' required  ></input>

        <button className='btn1' type="submit" >Get Started </button> 
             </form>
              <ToastContainer/>
        </div>
      </div>

      </div>   
    {/* tv content  */}
      <div className='tv'>
      <div className='text1'>
         <h1>
         Enjoy on your TV
         </h1>
         <h4>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h4>
        </div>
        <div className='tvimage'>
        <img src='/images/tvImage.png' alt="image not found" height="500px" width="600px"></img>
        <video  src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' autoPlay playsInline muted loop></video>
        </div>
      </div>

      {/* mobile content */}

      <div className='mobile'>
      {/* isme muje ye krna hai ki jo bhi mera sub image hai subim class ke uper aye iss lye mobile ka postion relative rakha hai  */}
      <div className='imgsection'>

     <img className='subim' src='/images/mobole_logo.jpg' alt='image not found' height="500px" width="600px"></img>


     <div className='subimage'>
     <img  src='/images/boxshot.png' alt='image not found' height="80px" width="60px"></img>
     <div>
     <p>Start Downlode
     <br></br>
     Downloding...</p>
     
     </div>
     <img src='/images/download-icon.gif' alt='image not found' height="80px" width="70px"></img>
     </div>
     </div>
     <div className='text2'>
     <h1>Download your shows to watch offline</h1>
     <h4>Save your favourites easily and always have something to watch.</h4>

     </div>
      </div>

      <div className='watch'>
        <div className='context'>
            <h1>
            Watch everywhere
            </h1>
            <h3>
            Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
            </h3>
        </div>

        <div className='watch-img'>
            <img src="/images/device-pile-in.png"></img>
            <video src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' autoPlay playsInline muted loop></video>
        </div>
      </div>

      <div className='kid'>
        <div>
      <img src='/images/kid.png'></img>
        </div>

        <div className='kidcontent'>
         <h1>Create profiles for kids</h1>
         <h3>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h3>
        </div>
      </div>

      {/* question section start here  */}

   

      {/* <div >

      <div className='questionstype'>
       
        <h1>What is netflix</h1>
        <button onClick={textShow}> + </button>
        </div>
      

      {/* 1-jiss class ko show krana hau iska class name ex- answer , jiss name se useState set ho ex-  questions  css ki class*/}
     {/* <div className={`answer ${questions ? 'visible':'hidden'}`}>
      <p>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

       You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</p>
     </div> */}

     
      
   

      {/* </div> */} 
<div className='end-form'>
<h1>  Ready to watch? Enter your email to create or restart your membership.</h1>
      <div className='mid_form'>

<form onSubmit={sumitHandler}>
<input type="text" name='gmail' onChange={fillForm} value={FormData.gmail} placeholder='Enter Your  mail' required  ></input>

<button className='btn1' type="submit">Get Started </button> 
     </form>
      <ToastContainer/>
</div>
</div>

      
    </div>
  );
}

export default First_page;
