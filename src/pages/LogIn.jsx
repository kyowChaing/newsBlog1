import React from 'react'
import Header from '../components/Header'
import { Form } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LogIn = () => {

  return (

    <>
    <Navbar></Navbar>

    <div className=' bg-[#F3F3F3] h-screen'>
            
        <div className=' border w-7/12  m-auto '>

            <form className=' border p-8 mt-16 ' action={'/'}>
                <h2 className='font-bold'> Login your account </h2>
                <hr />
                <div className='flex flex-col'>
                <label>Email address</label>
                <input type="text"  name='email'/>
                </div>

                <div className='flex flex-col'>
                <label > Password </label>
                <input type="password" name="password" id="" />
                </div>
            </form>
            
        </div>
        
    </div>
    
    </>
    
  )
}

export default LogIn