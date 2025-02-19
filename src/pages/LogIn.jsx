import React from 'react'
import Header from '../components/Header'
import { Form, Link } from 'react-router-dom'
import Navbar from '../components/Navbar'

const LogIn = () => {

  const handleForm = (e) => {

    e.preventDefault();
    const form = new FormData(e.currentTarget)

    const email = form.get('email');
    const password = form.get('password');
    
    // console.log(e.currentTarget)
    // console.log(e.target)

    // const form = new FormData(e.currentTarget)

    // console.log(form)
    // console.log(form.get('email'))
    // console.log(form.get('password'))


  }

  return (

    <>
      <Navbar></Navbar>
      <div className=' bg-[#F3F3F3] h-screen'>
      
          {/* <form className=' border p-8 mt-16 ' onSubmit={handleForm}>
                <h2 className='font-bold'> Login your account </h2>
                <hr />
                <div className='flex flex-col'>
                <label>Email address</label>
                <input type="text" required name='email'/>
                </div>

                <div className='flex flex-col'>
                <label > Password </label>
                <input type="password" required name="password" id="" />
                </div>
                <button type='submit'> Log In</button>
            </form> */}
          <form onSubmit={handleForm} className=" md:w-3/4 lg:w-1/2 mx-auto pt-28 px-2">
            <h1 className='text-[#403F3F] font-bold text-center text-2xl pb-7'>Login Your Account</h1>
            <hr className='h-1 bg-white ' />
            <div className="form-control pt-5">
              <label className="label">
                <span className="label-text" >Email Address </span>
              </label>
              <input type="email" required name="email" placeholder=" Enter Your Email Address" className="input input-bordered" />
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text" > Password </span>
              </label>
              <input type="password" required name="password" placeholder="Enter Your Password" className="input input-bordered" />

              <label className="label" >
                <Link to={'/'} className="label-text-alt link link-hover"> Forgot password </Link>
              </label>
            </div>

            <div className="form-control mt-6 ">
              <button className="bg-[#403F3F] text-[#F3F3F3] py-4"> Login </button>
            </div>
          </form>

          <div>
            <p className=' text-center mt-3'> Don't Have a acount? <Link to="/register" className='text-[#F97A7B] font-bold'> Register</Link> </p>
          </div>
      </div>

    </>

  )
}

export default LogIn