import React, { useContext } from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Authentication/AuthProvider';


const Register = () => {

    const { user, createUser, addDisplayName } = useContext(AuthContext)

    const handleRegister = (e) => {

        e.preventDefault();
        const form = new FormData(e.currentTarget);
        const name = form.get('name');
        const imgurl = form.get('imgurl');
        const email = form.get('email')
        const password = form.get('password');

        createUser(email, password, name, imgurl)
            .then(res => {
               addDisplayName(res.user,name)
            })
            .catch(error => console.log("error", error));

        console.log("log in user is", user)

        // console.log(e.currentTarget)
        // console.log(e.target)

        // const form = new FormData(e.currentTarget)

        // console.log(form)
        // console.log(form.get('name'))
        // console.log(form.get('imgurl'))
        // console.log(form.get('email'))
        // console.log(form.get('password'))
    }


    return (
        <div>
            <Navbar></Navbar>
            <div className=' bg-[#F3F3F3] '>

                <form onSubmit={handleRegister} className=" md:w-3/4 lg:w-1/2 mx-auto pt-28 px-2">
                    <h1 className='text-[#403F3F] font-bold text-center text-2xl pb-7'>Register Your Account</h1>
                    <hr className='h-1 bg-white ' />
                    <div className="form-control pt-5">
                        <label className="label">
                            <span className="label-text" >Your Name </span>
                        </label>
                        <input type="text" required name="name" placeholder=" Enter Your Name" className="input input-bordered" />
                    </div>
                    <div className="form-control pt-5">
                        <label className="label">
                            <span className="label-text" > Photo URL </span>
                        </label>
                        <input type="url" required name="imgurl" placeholder=" Enter Your Photo URL" className="input input-bordered" />
                    </div>
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
                    </div>

                    <div className=' mt-3'>
                        <input type="checkbox" name="" id="" />  Accept Terms & Conditions
                    </div>

                    <div className="form-control mt-6">
                        <button className="bg-[#403F3F] text-[#F3F3F3] py-4"> Register </button>
                    </div>
                </form>
                <div>
                    <p className=' text-center mt-3'> Alrady Have a acount? <Link to="/login" className='text-[#F97A7B] font-bold'> Login </Link> </p>
                </div>
            </div>
        </div>
    )
}

export default Register