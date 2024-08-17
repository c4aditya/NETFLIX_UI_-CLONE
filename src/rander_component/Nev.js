import React from 'react'
import { useNavigate } from 'react-router-dom'

import './Nev.css'
const Nev = () => {
    
        const nevigate = useNavigate()
        function Signup(){
        nevigate('/signup')
    
        }
    
  return (
    <div>
        <nav className='nev'>
        <h1>
            SUPERFLIX
            
        </h1>
        <button className='signin' onClick={Signup}> Sign in  </button>
        
      </nav>
    </div>
  )
}

export default Nev
