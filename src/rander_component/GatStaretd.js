import React from 'react'
import { useNavigate } from 'react-router-dom';
import Nev from './Nev';
import './GetStarted.css'

const GatStaretd = () => {
    const nevigate = useNavigate()
   function next(){
    nevigate('/Createpassword')
   }


  return (
    <div className='main_nev'>
     
      <Nev/>
      <hr></hr>
    <div className='setup1'>
    <img src='/images/Devices.png' alt='image not found'></img>
    <div className='text3'>
    <h1>
    Finish setting up your account
    </h1>
    <p>
    Netflix is personalised for you. Create a password to watch on any device at any time.
    </p>
    </div>

    </div>
    <button className='btn3' onClick={next}>Next</button>
   
    </div>
  )
}

export default GatStaretd
